import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { ContactCard, ButtonGrid, ContactButton } from "./ContactSection.syles";
import { SectionContainer } from "../../common";
import { useTranslation } from "react-i18next";

import {
  SectionTitle,
  SectionSubtitle,
} from "../certificationSection/CertificationSection.styles";

export const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionContainer id="contact">
        <ContactCard>
          <SectionTitle>{t("home.contact_section_title")}</SectionTitle>
          <SectionSubtitle>
            {t("home.contact_section_subtitle")}
          </SectionSubtitle>
          <ButtonGrid>
            <ContactButton
              href="https://wa.me/5532998214618?text=Hi!"
              target="_blank"
              color="#25D366"
            >
              <FaWhatsapp size={24} />
              <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
                WhatsApp
              </span>
            </ContactButton>

            <ContactButton
              href="mailto:rayan_cm2021@icloud.com"
              color="#EF4444"
            >
              <FaEnvelope size={24} />
              <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
                Email
              </span>
            </ContactButton>

            <ContactButton
              href="https://www.linkedin.com/in/rayancmorais"
              target="_blank"
              color="#0A66C2"
            >
              <FaLinkedinIn size={24} />
              <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
                LinkedIn
              </span>
            </ContactButton>

            <ContactButton
              href="https://www.instagram.com/rayancmorais?igsh=b2E4M3c1M2tyY3hn&utm_source=qr"
              target="_blank"
              color="#E1306C"
            >
              <FaInstagram size={24} />
              <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
                Instagram
              </span>
            </ContactButton>
          </ButtonGrid>
        </ContactCard>
      </SectionContainer>
    </>
  );
};
