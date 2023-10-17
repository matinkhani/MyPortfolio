import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.container};
  display: flex;
  flex-direction: column;
`;

export const AlertContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLargeText = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (min-width: 320px) and (max-width: 900px) {
    font-size: 35px;
  }
`;

export const FormSmallText = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 17px;
    width: 70%;
    align-self: center;
  }
`;

export const FormInputContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const InputNameAndEmail = styled.input`
  height: 12%;
  font-size: medium;
  width: 35%;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background-color: #181727;
  outline: none;

  @media screen and (min-width: 320px) and (max-width: 900px) {
    width: 70%;
  }
`;

export const MessageArea = styled.textarea`
  font-size: medium;
  width: 35%;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background-color: #181727;
  outline: none;

  @media screen and (min-width: 320px) and (max-width: 900px) {
    width: 70%;
  }
`;

export const FormBtnContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBtn = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 0.5rem;
  font-size: 20px;
  color: white;
  background-color: ${({ theme }) => theme.iconColor};
  cursor: pointer;
  border: none;
  outline: none;
  padding-inline: 5px;

  @media screen and (min-width: 320px) and (max-width: 900px) {
    width: 76%;
  }
`;
