import Home from "pages/";
import { englishLocale, frenchLocale, selectTestId } from "config";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  test("should contain English texts", () => {
    render(<Home {...englishLocale} />);

    const {
        webPages: {
          home: { heading, paragraphs },
        },
      } = englishLocale,
      testStrings = [heading, paragraphs[0]],
      englishTexts = testStrings.map(
        (text) => screen.getByText(text).textContent
      );

    testStrings.forEach((text) =>
      expect(englishTexts.includes(text)).toBeTruthy()
    );
  });

  test("should contain French texts", () => {
    render(<Home {...frenchLocale} />);

    const {
        webPages: {
          home: { heading, paragraphs },
        },
      } = frenchLocale,
      testStrings = [heading, paragraphs[0]],
      frenchTexts = testStrings.map(
        (text) => screen.getByText(text).textContent
      );

    testStrings.forEach((text) =>
      expect(frenchTexts.includes(text)).toBeTruthy()
    );
  });
});
