import { docxVerboseType, maxFileSize } from "config";
import { convertToHtml } from "mammoth";
import {
  DragEventHandler,
  FormEventHandler,
  useEffect,
  useReducer,
  useRef,
} from "react";
import type {
  TranslatorFormActionType,
  TranslatorFormDataType,
  TranslatorInputsType,
} from "types";

const initialData: TranslatorFormDataType = {
    showFailError: false,
    showFileError: false,
    isTranslating: false,
    hasUpload: false,
    translatedDoc: "",
  },
  reduceFormData = (
    prev: TranslatorFormDataType,
    { type, payload }: TranslatorFormActionType
  ) =>
    type === "hasUpload"
      ? { ...prev, hasUpload: payload as boolean }
      : type === "isTranslating"
      ? { ...prev, isTranslating: payload as boolean }
      : type === "showFailError"
      ? { ...prev, showFailError: payload as boolean }
      : type === "showFileError"
      ? { ...prev, showFileError: payload as boolean }
      : type === "translatedDoc"
      ? { ...prev, translatedDoc: payload as string }
      : prev;

export default function useTranslatorForm() {
  const [data, setData] = useReducer(reduceFormData, initialData),
    fileInputRef = useRef<HTMLInputElement>(null);

  const renderTranslatedDoc = async (doc: File, locale: string) => {
      setData({ type: "isTranslating", payload: true });
      const { value: html } = await convertToHtml(
          // @ts-ignore
          { arrayBuffer: doc.arrayBuffer() }
        ),
        body = JSON.stringify({ html, locale }),
        res = await fetch("/api/translateHtml", {
          body,
          method: "post",
          headers: [["Content-Type", "application/json"]],
        }),
        translation = await res.text();
      setData({ type: "isTranslating", payload: false });

      return setData({ type: "translatedDoc", payload: translation });
    },
    handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      const { file, locale } = Object.fromEntries(
          new FormData(e.currentTarget)
        ) as TranslatorInputsType,
        hasValidFileSize = maxFileSize > file.size;

      try {
        return hasValidFileSize
          ? await renderTranslatedDoc(file, locale)
          : handleFormError(e);
      } catch (error) {
        console.error(error),
          setData({ type: "isTranslating", payload: false }),
          setData({ type: "showFailError", payload: true });
      }
    },
    handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();

      const files = e.dataTransfer.files;

      files.length === 1 &&
        files[0].type === docxVerboseType &&
        ((fileInputRef.current!.files = files),
        setData({ type: "hasUpload", payload: !!files.length }));
    },
    handleFormError: FormEventHandler<HTMLFormElement> = (event) => (
      event.preventDefault(),
      event.stopPropagation(),
      setData({ type: "showFileError", payload: true })
    );

  useEffect(() => {
    if (data.showFailError) {
      const timerId = setTimeout(
        () => setData({ type: "showFailError", payload: false }),
        1e4
      );

      return () => clearTimeout(timerId);
    }
  }, [data.showFailError]);

  return { ...data, setData, fileInputRef, handleDrop, handleSubmit };
}
