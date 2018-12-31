import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.05);
`

export const Image = styled.img`
  width: 48px;
  height: 48px;
  margin: 0;
  cursor: pointer;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
`

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin-left: 8px;
`
