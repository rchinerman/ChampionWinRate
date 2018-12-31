import styled from "styled-components"

export const Container = styled.div`
  margin: 0.25rem;
`

export const Image = styled.img`
  width: 48px;
  height: 48px;
  margin: 0;
  cursor: pointer;
  opacity: 0.7;
  filter: grayscale(100%);

  ${({ active }) => active && `
    opacity: 1.0;
    filter: none;
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    transform: scale(1.1);
  `}
`