import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #0a0416;
  color: #fff;
`;

export const NoneDiv = styled.div`
  height: 100%;
  width: 25%;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    display: none;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    display: none;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    display: none;
  }
`;

export const CopyRightDiv = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    width: 50%;
    font-size: 9.3px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
    font-size: 10px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 50%;
    font-size: 10px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 50%;
    font-size: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 50%;
    font-size: 10px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    width: 50%;
    font-size: 10px;
  }
`;

export const FooterIcons = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    width: 100%;
  }
`;
