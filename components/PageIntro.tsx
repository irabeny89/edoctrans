import { PageIntroPropsType } from "types";

export default function PageIntro({ heading, paragraphs }: PageIntroPropsType) {
  return (
    <>
      <h2 className="text-center text-2xl mb-8 font-semibold">{heading}</h2>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="text-center">
          {paragraph}
        </p>
      ))}
    </>
  );
}
