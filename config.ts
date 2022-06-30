// test id for unit test
export const selectTestId = "pageLocaleSelect"

export const fileInputTestId = "fileInput"

export const docxVerboseType =
"application/vnd.openxmlformats-officedocument.wordprocessingml.document"

export const envVariables = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID
};

export const errorMessages = {
  error500: "Something went wrong. Retry or contact the developer.",
};

export const supportedLanguages = {
  auto: "Automatic",
  af: "Afrikaans",
  sq: "Albanian",
  am: "Amharic",
  ar: "Arabic",
  hy: "Armenian",
  az: "Azerbaijani",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bs: "Bosnian",
  bg: "Bulgarian",
  ca: "Catalan",
  ceb: "Cebuano",
  ny: "Chichewa",
  "zh-cn": "Chinese Simplified",
  "zh-tw": "Chinese Traditional",
  co: "Corsican",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  en: "English",
  eo: "Esperanto",
  et: "Estonian",
  tl: "Filipino",
  fi: "Finnish",
  fr: "French",
  fy: "Frisian",
  gl: "Galician",
  ka: "Georgian",
  de: "German",
  el: "Greek",
  gu: "Gujarati",
  ht: "Haitian Creole",
  ha: "Hausa",
  haw: "Hawaiian",
  iw: "Hebrew",
  hi: "Hindi",
  hmn: "Hmong",
  hu: "Hungarian",
  is: "Icelandic",
  ig: "Igbo",
  id: "Indonesian",
  ga: "Irish",
  it: "Italian",
  ja: "Japanese",
  jw: "Javanese",
  kn: "Kannada",
  kk: "Kazakh",
  km: "Khmer",
  ko: "Korean",
  ku: "Kurdish (Kurmanji)",
  ky: "Kyrgyz",
  lo: "Lao",
  la: "Latin",
  lv: "Latvian",
  lt: "Lithuanian",
  lb: "Luxembourgish",
  mk: "Macedonian",
  mg: "Malagasy",
  ms: "Malay",
  ml: "Malayalam",
  mt: "Maltese",
  mi: "Maori",
  mr: "Marathi",
  mn: "Mongolian",
  my: "Myanmar (Burmese)",
  ne: "Nepali",
  no: "Norwegian",
  ps: "Pashto",
  fa: "Persian",
  pl: "Polish",
  pt: "Portuguese",
  ma: "Punjabi",
  ro: "Romanian",
  ru: "Russian",
  sm: "Samoan",
  gd: "Scots Gaelic",
  sr: "Serbian",
  st: "Sesotho",
  sn: "Shona",
  sd: "Sindhi",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somali",
  es: "Spanish",
  su: "Sundanese",
  sw: "Swahili",
  sv: "Swedish",
  tg: "Tajik",
  ta: "Tamil",
  te: "Telugu",
  th: "Thai",
  tr: "Turkish",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  vi: "Vietnamese",
  cy: "Welsh",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  zu: "Zulu",
};

export const supportedLocales = { en: "English", fr: "French" };

export const maxFileSize = 2e6;

export const englishLocale = {
  brand: "EDT.io",
  title: "Electronic Document Translator",
  description:
    "EDT - Electronic Document Translator is a free documents' text translator.",
  fileSupport: {
    label: "Current Support",
    files: ["docx"],
  },
  copyRight: "2022",
  translatorComponent: {
    inputLabel: {
      to: "To",
    },
    quickStart: {
      title: "Easy Steps",
      quickSteps: ["Upload file", "Select Desired Language", "Translate."],
    },
    dragNdropHint: "Drag and Drop `docx` File",
    buttonLabel: { translate: "Translate" },
    failMessage: "Oops, failed to translate. Try again.",
    fileSizeError: "Select file less than 2mb.",
  },
  pageNotFound: "Page Not Found",
  webPages: {
    home: {
      route: "/",
      title: "Home",
      heading: "Translate Documents' Text",
      paragraphs: [
        "Freely translate documents' text in one language to another easily with top notch machine learning algorithm.",
      ],
    },
  },
};

export const frenchLocale = {
  brand: "EDT.io",
  title: "Traducteur de documents électroniques",
  description:
    "EDT - Electronic Document Translator est un traducteur de texte de documents gratuit.",
  fileSupport: {
    label: "Prise en charge actuelle",
    files: ["docx"],
  },
  copyRight: "2022",
  translatorComponent: {
    inputLabel: {
      from: "De",
      to: "À",
    },
    quickStart: {
      title: "Etapes Faciles",
      quickSteps: ["Televerser un fichier", "Selectionnez la langue souhaitee", "Traduire"],
    },
    dragNdropHint: "Faites glisser et deposez le fichier docx",
    buttonLabel: { translate: "Traduire", download: "Télécharger" },
    failMessage: "Oups, impossible de traduire. Réessayer.",
    fileSizeError: "Selectionner des fichiers de moins de 2 Mo.",
  },
  pageNotFound: "Page non trouvée",
  webPages: {
    home: {
      route: "/",
      title: "Maison",
      heading: "Traduire le texte des documents",
      paragraphs: [
        "Traduisez librement le texte des documents d'une langue à l'autre facilement grâce à un algorithme d'apprentissage automatique de premier ordre.",
      ],
    },
  },
};
