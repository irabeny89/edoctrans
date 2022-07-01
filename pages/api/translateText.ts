import { NextApiRequest, NextApiResponse } from "next";
import { errorMessages } from "config";
import translate from "google-translate-extended-api";
import { TranslateTextRequestType } from "types";

const { error500 } = errorMessages;

async function handleRequest({ text, locale, res }: TranslateTextRequestType) {
  const options = {
    definitions: true,
    definitionSynonyms: true,
    definitionExamples: true,
    detailedTranslations: true,
    detailedTranslationsSynonyms: true,
    examples: true,
    removeStyles: true,
  };

  text && locale
    ? res.status(200).json(await translate(text, "auto", locale, options))
    : res.status(400).send("Validate your inputs and try again.");
}

export default async function translateText(
  { body }: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return await handleRequest({ res, ...body });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error500);
  }
}
