import styled from "styled-components";

export const FindMeContainer = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.container};
`;

export const ConnectSpan = styled.span`
  color: ${({ theme }) => theme.iconColor};
`;

export const FindMeOnH1 = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
`;

export const FindMeP = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
`;

export const FindMeIcons = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
`;

export const IconsContainer = styled.div`
  width: 13%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
