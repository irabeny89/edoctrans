import { TranslatorPropsType } from "types";
import useTranslatedDoc from "hooks/useTranslatedDoc";
import TranslatorDialog from "./TranslatorDialog";
import TranslatorForm from "./TranslatorForm";
import TranslatorInfo from "./TranslatorInfo";

export default function Translator({
  translatorComponent: {
    buttonLabel,
    inputLabel,
    failMessage,
    fileSizeError,
    quickStart,
  },
  fileSupport,
  ...rest
}: TranslatorPropsType) {
  const {
    renderTranslatedDoc,
    translatedDoc,
    setTranslatedDoc,
    isTranslating,
    setIsTranslating,
  } = useTranslatedDoc();

  return (
    <div {...rest}>
      <TranslatorDialog doc={translatedDoc} setDoc={setTranslatedDoc} />
      <TranslatorInfo {...{ fileSupport, quickStart }} />
      <TranslatorForm
        buttonLabel={buttonLabel}
        inputLabel={inputLabel}
        fileSizeError={fileSizeError}
        failMessage={failMessage}
        renderTranslatedDoc={renderTranslatedDoc}
        isTranslating={isTranslating}
        setIsTranslating={setIsTranslating}
      />
    </div>
  );
}
