import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #e3646e;
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2px;
  margin-bottom: 20px;
  font-family: Inconsolata;
`;

export const SectionSubtitle = styled.h4`
  font-size: 20px;
  color: #e2e4e9;
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;
  font-family: Inconsolata;
`;

export const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const CertificateCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Garante que os cards tenham a mesma altura */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: 200px; /* Altura fixa para as imagens */
  object-fit: cover; /* Garante que a imagem cubra a área sem distorcer */
  border-bottom: 1px solid #eee;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  text-align: left;
  flex-grow: 1; /* Permite que o conteúdo ocupe o espaço restante */
  font-family: Inconsolata;
`;

export const CertificateTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: #34495e;
  font-family: Inconsolata;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CertificateDetails = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  font-family: Inconsolata;
`;

export const CertificateLink = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: flex-start; /* Alinha o botão à esquerda dentro do card */
  font-family: Inconsolata;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;
