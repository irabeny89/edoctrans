import { supportedLanguages } from "config";
import { ChangeEventHandler, useState } from "react";
import { TextTranslatorDataType } from "types";
import LocaleSelect from "./LocaleSelect";
import dynamic from "next/dynamic";

const Dialog = dynamic(() => import("./Dialog"));

export default function TextTranslator({
  inputPlaceholder,
  failMessage,
}: TextTranslatorDataType) {
  const [text, setText] = useState(""),
    [isTranslating, setIstranslating] = useState(false),
    [_failMessage, setFailMessage] = useState(""),
    [translation, setTranslation] = useState<
      null | TranslationResponseType | string
    >();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
      setText(e.target.value),
    handleSelect: ChangeEventHandler<HTMLSelectElement> = async (e) => {
      try {
        setIstranslating(true);
        const res = await fetch("/api/translateText", {
          body: JSON.stringify({ text, locale: e.target.value }),
          method: "post",
          headers: [["Content-Type", "application/json"]],
        });
        setTranslation(await res.json());
        setIstranslating(false);
      } catch (error) {
        console.error(error);
        setIstranslating(false);
        setFailMessage(failMessage);
      }
    },
    handleClose = () => (setTranslation(null), setFailMessage(""));

  return (
    <div className="text-center">
      <Dialog data={translation ?? _failMessage} html close={handleClose} />
      <input
        onChange={handleChange}
        value={text}
        className="shadow rounded-full p-2 placeholder:text-center"
        placeholder={inputPlaceholder}
      />
      <div className={isTranslating ? "animate-spin" : ""}>
        &nbsp;&darr;&nbsp;
      </div>
      <LocaleSelect
        locales={supportedLanguages}
        handleSelect={text ? handleSelect : undefined}
      />
    </div>
  );
}
