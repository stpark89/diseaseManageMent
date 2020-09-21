import {
  AppBar,
  Button,
  createStyles,
  Grid,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { RootState } from "modules";
import { selectAllBoardList } from "modules/board/selector";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminBoardCreate from "./AdminBoardCreate";
import AdminBoardList from "./AdminBoardList";
import AdminBoardVo, {
  create as createAdminBoardVo,
  empty as emptyAdminBoardVo,
} from "./AdminBoardVo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const AdminBoard = () => {
  const classes = useStyles();

  const selectBoardList = useSelector;
  const items = useSelector<RootState, ReturnType<typeof selectAllBoardList>>(
    selectAllBoardList
  );

  useEffect(() => {
    console.log(items);
    debugger;
  }, [items]);

  const [viewState, setViewState] = useState<boolean>(false);
  const [adminBoardVoList, setAdminBoardVoList] = useState<AdminBoardVo[]>([]);

  const [useAdminBoardVo, setCreateAdminBoardVo] = useState<AdminBoardVo>(
    emptyAdminBoardVo
  );

  const createBtnClickHandler = () => {
    setAdminBoardVoList([
      ...adminBoardVoList,
      {
        ...useAdminBoardVo,
        no: adminBoardVoList.length + 1,
      },
    ]);
    setViewState(true);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            아이콘
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.root} spacing={2}>
        {viewState === true ? (
          <AdminBoardList
            setViewState={setViewState}
            adminBoardVoList={adminBoardVoList}
          />
        ) : (
          <div>
            <AdminBoardCreate
              setViewState={setViewState}
              createBtnClickHandler={createBtnClickHandler}
              useAdminBoardVo={useAdminBoardVo}
              setCreateAdminBoardVo={setCreateAdminBoardVo}
            />
            <div style={{ float: "right" }}>
              <Button variant="contained" onClick={createBtnClickHandler}>
                등록
              </Button>
            </div>
          </div>
        )}
      </Grid>
    </>
  );
};

export default AdminBoard;
