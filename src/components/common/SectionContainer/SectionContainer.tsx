import React from "react";
import { StyledSectionContainer } from "./SectionContainer.styles";

export const SectionContainer = ({
  children,
  id,
  backgroundImage,
}: {
  children: React.ReactNode;
  id?: string;
  backgroundImage?: string;
}) => {
  return (
    <StyledSectionContainer id={id} $bgImage={backgroundImage}>
      {children}
    </StyledSectionContainer>
  );
};
