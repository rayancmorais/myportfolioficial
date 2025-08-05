import React from "react";
import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: rgb(49, 142, 248);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const PortfolioContent = styled.div`
  max-width: 900px;
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
`;

export const PortfolioButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color:rgb(49, 142, 248);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease,
    transform 0.2s ease box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color:rgb(49, 142, 248);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  &::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
`;

export const PdfPreviewContainer = styled.div`
  margin-top: 20px;
  width: 600px;
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
