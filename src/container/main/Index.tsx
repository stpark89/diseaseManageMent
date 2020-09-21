import { Grid } from "@material-ui/core";
import { RootState } from "modules";
import { action as boardAction } from "modules/board/action";
import { fetchBoardRequest } from "modules/board/action";
import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";

const Index: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardAction.fetchBoardRequest());
  }, [dispatch]);

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
