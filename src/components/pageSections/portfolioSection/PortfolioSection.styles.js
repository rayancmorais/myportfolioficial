import React from "react";
import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-family: Inconsolata;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const PortfolioContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const PortfolioDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  font-family: Inconsolata;
`;

export const PortfolioButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #3498db;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  font-family: Inconsolata;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #2980b9;
  }
`;

export const PdfPreviewContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const PdfIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
