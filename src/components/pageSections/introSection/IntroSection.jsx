import {
  IntroSectionContainer,
  IntroSectionAvatar,
  IntroSectionAvatarBadge,
  IntroSectionAvatarContainer,
  IntroSectionBriefing1,
  IntroSectionBriefing2,
  IntroSectionBriefing3,
} from "./IntroSection.styles";

export const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <IntroSectionAvatarContainer>
        <IntroSectionAvatar src="/Aang.jpg" />
        <IntroSectionAvatarBadge src="/Vector.svg" />
      </IntroSectionAvatarContainer>
      <IntroSectionBriefing1>
        Hello World! My name is <strong>Rayan Morais</strong>
      </IntroSectionBriefing1>
      <IntroSectionBriefing2>
        I'm a full-stack junior developer{" "}
      </IntroSectionBriefing2>
      <IntroSectionBriefing3>
        Started in UX/UI design with Figma, now I build seamless web experiences
        using React and style them smooth with Styled Components. Fluent in
        English & Portuguese. Currently pursuing a Bachelor’s degree in Computer
        Software Engineering to deepen my development skills <br></br>—because why stop
        now?
        {/* Transformo necessidades em aplicações reais, evolventes e funcionais.
        Desenvolvo sistemas através da minha paixão pela tecnologia,
        contribuindo com soluções inovadoras e eficazes para desafios complexos. */}
      </IntroSectionBriefing3>
    </IntroSectionContainer>
  );
};
