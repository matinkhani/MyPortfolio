import styled from "styled-components";

export const StyledIntroduction = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.container};

  @media screen and (min-width: 0px) and (max-width: 320px) {
    height: 680px;
    flex-direction: column;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 750px;
    flex-direction: column;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    height: 680px;
    flex-direction: column;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    justify-content: space-around;
  }
`;

export const IntroductionText = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-size: 55px;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 25px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 25px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 25px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const IntroductionH1 = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-size: 55px;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 25px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 25px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 25px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const IntroductionName = styled.h1`
  color: #cd5ff8;
  padding-left: 10px;
  font-size: 55px;
  color: ${({ theme }) => theme.iconColor};

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 25px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 25px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 25px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const IntroductionFrontend = styled.h1`
  color: ${({ theme }) => theme.iconColor};
  font-size: 55px;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 25px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 25px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 25px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const IntroductionPlace = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const ReactIcon = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.iconColor};
  font-size: 200px;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    margin-top: 120px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 120px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 25%;
    margin-top: 120px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 21%;
  }
`;

export const NextIcon = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.iconColor};
  font-size: 200px;

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 25%;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 21%;
  }
`;

export const WavyHand = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  font-size: 40px;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 21px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 21px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 21px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 21px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 21px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 21px;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
