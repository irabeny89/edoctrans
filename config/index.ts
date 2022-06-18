const config = {
  app: {
    languages: [
      { locale: "en", label: "English" },
      { locale: "fr", label: "French" },
    ],
    en: {
      brand: "EDT.io",
      title: "Electronic Document Translator",
      description:
        "EDT - Electronic Document Translator is a free documents' text translator.",
      fileSupport: {
        label: "Current support",
        files: ["docx", "pdf"],
      },
      copyRight: 2022,
      translatorComponent: {
        inputLabel: {
          from: "From",
          to: "To",
        },
        buttonLabel: { translate: "Translate", download: "Download" },
        successMessage: "File translated successfully. Download now.",
        failMessage: "Oops, failed to translate. Try again.",
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
    },
    fr: {
      brand: "EDT.io",
      title: "Traducteur de documents électroniques",
      description:
        "EDT - Electronic Document Translator est un traducteur de texte de documents gratuit.",
      fileSupport: {
        label: "Prise en charge actuelle",
        files: ["docx", "pdf"],
      },
      copyRight: 2022,
      translatorComponent: {
        inputLabel: {
          from: "De",
          to: "À",
        },
        buttonLabel: { translate: "Traduire", download: "Télécharger" },
        successMessage: "Fichier traduit avec succès. Télécharger maintenant.",
        failMessage: "Oups, impossible de traduire. Réessayer.",
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
    },
  },
  env: {},
};

export default config;
