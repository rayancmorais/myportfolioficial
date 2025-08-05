import { IntroSection } from "./components/pageSections/introSection";
import { ScrowDownIcon } from "./components/scrowDownIcon/ScrowDownIcon";
import { TechStack } from "./components/techStacks/techStack";
import { PrimaryButton } from "./components/buttons/primaryButton/PrimaryButton";
import { NavBar } from "./components/nav/NavBar";
import { CertificatesSection } from "./components/pageSections/certificationSection";
import { ProjectsSection } from "./components/pageSections/projectSection/ProjectSection";
import { PortfolioSection } from "./components/pageSections/portfolioSection/PortfolioSection";
import { ServiceSection } from "./components/pageSections/serviceSection/ServiceSection";
import { ContactSection } from "./components/pageSections/contactSection/ContactSection";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vw;
`;

function App() {
  const onPressNavItem = (id) => {
    const e = document.getElementById(id);

    window.scrollTo({
      top: e.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <AppContainer>
      <NavBar>
        <PrimaryButton
          label="Certification"
          onPress={() => onPressNavItem("certificates")}
        />
        <PrimaryButton
          label="Assistance"
          onPress={() => onPressNavItem("services")}
        />
        <PrimaryButton
          label="Project"
          onPress={() => onPressNavItem("projects")}
        />
        <PrimaryButton
          label="Education"
          onPress={() => onPressNavItem("portfolio")}
        />
        <PrimaryButton
          label="Contact"
          onPress={() => onPressNavItem("contact")}
        />
      </NavBar>
      <IntroSection />
      <TechStack />
      <ScrowDownIcon />
      <CertificatesSection />
      <ServiceSection />
      <ProjectsSection />
      <PortfolioSection />
      <ContactSection />
    </AppContainer>
  );
}

export default App;
