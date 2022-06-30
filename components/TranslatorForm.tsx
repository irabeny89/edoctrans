import { MdTranslate, MdCheck, MdOutlineCancel } from "react-icons/md";
import { TranslatorFormPropsType } from "types";
import LocaleSelect from "./LocaleSelect";
import { fileInputTestId, supportedLanguages } from "config";
import Image from "next/image";
import dynamic from "next/dynamic";
import useTranslatorForm from "hooks/useTranslatorForm";

const TranslatorDialog = dynamic(() => import("./TranslatorDialog"));

export default function TranslatorForm({
  dragNdropHint,
  failMessage,
  fileSizeError,
  buttonLabel: { translate },
  inputLabel: { to },
}: TranslatorFormPropsType) {
  const {
    setData,
    handleDrop,
    handleSubmit,
    translatedDoc,
    isTranslating,
    fileInputRef,
    hasUpload,
    showFailError,
    showFileError,
  } = useTranslatorForm();

  return (
    <div className="space-y-6 mb-28 text-slate-400 sm:w-2/3 md:w-11/12 lg:w-2/3 mx-auto">
      <TranslatorDialog doc={translatedDoc} setDoc={setData} />
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
            data-testId={fileInputTestId}
            required
            ref={fileInputRef}
            name="file"
            type="file"
            accept=".docx"
            onChange={() => setData({ type: "showFileError", payload: false })}
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
            onClick={() => setData({ type: "showFailError", payload: false })}
          >
            X
          </button>
          <div>{failMessage}</div>
        </div>
      )}
    </div>
  );
}
