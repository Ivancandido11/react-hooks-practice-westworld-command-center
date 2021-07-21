import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";

import ColdStorage from "./ColdStorage"
import LogPanel from "./LogPanel"

function Headquarters({ hosts, onCurrentAreaChange, onHostClick, selectedHost }) {
  const hostsToDisplay = hosts.filter(host => host.active === false)
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage
          hosts={hostsToDisplay}
          onHostClick={onHostClick}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
          host={selectedHost}
          onCurrentAreaChange={onCurrentAreaChange}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
