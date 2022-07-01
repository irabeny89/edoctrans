import { supportedLanguages } from "config";
import { ChangeEventHandler, useState } from "react";
import { TextTranslatorDataType } from "types";
import Dialog from "./Dialog";
import LocaleSelect from "./LocaleSelect";

export default function TextTranslator({
  inputPlaceholder,
}: TextTranslatorDataType) {
  const [text, setText] = useState(""),
    [translation, setTranslation] = useState<
      null | TranslationResponseType | string
    >();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
      setText(e.target.value),
    handleSelect: ChangeEventHandler<HTMLSelectElement> = async (e) => {
      const res = await fetch("/api/translateText", {
        body: JSON.stringify({ text, locale: e.target.value }),
        method: "post",
        headers: [["Content-Type", "application/json"]],
      });

      setTranslation(await res.json());
    },
    handleClose = () => setTranslation(null);

  return (
    <div className="text-center">
      <Dialog data={translation ?? ""} close={handleClose} />
      <input
        onChange={handleChange}
        value={text}
        className="shadow rounded-full p-2 placeholder:text-center"
        placeholder={inputPlaceholder}
      />
      <div>&nbsp;&darr;&nbsp;</div>
      <LocaleSelect locales={supportedLanguages} handleSelect={handleSelect} />
    </div>
  );
}
