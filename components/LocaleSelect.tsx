import { LocaleSelectPropsType } from "types";

/**
 * Renders select input element with available config locales as options.
 * @author `Ernest Irabor`
 * @date `20/06/2022`
 * @param {LocaleSelectPropsType} {
 *   `className`,
 *   `style`,
 *   `handleSelect`
 * } className & style are CSS values while handleSelect(optional) is a callback for onChange event when selecting an option.
 * @returns block select element
 */
export default function LocaleSelect({
  className,
  style,
  handleSelect,
  locales
}: LocaleSelectPropsType) {
  const languages = Object.entries(locales)
  
  return (
    <div className={className} style={style}>
      <select onChange={handleSelect} name="locale">
        {languages.map(([ locale, label ]) => (
          <option key={locale} value={locale}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
