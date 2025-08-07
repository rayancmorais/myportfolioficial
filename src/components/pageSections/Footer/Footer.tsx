import { FooterContent } from "./Footer.styles";
import { useTranslation } from "react-i18next";

export const Footer = () => {
   const { t } = useTranslation();
  return (
    <FooterContent>
      <a href=""></a>
      <a href="">
        Rayancmorais &copy; {new Date().getFullYear()} {t("home.footer_section_content")}
      </a>
    </FooterContent>
  );
};
