import {
  PortfolioContent,
  PortfolioButton,
  PdfPreviewContainer,
  PdfIframe,
} from "./PortfolioSection.styles";

import {
  SectionTitle,
  SectionSubtitle,
} from "../certificationSection/CertificationSection.styles";
import { SectionContainer } from "../../common";
import { useTranslation, Trans } from "react-i18next";

const portfolioPT = "/portbr.pdf";
const portfolioEng = "/porteng.pdf";

export const PortfolioSection = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer id="portfolio">
      <SectionTitle> {t("home.portfolio_section_title")}</SectionTitle>
      <SectionSubtitle>
        {" "}
        <Trans
          i18nKey="home.portfolio_section_subtitle"
          components={{ break: <br /> }}
        />
      </SectionSubtitle>
      <PortfolioContent>
        <PortfolioButton
          href={portfolioPT}
          target="_blank" // Abre o PDF numa nova aba
          rel="noopener noreferrer" // Recomendado para segurança ao usar target="_blank"
        >
          Ver Portólio PDF em Português
        </PortfolioButton>

        <PortfolioButton
          href={portfolioEng}
          target="_blank"
          rel="noopener noreferrer"
        >
          View English PDF Portfolio
        </PortfolioButton>

        <PdfPreviewContainer>
          <PdfIframe src={portfolioEng} title="Meu Portfólio PDF" />
        </PdfPreviewContainer>
      </PortfolioContent>
    </SectionContainer>
  );
};
