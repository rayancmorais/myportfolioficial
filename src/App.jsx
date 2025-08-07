import { NavBar } from "./components/pageSections/nav/NavBar";
import { LanguageButtons } from "./components/buttons/languageBtn/LanguageButton";
import styled from "styled-components";
import { Home } from "./components/pages/Home";
// https://react.i18next.com/latest/i18nextprovider
// Provider to inject translation context on children (whole app in this case)
import { I18nextProvider } from "react-i18next";
// translations setup
import i18n from "./translations";

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
    // https://react.i18next.com/latest/i18nextprovider
    // Provider to inject translation context on children (whole app in this case)
    <I18nextProvider i18n={i18n}>
      <AppContainer>
        <LanguageButtons />
        <NavBar onPressNavItem={onPressNavItem} />
        <Home />
      </AppContainer>
    </I18nextProvider>
  );
}

export default App;
