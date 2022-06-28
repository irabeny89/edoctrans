import {
  DragEventHandler,
  FormEventHandler,
  useState,
  useRef,
  FormEvent,
  useEffect,
} from "react";
import { MdTranslate, MdCheck, MdOutlineCancel } from "react-icons/md";
import { TranslatorFormPropsType, TranslatorInputsType } from "types";
import LocaleSelect from "./LocaleSelect";
import { maxFileSize, supportedLanguages } from "config";
import Image from "next/image";
import { convertToHtml } from "mammoth";
import dynamic from "next/dynamic";

const TranslatorDialog = dynamic(() => import("./TranslatorDialog"));

export default function TranslatorForm({
  dragNdropHint,
  failMessage,
  fileSizeError,
  buttonLabel: { translate },
  inputLabel: { to },
}: TranslatorFormPropsType) {
  const [showFileError, setShowFileError] = useState(false),
    [showFailError, setShowFailError] = useState(false),
    [translatedDoc, setTranslatedDoc] = useState(""),
    [isTranslating, setIsTranslating] = useState(false),
    [hasUpload, setHasUpload] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const renderTranslatedDoc = async (doc: File, locale: string) => {
      setIsTranslating(true);
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
      setIsTranslating(false);

      return setTranslatedDoc(translation);
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
        console.error(error), setIsTranslating(false), setShowFailError(true);
      }
    },
    handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      const allowedType =
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        files = e.dataTransfer.files;

      files.length === 1 &&
        files[0].type === allowedType &&
        ((fileInputRef.current!.files = files), setHasUpload(!!files.length));
    },
    handleFormError: FormEventHandler<HTMLFormElement> = (event) => (
      event.preventDefault(), event.stopPropagation(), setShowFileError(true)
    );

  useEffect(() => {
    if (showFailError) {
      const timerId = setTimeout(() => setShowFailError(false), 1e4);

      return () => clearTimeout(timerId);
    }
  }, [showFailError]);

  return (
    <div className="space-y-6 mb-28 text-slate-400 sm:w-2/3 md:w-11/12 lg:w-2/3 mx-auto">
      <TranslatorDialog doc={translatedDoc} setDoc={setTranslatedDoc} />
      <div
        className="text-center rounded-xl outline-dashed cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current!.click()}
      >
        {hasUpload && !showFileError && (
          <MdCheck color="lightgreen" size={100} className="float-right" />
        )}
        {showFileError && (
          <MdOutlineCancel color="red" size={100} className="float-right" />
        )}
        <Image alt="add file" src="/add_files.svg" width="200" height="200" />
        <p>{dragNdropHint}</p>
      </div>

      {showFileError && <small className="text-red-400">{fileSizeError}</small>}
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="flex justify-between mx-auto">
          <input
            required
            ref={fileInputRef}
            name="file"
            type="file"
            accept=".docx"
            onChange={() => setShowFileError(false)}
            className={`py-1 ${
              showFileError && "ring ring-red-400"
            } file:rounded-lg file:bg-purple-900 file:text-white file:py-2`}
          />
          <label>
            {to}
            <LocaleSelect locales={supportedLanguages} />
          </label>
        </div>

        <button
          type="submit"
          className="flex justify-center py-2 bg-blue-600 text-white shadow-lg w-11/12 mx-auto rounded-full"
        >
          <MdTranslate
            size="25"
            className={`${isTranslating && "animate-spin"}`}
          />{" "}
          {translate}
        </button>
      </form>

      {showFailError && (
        <div className="bg-red-500 text-white text-lg px-2 rounded">
          <button
            className="float-right font-bold ring ring-white rounded-full px-2"
            onClick={() => setShowFailError(false)}
          >
            X
          </button>
          <div>{failMessage}</div>
        </div>
      )}
    </div>
  );
}
