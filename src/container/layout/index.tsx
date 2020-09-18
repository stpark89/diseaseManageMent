import { Container, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import BoardList from "../../board/BoardList";
import Index from "../main/Index";

const useStyles = makeStyles({
  root: {},
  outerContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
  },
  mainMenuContainer: {
    backgroundColor: "#2C001D",
    color: "#FFF",

    flex: "0 0 4rem",
    textAlign: "center",
    padding: "1rem",
    borderRight: "1px solid #c0c0c0",
  },
  subMenuContainer: {
    flex: "0 0 18rem",
    padding: 0,
    borderRight: "1px solid #c0c0c0",
    overflowY: "auto",
  },
  contentContainer: { flex: "1 1 100%", overflowY: "auto" },
});

const LayoutContainer: FunctionComponent = () => {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={classes.outerContainer}
    >
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
        ].map(({ path, exact, Content }) => (
          <Route
            key={`content-area-${
              typeof path === `string` ? path : path.slice(-1)
            }`}
            exact={exact}
            path={path}
          >
            <div className={classes.contentContainer}>
              <Content />
            </div>
          </Route>
        ))}
        <Route path="*">
          <div />
        </Route>
      </Switch>
    </Container>
  );
};

export default LayoutContainer;
