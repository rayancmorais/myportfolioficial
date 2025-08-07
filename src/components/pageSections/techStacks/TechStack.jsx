import React from "react";
import {
  TechStackContainer,
  TechIcon,
  TechStackWrapper,
} from "./TechStacks.styles";
export const TechStack = () => {
  return (
    <TechStackWrapper>
      <TechStackContainer>
        <TechIcon src="/GitHub-2.svg" alt="GitHub"></TechIcon>
        GitHub
      </TechStackContainer>

      <TechStackContainer>
        <TechIcon src="/HTML5.svg" alt="HTML"></TechIcon>
        HTML
      </TechStackContainer>

      <TechStackContainer>
        <TechIcon src="/CSS3.svg" alt="CSS3"></TechIcon>
        CSS3
      </TechStackContainer>

      <TechStackContainer>
        <TechIcon src="/JavaScript.svg" alt="JavaScript"></TechIcon>
        JavaScript
      </TechStackContainer>

      <TechStackContainer>
        <TechIcon src="/React.svg" alt="ReactJS"></TechIcon>
        React
      </TechStackContainer>

      <TechStackContainer>
        <TechIcon src="/Node.js.svg" alt="NodeJS"></TechIcon>
        Node.js
      </TechStackContainer>
    </TechStackWrapper>
  );
};
