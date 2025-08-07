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

import { useTranslation } from "react-i18next";

export const CertificatesSection = () => {
  const { t } = useTranslation();
  const certificatesData = [
    {
      id: 1,
      title: t("home.intro_certification_section_obj_title1"),
      issuer: "Udemy",
      date: t("home.intro_certification_section_obj_date1"),
      imageUrl:
        "https://www.clariontech.com/hs-fs/hubfs/React%2018%20New%20Features.jpg?width=1020&height=620&name=React%2018%20New%20Features.jpg",
      link: "/react18.pdf",
    },
    {
      id: 2,
      title: t("home.intro_certification_section_obj_title2"),
      issuer: "Udemy",
      date: t("home.intro_certification_section_obj_date2"),
      imageUrl:
        "https://cdn.sanity.io/images/599r6htc/regionalized/a22136347164d79bf408377a75232169c4837a11-3840x2160.png?w=1632&h=918&q=75&fit=max&auto=format",
      link: "/figma.pdf",
    },
    {
      id: 3,
      title: t("home.intro_certification_section_obj_title3"),
      issuer: "Udemy",
      date: t("home.intro_certification_section_obj_date3"),
      imageUrl:
        "https://projetodesenvolve.online/asset-v1:ProjetoDesenvolve+JS1+01+type@asset+block@1628644950-javascript.png",
      link: "/completejs.pdf",
    },
    {
      id: 4,
      title: t("home.intro_certification_section_obj_title4"),
      issuer: "Udemy",
      date: t("home.intro_certification_section_obj_date4"),
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:900/0*TDgnPm06sS0np--2.jpg",
      link: "/algorithm.pdf",
    },
  ];
  return (
    <>
      <SectionContainer id="certificates">
        <SectionTitle>
          {t("home.intro_certification_section_title")}
        </SectionTitle>
        <SectionSubtitle>
          {t("home.intro_certification_section_subtitle")}
        </SectionSubtitle>
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
                  {t("home.intro_certification_section_detail1")}
                  {certificate.issuer}
                </CertificateDetails>
                <CertificateDetails>
                  {t("home.intro_certification_section_detail2")}
                  {certificate.date}
                </CertificateDetails>
                {certificate.link && (
                  <CertificateLink
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("home.intro_certification_section_detail3")}
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
