import { SectionContainer } from "../../common/SectionContainer/SectionContainer";
import {
  SectionTitle,
  CertificatesGrid,
  CertificateCard,
  CertificateImage,
  CardContent,
  CertificateTitle,
  CertificateDetails,
  CertificateLink,
  SectionSubtitle,
} from "./CertificationSection.styles";

import certificatesData from "./certificatesData.json";

export const CertificatesSection = () => {
  return (
    <>
      <SectionContainer id="certificates">
        <SectionTitle>Certification</SectionTitle>
        <SectionSubtitle>My validated expertises</SectionSubtitle>
        <CertificatesGrid>
          {certificatesData.map((certificate) => (
            <CertificateCard key={certificate.id}>
              <CertificateImage
                src={certificate.imageUrl}
                alt={certificate.title}
              />
              <CardContent>
                <CertificateTitle>{certificate.title}</CertificateTitle>
                <CertificateDetails>
                  Emitido por: {certificate.issuer}
                </CertificateDetails>
                <CertificateDetails>
                  Data: {certificate.date}
                </CertificateDetails>
                {certificate.link && (
                  <CertificateLink
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Certificado
                  </CertificateLink>
                )}
              </CardContent>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </SectionContainer>
    </>
  );
};
