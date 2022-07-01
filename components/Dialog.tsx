import { TranslatorDialogPropsType } from "types";
import TextTranslation from "./TextTranslation";

export default function Dialog({
  data,
  close,
  html,
}: TranslatorDialogPropsType) {
  return (
    <dialog className="z-10 ring bg-slate-100" open={!!data}>
      <button
        onClick={close}
        className="bg-red-700 rounded p-1 text-white float-right font-bold mb-2"
      >
        X close
      </button>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: data as string }} />
      ) : (
        <TextTranslation {...(data as TranslationResponseType)} />
      )}
    </dialog>
  );
}
