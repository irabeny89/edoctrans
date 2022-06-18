import Image from "next/image";
import { TranslatorPropsType } from "types";
import LocaleSelect from "./LocaleSelect";
import { MdTranslate, MdDownload } from "react-icons/md";

export default function Translator({
  buttonLabel: { translate, download },
  inputLabel: { to, from },
  successMessage,
  failMessage,
  ...rest
}: TranslatorPropsType) {
  return (
    <div {...rest}>
      <div className="text-center">
        <Image src="/add_files.svg" width="200" height="200" />
      </div>
      <input
        type="file"
        className="py-1 rounded file:rounded-lg file:bg-purple-900 file:text-white file:py-2 file:shadow file:ring-0"
      />

      <div className="flex justify-between">
        <label>
          {from}
          <LocaleSelect />
        </label>
        <label>
          {to}
          <LocaleSelect />
        </label>
      </div>

      <button className="flex justify-center py-2 bg-blue-600 text-white rounded shadow w-full">
        <MdTranslate size="25" /> {translate}
      </button>
      <hr />
      <button className="flex justify-center py-2 bg-green-600 text-white rounded shadow w-full">
        <MdDownload size="25" /> {download}
      </button>
    </div>
  );
}
