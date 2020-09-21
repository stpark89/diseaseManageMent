import { Container, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import BoardList from "../../board/BoardList";
import Index from "../main/Index";
<<<<<<< HEAD
import AdminBoardInfo from "../../admin/AdminBoardInfo";
=======
import Header from "./header";
>>>>>>> 1f39a59e732eb186aa46c8dc95a6fd5231a5034b

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  header: { flexGrow: 1 },
});

const LayoutContainer: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Header />
      </div>
      <Switch>
        {[
          {
            path: ["", "/"],
            exact: true,
            Content: () => <Index />,
          },
          {
            path: "/board",
            exact: true,
            Content: () => <BoardList />,
          },
          {
            path: `/admin/board/detail/:no`,
            exact: true,
            Content: () => <AdminBoardInfo />,
          },
        ].map(({ path, exact, Content }) => (
          <Route
            key={`content-area-${
              typeof path === `string` ? path : path.slice(-1)
            }`}
            exact={exact}
            path={path}
          >
            <Content />
          </Route>
        ))}
        <Route path="*">
          <div />
        </Route>
      </Switch>
    </>
  );
};

export default LayoutContainer;
