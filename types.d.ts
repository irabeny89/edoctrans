import { CSSProperties } from "react";

type StylesType = {
  className?: string;
  style?: CSSProperties;
};

type InputLabelType = Record<"from" | "to", string>;

type ButtonLabelType = Record<"translate" | "download", string>;

type TranslatorPropsType = Record<"inputLabel", InputLabelType> &
  Record<"buttonLabel", ButtonLabelType> &
  Record<"successMessage" | "failMessage", string> &
  StylesType;

type LocaleSelectPropsType = StylesType;
