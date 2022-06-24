import type { NextApiRequest, NextApiResponse } from "next";
import translate from "google-translate-extended-api";
import { TranslateHtmlBodyType, TranslationResponseType } from "types";
import { errorMessages } from "config";

const { error500 } = errorMessages,
  tagsRegex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
  wordRegex = /\w+/,
  options = {
    definitions: false,
    examples: false,
  },
  reducer = (prev: string[], curr: string) =>
    wordRegex.test(curr) ? prev.concat(curr) : prev,
  validateRequestBody = (html: string, locale: string) =>
    Boolean(html && locale),
  translateText = (locale: string) => async (match: string) =>
    await translate(match, "auto", locale, options),
  handleRequest = async (
    { html, locale }: TranslateHtmlBodyType,
    res: NextApiResponse<string>
  ) => {
    if (validateRequestBody(html, locale)) {
      const matches = html
          .replace(tagsRegex, "*")
          .split("*")
          .reduce(reducer, []),
        translationsData = (await Promise.all(
          matches.map(translateText(locale))
        )) as TranslationResponseType[],
        swapTranslation = ({ translation, word }: TranslationResponseType) =>
          (html = html.replace(word, translation));

      translationsData.forEach(swapTranslation);

      return res.status(200).send(html);
    }
    return res
      .status(400)
      .send(
        "Include the HTML string and the locale(e.g `fr`) string to translate to."
      );
  };

export default async function translateHtml(
  { body }: NextApiRequest,
  res: NextApiResponse<string>
) {
  try {
    return await handleRequest(body, res);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error500);
  }
}
