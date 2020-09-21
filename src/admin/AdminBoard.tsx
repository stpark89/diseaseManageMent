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
  import React, { FunctionComponent, useState } from "react";
import AdminBoardCreate from './AdminBoardCreate'
import AdminBoardList from './AdminBoardList'
import AdminBoardVo, {create as createAdminBoardVo} from './AdminBoardVo'

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

    const [viewState, setViewState] = useState<boolean>(false);
    const [adminBoardVoList, setAdminBoardVoList] = useState<AdminBoardVo[]>([]);

    const createBtnClickHandler = (vo: AdminBoardVo) => {

        //adminBoardVoList.push( createAdminBoardVo( {...vo, no: adminBoardVoList.length + 1} ));
        setAdminBoardVoList([
            ...adminBoardVoList,
            createAdminBoardVo( {...vo, no: adminBoardVoList.length + 1} )
        ]);

        setViewState(true);
    }

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
            {viewState === true ? 
            <AdminBoardList setViewState={setViewState} adminBoardVoList={adminBoardVoList}/> :
             <AdminBoardCreate setViewState={setViewState} createBtnClickHandler={createBtnClickHandler} />
             }
          </Grid>
        </>
      );

}

export default AdminBoard;