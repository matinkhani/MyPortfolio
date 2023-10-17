import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;

        ::-webkit-scrollbar {
          width: 9px;
          background: ${({ theme }) => theme.toolkitColor};
        }        

        ::-webkit-scrollbar-thumb {
          background: ${({ theme }) => theme.toolkitColor2}; 
          border-radius: 10px;
        }
    }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.container};
`;
