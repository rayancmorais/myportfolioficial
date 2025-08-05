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

const servicesData = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Crafting responsive, high-performance, and scalable websites tailored to your business needs, from concept to deployment.",
  },
  {
    icon: Layout,
    title: "User Interface (UI)",
    description:
      "Designing intuitive and aesthetically pleasing user interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: Figma,
    title: "Figma UX/UI Design",
    description:
      "Transforming ideas into wireframes, prototypes, and high-fidelity designs using Figma, focusing on user-centric solutions.",
  },
  {
    icon: Database,
    title: "API & Database Solutions",
    description:
      "Developing robust APIs and optimizing database structures to ensure seamless data flow and efficient application performance.",
  },
];

export const ServiceSection = () => {
  return (
    <SectionContainer id="services">
      <SectionTitle>Assistance</SectionTitle>
      <SectionSubtitle>What I provide</SectionSubtitle>
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
