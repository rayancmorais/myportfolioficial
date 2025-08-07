import { Code, Layout, Figma, Database } from "lucide-react";
import {
  ServicesGrid,
  ServiceCard,
  CardIcon,
  CardTitle,
  CardDescription,
} from "./ServiceSection.styles";
import { SectionSubtitle } from "../certificationSection/CertificationSection.styles";

import { SectionTitle } from "../certificationSection/CertificationSection.styles";
import { SectionContainer } from "../../common";
import { useTranslation } from "react-i18next";

export const ServiceSection = () => {
  const { t } = useTranslation();
  const servicesData = [
    {
      icon: Code,
      title: t("home.service_section_obj_title1"),
      description: t("home.service_section_obj_description1"),
    },
    {
      icon: Layout,
      title: t("home.service_section_obj_title2"),
      description: t("home.service_section_obj_description2"),
    },
    {
      icon: Figma,
      title: t("home.service_section_obj_title3"),
      description: t("home.service_section_obj_description3"),
    },
    {
      icon: Database,
      title: t("home.service_section_obj_title4"),
      description: t("home.service_section_obj_description4"),
    },
  ];
  return (
    <SectionContainer id="services">
      <SectionTitle>{t("home.service_section_title")}</SectionTitle>
      <SectionSubtitle>{t("home.service_section_subtitle")}</SectionSubtitle>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <CardIcon>
              <service.icon />
            </CardIcon>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </SectionContainer>
  );
};
