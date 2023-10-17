import styled from "styled-components";

export const StyledModalScreeShot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
  background-color: #18181bfa;
  color: white;
  outline: none;
  box-shadow: 24px;
  border-radius: 10px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 94%;
    height: 90%;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    height: 90%;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    /* width: 90%; */
    height: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 95%;
  }

  @media screen and (min-width: 900px) and (max-width: 1030px) {
    width: 80%;
  }
`;

export const IsMobileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const SC1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SC2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SC3 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
