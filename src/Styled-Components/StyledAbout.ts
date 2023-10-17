import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.container};
`;

export const IMH1 = styled.p`
  color: ${({ theme }) => theme.iconColor};
  margin-left: 6px;
`;

export const AboutTextPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    width: 80%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 80%;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    width: 80%;
  }
`;

export const AboutTextH1 = styled.h1`
  padding-bottom: 50px;
  display: flex;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 21px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 28px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 35px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 42px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 49px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 56px;
  }
`;

export const AboutTextH2 = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  line-height: 32px;
  letter-spacing: 2px;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 17.5px;
    text-align: center;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 19px;
    text-align: center;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 20.5px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 22px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 23.5px;
  }
`;
