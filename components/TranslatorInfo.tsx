import { MdInfoOutline, MdOutlineWarningAmber } from "react-icons/md";
import { TranslatorInfoPropsType } from "types";

export default function TranslatorInfo({
  fileSupport: { files, label },
  quickStart: { title, quickSteps },
}: TranslatorInfoPropsType) {
  return (
    <div className="text-center space-y-7">
      <section className="mx-auto p-2 shadow bg-blue-100 rounded text-center w-fit">
        <h3>
          <MdOutlineWarningAmber className="mx-auto" size="25" /> {label}
        </h3>
        <ul>
          {files.map((file) => (
            <li key={file}>&rarr; {file}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="flex justify-center align-center underline my-2 text-xl font-bold">
          <MdInfoOutline size={30} />
          {title}
        </h3>
        <ol>
          {quickSteps.map((step) => (
            <li key={step}>
              <b>&rarr; {step} &larr;</b>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
