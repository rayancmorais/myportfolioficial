import styled from "styled-components";

export const TechStackContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 40px;
  margin: 16px;
  background-color: #292c34;
  color: #c0c4ce;
  position: relative;
  box-shadow: 0 3px 10px -3px rgba(31, 50, 146, 0.55);
  font-family: Inconsolata;
`;

export const TechIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export const TechStackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

// export const TechItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100px; /* Ajuste conforme necessário */
// `;

// export const IconContainer = styled.div`
//   width: 60px;
//   height: 60px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 5px;

//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const TechName = styled.span`
//   font-size: 14px;
//   text-align: center;
// `;
