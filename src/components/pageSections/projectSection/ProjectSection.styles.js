import React from "react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #16181d;
  text-align: center;
  font-family: Inconsolata;
  color: #333;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  display: inline-block;
  font-family: Inconsolata;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px; /* Altura fixa para as imagens */
  object-fit: cover;
  border-bottom: 1px solid #eee;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  text-align: left;
  flex-grow: 1;
  font-family: Inconsolata;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  color: #34495e;
  font-family: Inconsolata;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: Inconsolata;
`;

export const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-family: Inconsolata;
`;

export const TechnologyTag = styled.span`
  background-color: #ecf0f1;
  color: #2c3e50;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: Inconsolata;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: auto; /* Empurra o botão para a parte inferior do card */
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: flex-start;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;
