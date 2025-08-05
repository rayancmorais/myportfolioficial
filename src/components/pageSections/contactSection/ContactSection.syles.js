import styled from "styled-components";

export const ContactCard = styled.div`
  background-color:  #16181d;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 56rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

// Styled components for the text
export const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #4b5563;
  margin-bottom: 2.5rem;
  font-size: 1.125rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Styled component for the button grid
export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

// Styled component for each button, with dynamic background color
export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${({ color }) => color};
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;
