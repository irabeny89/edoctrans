import useFormError from "hooks/useFormError";
import { DragEventHandler, FormEventHandler, useState, useRef } from "react";
import { MdTranslate, MdCheck, MdOutlineCancel } from "react-icons/md";
import { TranslatorFormPropsType, TranslatorInputsType } from "types";
import LocaleSelect from "./LocaleSelect";
import { maxFileSize, supportedLanguages } from "config";
import Image from "next/image";

export default function TranslatorForm({
  failMessage,
  fileSizeError,
  buttonLabel: { translate },
  inputLabel: { to },
  renderTranslatedDoc,
  isTranslating,
  setIsTranslating,
}: TranslatorFormPropsType) {
  const {
    handleFormError,
    showFileError,
    setShowFileError,
    showFailError,
    setShowFailError,
  } = useFormError();

  const [hasUpload, setHasUpload] = useState(false),
    fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
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
    };

  return (
    <div className="space-y-8">
      <div
        className="text-center rounded-xl outline-dashed"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {hasUpload && !showFileError && (
          <MdCheck color="lightgreen" size={100} className="float-right" />
        )}
        {showFileError && (
          <MdOutlineCancel color="red" size={100} className="float-right" />
        )}
        <Image src="/add_files.svg" width="200" height="200" />
        <p>Drag and Drop `docx` File</p>
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
