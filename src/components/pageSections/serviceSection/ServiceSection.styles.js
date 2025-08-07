import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;
  font-family: Inconsolata;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column on small screens */
  gap: 2rem; /* Space between cards */
  max-width: 1200px;
  width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const CardIcon = styled.div`
  color: #007bff;
  margin-bottom: 1.5rem;
  svg {
    width: 60px;
    height: 60px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 1rem;
  font-family: Inconsolata;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: Inconsolata;
`;
