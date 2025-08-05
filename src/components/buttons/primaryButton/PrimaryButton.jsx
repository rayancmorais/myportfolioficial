import {
  PrimaryButtonContainer,
  PrimatyButtonSvg,
} from "./PrimaryButton.styled";

export const PrimaryButton = ({ label, href, onPress }) => {
  return (
    <PrimaryButtonContainer href={href} onClick={onPress}>
      {label}
      <PrimatyButtonSvg fill="none" viewBox="0 0 24 24">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M5 12h14M13 6l6 6-6 6"
        />
      </PrimatyButtonSvg>
    </PrimaryButtonContainer>
  );
};
