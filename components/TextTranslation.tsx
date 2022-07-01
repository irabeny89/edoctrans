function DetailedDefinition({
  definition,
  example,
  synonyms,
}: DetailedDefinitionsType) {
  const _synonyms = Object.entries(synonyms ?? {});
  return (
    <div>
      <p className="mb-2">{definition}</p>
        {_synonyms.map(([k, arrValue]) => (
          <article key={k} className="mb-3">
            <h4 className="font-semibold">Synonyms</h4>
            <h5><span className="bg-slate-200">{k}</span></h5>
            <p>{arrValue.join(" | ")}</p>
          </article>
        ))}
      <section>
        <h5 className="font-semibold">Example</h5>
        <p>{example}</p>
      </section>
    </div>
  );
}
function DefinitionList({
  definitions,
}: Record<"definitions", [string, (string | DetailedDefinitionsType)[]][]>) {
  return (
    <>
      {definitions.map(([key, arrValue]) => (
        <div key={key}>
          <span className="bg-slate-200 rounded">{key}</span>
          <div className="space-y-5">
            {arrValue.map((value, i) =>
              typeof value === "string" ? (
                <li key={i} className="space-y-3">
                  {value}
                </li>
              ) : (
                <div key={i} className="space-y-3">
                  <DetailedDefinition {...value} />
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
}

function DetailedTranslation({
  frequency,
  synonyms,
  translation,
}: DetailedTranslationsSynonymsType) {
  return (
    <>
      <span className="bg-slate-200 rounded">{translation}</span> &middot; word
      frequency: {frequency}
      <section>
        <h5 className="font-semibold">Synonyms</h5>
        <p>{synonyms.join(" | ")}</p>
      </section>
    </>
  );
}

function WordTypeList({
  wordTypes,
}: Record<"wordTypes", (string | DetailedTranslationsSynonymsType)[]>) {
  return (
    <div className="space-y-5">
      {wordTypes.map((value, i) =>
        typeof value === "string" ? (
          <li key={i}>{value}</li>
        ) : (
          <li key={i}>
            <DetailedTranslation {...value} />
          </li>
        )
      )}
    </div>
  );
}

function TranslationsList({
  translations,
}: Record<"translations", TranslationPropsType>) {
  return (
    <div>
      {translations.map(([key, arrValue]) => (
        <article key={key}>
          <h5>
            <span className="bg-slate-200 rounded-md">{key}</span>
          </h5>
          <WordTypeList wordTypes={arrValue} />
        </article>
      ))}
    </div>
  );
}

export default function TextTranslation({
  translation,
  word,
  wordTranscription,
  translationTranscription,
  translations,
  definitions,
  examples,
}: TranslationResponseType) {
  const _translations = Object.entries(translations ?? {}),
    _defintions = Object.entries(definitions ?? {});

  return (
    <article className="text-left italic font-mono space-y-10">
      <h3 className="mb-6 text-lg font-semibold">
        <span className="bg-slate-200 p-1 rounded underline capitalize">
          {word}
        </span>{" "}
        Info
      </h3>
      <section>
        <h4 className="font-semibold">Translation</h4>
        <p>{translation}</p>
      </section>
      <section>
        <h4 className="font-semibold">Transcription</h4>
        <p>{wordTranscription}</p>
      </section>
      <section>
        <h4 className="font-semibold">Translation Transcription</h4>
        <p>{translationTranscription}</p>
      </section>
      <section>
        <h4 className="font-semibold">Translations</h4>
        <TranslationsList translations={_translations} />
      </section>
      <section>
        <h4 className="font-semibold">Definitions</h4>
        <DefinitionList definitions={_defintions} />
      </section>
      <section>
        <h4 className="font-semibold">Examples</h4>
        {examples?.map((eg, i) => (
          <li key={i}>{eg}</li>
        ))}
      </section>
    </article>
  );
}
