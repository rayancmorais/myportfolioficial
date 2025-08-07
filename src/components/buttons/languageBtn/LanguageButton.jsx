import i18n from "../../../translations";
import {
  LanguageButtonContainer,
  LanguageButton,
} from "./LanguageButton.styles";

const LanguageOptions = [
  {
    key: "ptBR",
    label: "Português",
  },
  {
    key: "en",
    label: "English",
  },
];

export const LanguageButtons = () => {
  const LanguageOptions = [
    {
      key: "ptBR",
      label: "Português",
    },
    {
      key: "en",
      label: "English",
    },
  ];
  return (
    <LanguageButtonContainer>
      {LanguageOptions.map((option) => (
        <LanguageButton onClick={() => i18n.changeLanguage(option.key)}>
          {option.label}
        </LanguageButton>
      ))}
    </LanguageButtonContainer>
  );
};
