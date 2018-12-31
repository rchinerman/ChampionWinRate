import React, { useContext } from "react";
import _ from "lodash";
import { championImageURL, championSplashURL } from "../../constants";

import { Container } from "./styles.jsx";
import { Icon } from "../Icon/index";
import { SelectedChampionContext } from "../../context/SelectedChampion.context";

export const Grid = (props) => {
  const context = useContext(SelectedChampionContext);

  return (
        <Container>
          {context.championData && _.map(context.championData, (champion) => {
            return (
              <Icon
                image={`${championImageURL}${champion.image.full}`}
                onClick={() => {
                  context.setSelectedChampionKey(champion.key);
                  context.setSelectedChampionId(champion.id);
                  context.setSelectedChampionName(champion.name);
                  context.setSelectedImage(`${championSplashURL}${champion.id}_0.jpg`);
                }}
                active={context.selectedChampionKey === champion.key}
              />
            )
          })}
      </Container>
  );
};