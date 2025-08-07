import {
  IntroSectionAvatar,
  IntroSectionAvatarBadge,
  IntroSectionAvatarContainer,
  IntroSectionBriefing1,
  IntroSectionBriefing2,
  IntroSectionBriefing3,
} from "./IntroSection.styles";
import { SectionContainer } from "../../common";
import { useTranslation, Trans } from "react-i18next";

export const IntroSection = () => {
  // https://react.i18next.com/latest/usetranslation-hook
  const { t } = useTranslation();
  return (
    <SectionContainer backgroundImage="/Background_Intro.svg">
      <IntroSectionAvatarContainer>
        <IntroSectionAvatar src="/profilepicture.png" />
        <IntroSectionAvatarBadge src="/Vector.svg" />
      </IntroSectionAvatarContainer>
      <IntroSectionBriefing1>
        {/* https://react.i18next.com/latest/trans-component */}
        {/* Trans component to replace values or add styles to tags */}
        <Trans
          i18nKey="home.intro_section_title"
          components={{ bold: <strong /> }}
        />
        {/* {t("home.intro_section_title")} */}
      </IntroSectionBriefing1>
      <IntroSectionBriefing2>
        {/* https://react.i18next.com/latest/usetranslation-hook */}
        {/* simples usage of translation hook */}
        {t("home.intro_section_subtitle")}
      </IntroSectionBriefing2>
      <IntroSectionBriefing3>
        <Trans
          i18nKey="home.intro_section_briefing"
          components={{ break: <br /> }}
        />
      </IntroSectionBriefing3>
    </SectionContainer>
  );
};
