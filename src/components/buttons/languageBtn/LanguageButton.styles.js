import styled, { keyframes } from "styled-components";

// Keyframes for the digital rain effect on hover
export const rainEffect = keyframes`
  0% {
    text-shadow: 0 0 0.2rem rgb(62, 91, 157);
  }
  20% {
    text-shadow: 0 0 0.5remrgb(62, 91, 157);
    transform: translateY(-0.2rem);
  }
  40% {
    text-shadow: 0 0 0.8remrgb(62, 91, 157);
    transform: translateY(-0.4rem);
  }
  60% {
    text-shadow: 0 0 1remrgb(62, 91, 157);
    transform: translateY(-0.6rem);
  }
  80% {
    text-shadow: 0 0 0.8remrgb(62, 91, 157);
    transform: translateY(-0.4rem);
  }
  100% {
    text-shadow: 0 0 0.5remrgb(62, 91, 157);
    transform: translateY(-0.2rem);
  }
`;

// A container for the buttons to provide spacing
export const LanguageButtonContainer = styled.div`
  display: flex;
  margin: 5px;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

// The button styled component
export const LanguageButton = styled.button`
  /* Core button styles */
  background: rgb(229, 240, 255);
  color: rgb(36, 125, 241);
  font-size: 10px;
  border: 1px solid rgb(36, 125, 241);
  border-radius: 20px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 0 0.5rem rgb(36, 125, 241);
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-align: center;
  margin: 10px;
  letter-spacing: 0.1rem;
  font-family: Inconsolata;


  /* Hover effect */
  &:hover {
    background: rgba(107, 146, 254, 0.2);
    box-shadow: 0 0 1rem rgb(36, 125, 241), 0 0 2rem rgb(36, 125, 241),
      0 0 3rem rgb(36, 125, 241);
    transform: scale(1.05);
    animation: ${rainEffect} 0.8s ease-in-out infinite alternate;
  }

  /* Active/clicked state */
  &:active {
    background: rgba(104, 180, 243, 0.4);
    box-shadow: 0 0 0.5rem rgb(36, 125, 241);
    transform: scale(0.98);
  }
`;
