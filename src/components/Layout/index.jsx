import React from "react"

import { GlobalStyle, Container, Column, Section } from "./styles";
import { Grid } from "../Grid/index";
import { Display } from "../Display/index";
import { List } from "../List/index";

export default (children) => 
<React.Fragment>
  <GlobalStyle />
  <Container>
    <Column style={{marginRight: "1rem"}}>
      <Section>
        <Grid></Grid>
      </Section>
    </Column>
    <Column>
      <Section>
        <Display></Display>
      </Section>
      <Section>
        <List></List>
      </Section>
    </Column>
  </Container>
</React.Fragment>
