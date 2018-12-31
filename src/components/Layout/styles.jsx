import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #1C2837;
    max-height: 100vh;
    padding: 2rem;
    margin: 0;  
    font-family: 'Roboto', sans-serif;
  }
`

export const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Section = styled.div`
  padding: 1rem;
  margin: 1rem;
  width: 500px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  background: #182331;
`