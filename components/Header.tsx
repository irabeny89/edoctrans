import { useRouter } from "next/router";
import { FormEvent } from "react";
import { MdLoop } from "react-icons/md";
import { HeaderPropsType } from "types";
import LocaleSelect from "./LocaleSelect";
import { selectTestId, supportedLocales } from "config";

export default function Header({ brand }: HeaderPropsType) {
  const router = useRouter();

  const handleLocaleSelect = (e: FormEvent<HTMLSelectElement>) =>
    router.push(router.route, router.route, { locale: e.currentTarget.value });

  return (
    <header className="flex justify-between mb-10">
      <h1 className="flex font-bold align-center text-xl">
        <MdLoop className="mt-1" color="green" /> {brand}
      </h1>
      <LocaleSelect
        locales={supportedLocales}
        handleSelect={handleLocaleSelect}
        data-testId={selectTestId}
      />
    </header>
  );
}
