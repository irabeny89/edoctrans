import config from "config";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import { LocaleSelectPropsType } from "types";

const { languages } = config.app;

export default function LocaleSelect({
  className,
  style,
}: LocaleSelectPropsType) {
  const { push, route } = useRouter();

  const handleSelect = (e: FormEvent<HTMLSelectElement>) =>
    push(route, route, { locale: e.currentTarget.value });

  return (
    <div className={className} style={style}>
      <select onChange={handleSelect}>
        {languages.map(({ label, locale }) => (
          <option key={label} value={locale}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
