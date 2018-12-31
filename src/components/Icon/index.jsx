import React from "react"

import { Container, Image } from "./styles.jsx";

export const Icon = (props) => (
  <Container>
    <Image
      src={props.image}
      onClick={props.onClick}
      active={props.active}
    />
  </Container>
)