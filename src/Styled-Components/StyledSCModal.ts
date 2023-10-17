import styled from "styled-components";

export const SliderStyles = styled.div`
  position: relative;
  height: 100%;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    display: none;
  }
`;

export const LeftArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    display: none;
  }
`;

export const RightArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    display: none;
  }
`;

export const SliderStyles2 = styled.div`
  position: relative;
  height: 100%;

  @media screen and (min-width: 600px) and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    display: none;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const LeftArrowStyles2 = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;

  @media screen and (min-width: 600px) and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    display: none;
  }
`;

export const RightArrowStyles2 = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;

  @media screen and (min-width: 600px) and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    display: none;
  }
`;
