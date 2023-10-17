import styled from "styled-components";

export const SocialAcountsText = styled.p`
  font-size: 18px;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 460px;
  height: 380px;
  background-color: #13121b;
  color: white;
  outline: none;
  box-shadow: 24px;
  padding: 4px;
  border-radius: 20px;
  border: 1px solid darkgray;
  transition: all 0.3s;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 80%;
    height: 350px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 80%;
    height: 350px;
  }
`;

export const MySocialAccounts = styled.div`
  height: 12.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
