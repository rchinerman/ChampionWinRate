import React from "react"

import { SelectedChampionProvider } from "../context/SelectedChampion.context";
import Layout from "../components/Layout/index";


export default () => ( <SelectedChampionProvider>
                          <Layout></Layout>
                        </SelectedChampionProvider> 
                      )
