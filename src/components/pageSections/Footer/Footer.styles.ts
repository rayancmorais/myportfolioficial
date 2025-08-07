import styled from "styled-components";

export const FooterContent = styled.footer`
  font-family: Inconsolata;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 1.2rem;
  gap: 1.6rem;
  a {
    color: #e2e4e9;
    text-decoration: none;
    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
`;
