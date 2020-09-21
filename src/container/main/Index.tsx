import { Grid } from "@material-ui/core";
import React, { FunctionComponent, useEffect } from "react";

const Index: FunctionComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <p>질병사전</p>
      </Grid>
      <Grid item xs={4}>
        <p>질병사전</p>
      </Grid>
    </Grid>
  );
};

export default Index;
