import styled from "styled-components";

export const IntroSectionAvatar = styled.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
  object-fit: cover;
  border: 4px #ffff solid;
`;

export const IntroSectionAvatarContainer = styled.div`
  position: relative;
`;
export const IntroSectionAvatarBadge = styled.img`
  height: 25;
  width: 31px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const IntroSectionBriefing1 = styled.h5`
  font-family: Inconsolata;
  color: #c0c4ce;
  font-size: 30px;
  strong {
    color: rgb(49, 142, 248);
  }
  margin-top: 56px;
  font-weight: 400;
`;

export const IntroSectionBriefing2 = styled.h2`
  font-family: Asap;
  color: #e2e4e9;
  font-size: 56px;
  margin-top: 10px;
  font-weight: 600;
  font-family:Inconsolata;
`;

export const IntroSectionBriefing3 = styled.h6`
  font-family: Inconsolata;
  color: #878ea1;
  font-size: 20px;
  margin-top: 20px;
  max-width: 680px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
    text-align: justify;
    br {
      display: none;
    }
  }
  padding: 0 16px;
`;
