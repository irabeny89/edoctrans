import { useState } from "react";
import { convertToHtml } from "mammoth";

export default function useTranslatedDoc() {
  const [translatedDoc, setTranslatedDoc] = useState(""),
    [isTranslating, setIsTranslating] = useState(false);

  const renderTranslatedDoc = async (doc: File, locale: string) => {
    setIsTranslating(true);
    const { value: html } = await convertToHtml(
        // @ts-ignore
        { arrayBuffer: doc.arrayBuffer() }
      ),
      body = JSON.stringify({ html, locale }),
      res = await fetch("/api/translateHtml", {
        body,
        method: "post",
        headers: [["Content-Type", "application/json"]],
      }),
      translation = await res.text();
    setIsTranslating(false);

    return setTranslatedDoc(translation);
  };

  return {
    translatedDoc,
    setTranslatedDoc,
    isTranslating,
    setIsTranslating,
    renderTranslatedDoc,
  };
}
