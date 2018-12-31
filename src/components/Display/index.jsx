import React, { useContext } from "react"

import { Container, Image, Header } from "./styles.jsx";
import { SelectedChampionContext } from "../../context/SelectedChampion.context";

export const Display = () => {
  const context = useContext(SelectedChampionContext);

  return (
    <Container>
      <Image
        src={context.selectedImage}
      />
      <Header>{ context.selectedChampionName }</Header>
    </Container>
  );
};