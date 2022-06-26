type GetInfoType = {
  (
    word: string,
    sourceLang: string,
    destLang: string,
    dataOptions: DataOptionsType
  ): Promise<any>;
  languages: LanguagesType;
  defaultDataOptions: DataOptionsType;
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

type WordType =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "pronoun"
  | "preposition"
  | "conjuction"
  | "determiner"
  | "exclamation";

type DefinitionsType = Partial<Record<WordType, string[]>>;

type DetailedTranslationsSynonymsType = {
  translation: string;
  synonyms: string[];
  frequency: number;
};

type TranslationsType = Record<
  WordType,
  (string | DetailedTranslationsSynonymsType)[]
>;

type TranslationResponseType = {
  word: string;
  translation: string;
  wordTranscription: string;
  translationTranscription: string;
  translations?: TranslationsType;
  definitions?: DefinitionsType;
  examples?: string[];
};

type DataOptionsType = Record<
  | "returnRawResponse"
  | "detailedTranslations"
  | "definitionSynonyms"
  | "detailedTranslationsSynonyms"
  | "definitions"
  | "defintionExamples"
  | "examples"
  | "removeStyles",
  Boolean
>;

type TranslateType = {
  defaultDataOptions: DataOptionsType;
  (
    text: string,
    sourceLang: keyof LanguagesType,
    destLang: string,
    dataOptions?: Partial<DataOptionsType>
  ): Promise<TranslationResponseType | undefined>;
};

declare module "google-translate-extended-api" {
  const translate: TranslateType;

  export default translate;
}

declare module "google-translate-extended-api/languages" {
  export const langs: LanguagesType;

  export function isSupported(desiredLang: string): boolean;

  export function getCode(desiredLang: string): boolean | string;
}

declare module "google-translate-extended-api/get-word-info" {
  export const getInfo: GetInfoType;

  export const languages: LanguagesType;

  export const defaultDataOptions: DataOptionsType;
}
