import { CSSProperties, ReactNode, FormEvent } from "react";

type StylesType = {
  className?: string;
  style?: CSSProperties;
};

type InputLabelType = Record<"to", string>;

type ButtonLabelType = Record<"translate", string>;

type QuickStartType = {
  title: string;
  quickSteps: string[];
};

type LanguagesType = {
  auto: "Automatic";
  af: "Afrikaans";
  sq: "Albanian";
  am: "Amharic";
  ar: "Arabic";
  hy: "Armenian";
  az: "Azerbaijani";
  eu: "Basque";
  be: "Belarusian";
  bn: "Bengali";
  bs: "Bosnian";
  bg: "Bulgarian";
  ca: "Catalan";
  ceb: "Cebuano";
  ny: "Chichewa";
  "zh-cn": "Chinese Simplified";
  "zh-tw": "Chinese Traditional";
  co: "Corsican";
  hr: "Croatian";
  cs: "Czech";
  da: "Danish";
  nl: "Dutch";
  en: "English";
  eo: "Esperanto";
  et: "Estonian";
  tl: "Filipino";
  fi: "Finnish";
  fr: "French";
  fy: "Frisian";
  gl: "Galician";
  ka: "Georgian";
  de: "German";
  el: "Greek";
  gu: "Gujarati";
  ht: "Haitian Creole";
  ha: "Hausa";
  haw: "Hawaiian";
  iw: "Hebrew";
  hi: "Hindi";
  hmn: "Hmong";
  hu: "Hungarian";
  is: "Icelandic";
  ig: "Igbo";
  id: "Indonesian";
  ga: "Irish";
  it: "Italian";
  ja: "Japanese";
  jw: "Javanese";
  kn: "Kannada";
  kk: "Kazakh";
  km: "Khmer";
  ko: "Korean";
  ku: "Kurdish (Kurmanji)";
  ky: "Kyrgyz";
  lo: "Lao";
  la: "Latin";
  lv: "Latvian";
  lt: "Lithuanian";
  lb: "Luxembourgish";
  mk: "Macedonian";
  mg: "Malagasy";
  ms: "Malay";
  ml: "Malayalam";
  mt: "Maltese";
  mi: "Maori";
  mr: "Marathi";
  mn: "Mongolian";
  my: "Myanmar (Burmese)";
  ne: "Nepali";
  no: "Norwegian";
  ps: "Pashto";
  fa: "Persian";
  pl: "Polish";
  pt: "Portuguese";
  ma: "Punjabi";
  ro: "Romanian";
  ru: "Russian";
  sm: "Samoan";
  gd: "Scots Gaelic";
  sr: "Serbian";
  st: "Sesotho";
  sn: "Shona";
  sd: "Sindhi";
  si: "Sinhala";
  sk: "Slovak";
  sl: "Slovenian";
  so: "Somali";
  es: "Spanish";
  su: "Sundanese";
  sw: "Swahili";
  sv: "Swedish";
  tg: "Tajik";
  ta: "Tamil";
  te: "Telugu";
  th: "Thai";
  tr: "Turkish";
  uk: "Ukrainian";
  ur: "Urdu";
  uz: "Uzbek";
  vi: "Vietnamese";
  cy: "Welsh";
  xh: "Xhosa";
  yi: "Yiddish";
  yo: "Yoruba";
  zu: "Zulu";
};

type FileSupportType = {
  label: string;
  files: string[];
};

type TranslationResponseType = {
  word: string;
  translation: string;
  wordTranscription: string;
  translationTranscription: string;
  translations?: TranslationsType;
  definitions?: DefinitionsType;
  examples?: string[];
};

type TranslatorFormDataType = {
  showFailError: boolean;
  showFileError: boolean;
  isTranslating: boolean;
  hasUpload: boolean;
  translatedDoc: string;
};

type TranslatorFormActionType = {
  type: keyof TranslatorFormDataType;
  payload: string | boolean;
};

type LocaleSelectPropsType = StylesType & {
  handleSelect?: (e: FormEvent<HTMLSelectElement>) => Promise<boolean>;
  locales: object;
};

type TranslatorInputsType = {
  file: File;
  locale: "en" | "fr";
};

type TranslateHtmlBodyType = {
  html: string;
  locale: string;
};

type IntroPropsType = {
  heading: string;
  paragraphs: string[];
} & StylesType;

type HeaderPropsType = Record<"brand", string> & StylesType;

type TranslatorDialogPropsType = {
  doc: string;
  setDoc: (value: TranslatorFormActionType) => void
};

type TranslatorFormPropsType = {
  dragNdropHint: string;
  buttonLabel: ButtonLabelType;
  inputLabel: InputLabelType;
  fileSizeError: string;
  failMessage: string;
} & StylesType;

type TranslatorInfoPropsType = {
  fileSupport: FileSupportType;
  quickStart: QuickStartType;
} & StylesType;

type FooterPropsType = Record<"copyRight" | "brand", string>;

type LayoutPropsType = Record<"children", ReactNode> &
  Record<"brand" | "title" | "description" | "copyRight", string> &
  StylesType;

type PageIntroPropsType = {
  route: string;
  title: string;
  heading: string;
  paragraphs: string[];
};
