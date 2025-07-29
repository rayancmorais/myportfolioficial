import styled, { keyframes } from "styled-components";

const rotate = keyframes`

  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const PrimaryButtonContainer = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: linear-gradient(145deg, #0f0f0f, #1c1c1c);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #c0c4ce;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      rgb(62, 91, 157),
      rgb(0, 0, 0),
      rgb(36, 125, 241)
    );
    animation: ${rotate} 4s linear infinite;
    z-index: -2;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: #292c34;
    border-radius: inherit;
    z-index: -1;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(100, 100, 234, 0.2);
    svg {
      transform: translateX(6px);
    }
  }
`;

export const PrimatyButtonSvg = styled.svg`
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease-in-out;
  color: rgb(62, 127, 233);
`;
