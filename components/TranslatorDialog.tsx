import { TranslatorDialogPropsType } from "types";

export default function TranslationDialog({
  doc,
  setDoc,
}: TranslatorDialogPropsType) {
  return (
    <dialog className="z-10 ring" open={!!doc}>
      <button
        onClick={() => setDoc({ type: "translatedDoc", payload: "" })}
        className="bg-red-700 rounded p-1 text-white float-right font-bold"
      >
        X close
      </button>
      <div dangerouslySetInnerHTML={{ __html: doc }} />
    </dialog>
  );
}
