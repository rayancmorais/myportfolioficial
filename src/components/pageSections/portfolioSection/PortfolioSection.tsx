import { PortfolioContent, PortfolioButton, PdfPreviewContainer, PdfIframe } from "./PortfolioSection.styles";

import {
  SectionTitle,
  SectionSubtitle,
} from "../certificationSection/CertificationSection.styles";
import { SectionContainer } from "../../common";

const portfolioPdfUrl = "/portfolioo.pdf"; 

export const PortfolioSection = () => {
  return (
    <SectionContainer id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>
        Explore my detailed  education, works, projects and more in my PDF portfolio.
        <br /> Click the button below to view or download it.
      </SectionSubtitle>
      <PortfolioContent>
        <PortfolioButton
          href={portfolioPdfUrl}
          target="_blank" // Abre o PDF numa nova aba
          rel="noopener noreferrer" // Recomendado para segurança ao usar target="_blank"
        >
          Ver Portfólio em PDF
        </PortfolioButton>

      
        
        <PdfPreviewContainer>
          <PdfIframe src={portfolioPdfUrl} title="Meu Portfólio PDF" />
        </PdfPreviewContainer>
       
      </PortfolioContent>
    </SectionContainer>
  );
};
