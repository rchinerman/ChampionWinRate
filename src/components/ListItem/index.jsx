import React, { Fragment } from "react"
import { championImageURL } from "../../constants";

import { Container, Item, Image, Text } from "./styles.jsx";

export const ListItem = (props) => {
  return (
    <Container>
      <Item>
        {props.champion &&
          <Fragment>
            <Image src={`${championImageURL}${props.champion.image.full}`}/>
            <Text>{`${props.wins || 0}W - ${props.losses || 0}L`}</Text>
          </Fragment>
        }
      </Item>
    </Container>
  );
};