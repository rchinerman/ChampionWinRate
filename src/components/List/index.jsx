import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import matchHistory from "../../../static/data.json";

import { Container } from "./styles.jsx";
import { ListItem } from "../ListItem/index";
import { SelectedChampionContext } from "../../context/SelectedChampion.context";

export const List = (props) => {
  const [champions, setChampions] = useState(null);
  const context = useContext(SelectedChampionContext);
  
  useEffect(() => {
    const filteredHistory = _.filter(matchHistory, (match) => {return match.championId === context.selectedChampionKey; });
    const matchupHistory = {};
    let numberOfGames = 0;
    filteredHistory.forEach(match => {
      match.theirTeam.forEach(enemyChampion => {
        // if enemy champion hasn't been logged before, set their key value
        if (!enemyChampion.name) {
          _.set(matchupHistory, `${enemyChampion}.key`, enemyChampion);
        }
        // increment wins and losses
        if (match.win) {
          numberOfGames = _.get(matchupHistory, `${enemyChampion}.wins`, 0);
          _.set(matchupHistory, `${enemyChampion}.wins`, numberOfGames + 1);
        } else {
          numberOfGames = _.get(matchupHistory, `${enemyChampion}.losses`, 0);
          _.set(matchupHistory, `${enemyChampion}.losses`, numberOfGames + 1);
        }
      })
    })
    const sortedmatchupHistory = _.orderBy(matchupHistory, 
                                          [(o) => { return ((o.wins || 0) / (o.losses || 0)) }, 
                                          (o) => { return (o.wins || 0) }, 
                                          (o) => { return (o.losses || 0) }
                                          ], 
                                          ["desc", "desc", "asc"])
    setChampions(sortedmatchupHistory);
  }, [context]);

  return (
        <Container>
          <h3>Matchups</h3>
          {_.map(champions, (matchupHistory) => {
            return (
              <ListItem
                champion={_.find(context.championData, (o) => { return o.key === matchupHistory.key; })}
                wins={matchupHistory.wins}
                losses={matchupHistory.losses}
              >
              </ListItem>
            )
          })}
      </Container>
  );
};