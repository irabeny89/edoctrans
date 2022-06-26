import { LocaleSelectPropsType } from "types";
import { useRouter } from "next/router";

export default function LocaleSelect({
  className,
  style,
  handleSelect,
  locales,
}: LocaleSelectPropsType) {
  const { locale } = useRouter();
  
  const languages = Object.entries(locales);

  return (
    <div className={className} style={style}>
      <select onChange={handleSelect} name="locale" defaultValue={locale}>
        {languages.map(([locale, label]) => (
          <option key={locale} value={locale}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
