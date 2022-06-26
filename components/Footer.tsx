import { FooterPropsType } from "types";

export default function Footer({ copyRight, brand }: FooterPropsType) {
  return (
    <footer className="border-t-2 p-2 text-center">
      <p>
        {brand} &copy; {copyRight}
      </p>
      Ernest &middot; Irabor
    </footer>
  );
}
