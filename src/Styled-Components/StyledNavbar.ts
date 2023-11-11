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

  @media screen and (min-width: 0px) and (max-width: 480px) {
    justify-content: center;
    gap: 35%;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    justify-content: center;
    gap: 45%;
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

  @media screen and (min-width: 0px) and (max-width: 600px) {
    display: none;
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
  font-family: "Raleway", sans-serif;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    height: 25%;
  }

  &:hover {
    color: #cd5ff8;
  }
`;

export const MenuPlace = styled.div`
  width: 20%;
  height: 100%;
  display: none;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledModal2 = styled.div`
  position: absolute;
  top: 26.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 380px;
  background-color: #13121b;
  color: white;
  outline: none;
  box-shadow: 24px;
  padding: 4px;
  transition: all 0.3s;
  border-radius: 10px;
  border: 1px solid darkgray;

  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 80%;
    height: 240px;
  }
`;

export const TabsPlaceMobile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
