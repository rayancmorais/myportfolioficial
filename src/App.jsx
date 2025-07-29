import { IntroSection } from "./components/pageSections/introSection";
import { ScrowDownIcon } from "./components/scrowDownIcon/ScrowDownIcon";
import { TechStack } from "./components/techStacks/techStack";
import { PrimaryButton } from "./components/buttons/primaryButton/PrimaryButton";
import { NavBar } from "./components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar>
        <PrimaryButton label="Home" />
        <PrimaryButton label="About" />
        <PrimaryButton label="Skillset" />
        <PrimaryButton label="Projects" />
        <PrimaryButton label="Education" />
        <PrimaryButton label="Certifications" />
        <PrimaryButton label="Contact" />
      </NavBar>
      <IntroSection />
      <TechStack />
      <ScrowDownIcon />
    </>
  );
}

export default App;
