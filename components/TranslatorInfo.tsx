import { MdInfoOutline, MdOutlineWarningAmber } from "react-icons/md";
import { TranslatorInfoPropsType } from "types";

export default function TranslatorInfo({
  fileSupport: { files, label },
  quickStart: { title, quickSteps },
}: TranslatorInfoPropsType) {
  return (
    <div className="text-center space-y-5">
      <div className="mx-auto p-2 shadow bg-blue-100 rounded text-center w-fit">
        <MdOutlineWarningAmber className="mx-auto" size="25" /> <p>{label}</p>
        <ul>
          {files.map((file) => (
            <li key={file}>&rarr; {file}</li>
          ))}
        </ul>
      </div>

      <h3 className="underline my-2 text-xl">
        <div className="flex justify-center align-center">
          <MdInfoOutline size={30} /> {title}
        </div>
      </h3>
      <ol>
        {quickSteps.map((step) => (
          <li key={step}>
            <b>&rarr; {step} &larr;</b>
          </li>
        ))}
      </ol>
      <br />
    </div>
  );
}
