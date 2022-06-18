import config from "config";
import { useState } from "react";
import { useRouter } from "next/router";
import { LocaleSelectPropsType } from "types";
const { languages } = config.app;

export default function LocaleSelect({
  className,
  style,
}: LocaleSelectPropsType) {
  const { push, route } = useRouter(),
  [option, setOption] = useState("");

  return (
    <div className={className} style={style}>
      <select onChange={() => push(route, route, { locale: option })}>
        {languages.map(({ label, locale }) => (
          <option key={label} onChange={() => setOption(locale)}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
