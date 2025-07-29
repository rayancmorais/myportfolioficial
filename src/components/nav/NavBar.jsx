import { PrimaryButton } from "../buttons/primaryButton/PrimaryButton";
import { NavBarContainer } from "./NavBar.styles";

export const NavBar = ({ children }) => {
  return <NavBarContainer>{children}</NavBarContainer>;
};
