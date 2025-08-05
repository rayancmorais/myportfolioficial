import styled from "styled-components";

export const StyledSectionContainer = styled.section<{
  $bgImage?: string;
}>`
  padding: 4rem 2rem;
  background-color: #16181d;
  text-align: center;
  font-family: Inconsolata;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ $bgImage }) =>
    $bgImage
      ? `
        background-image: url(${$bgImage});
        background-repeat: no-repeat;
        background-size: cover;
      `
      : ""}

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
