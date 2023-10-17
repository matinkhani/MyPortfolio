import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 75px;
  width: 100%;
  background-color: ${({ theme }) => theme.navbarColor};
  box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  position: fixed;
  z-index: 1;

  @media screen and (min-width: 480px) and (max-width: 600px) {
    justify-content: space-around;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const AboutMePlace = styled.div`
  display: flex;
`;

export const AboutMeText = styled.p`
  font-size: 20px;
`;

export const ContactMePlace = styled.div`
  display: flex;
  cursor: pointer;
`;

export const ContactMeText = styled.p`
  font-size: 18px;

  @media screen and (min-width: 480px) and (max-width: 600px) {
    font-size: 17px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const ScrollTabs = styled.div`
  width: 25%;
  /* height: 100%; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 55%;
    gap: 10px;
    font-size: 15px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 55%;
    gap: 10px;
    font-size: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 55%;
    gap: 10px;
  }

  @media screen and (min-width: 900px) and (max-width: 1440px) {
    width: 50%;
  }
`;

export const NavTabs = styled.div`
  cursor: pointer;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #cd5ff8;
    border-bottom: 2px solid #cd5ff8;
  }
`;
