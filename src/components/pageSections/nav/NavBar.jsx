import { useTranslation } from "react-i18next";
import { NavBarContainer } from "./NavBar.styles";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";

export const NavBar = ({ onPressNavItem }) => {
  const { t } = useTranslation();
  return (
    <NavBarContainer>
      <PrimaryButton
        label={t("navbar.certifications")}
        onPress={() => onPressNavItem("certificates")}
      />
      <PrimaryButton
        label={t("navbar.services")}
        onPress={() => onPressNavItem("services")}
      />
      <PrimaryButton
        label={t("navbar.projects")}
        onPress={() => onPressNavItem("projects")}
      />
      <PrimaryButton
        label={t("navbar.education")}
        onPress={() => onPressNavItem("portfolio")}
      />
      <PrimaryButton
        label={t("navbar.contacts")}
        onPress={() => onPressNavItem("contact")}
      />
    </NavBarContainer>
  );
};
