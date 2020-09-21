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
import React, { FunctionComponent, useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import { useHistory, useParams } from 'react-router-dom';


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

const AdminBoardInfo = () => {
  const classes = useStyles();
  const history = useHistory();
  const { no } = useParams();

  useEffect(() => {
    console.log("왔쪄 멍!");
  }, []);

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
        <Grid item xs={12}>
          <h5>상세 페이지 입니다.</h5>
          <Paper className={classes.control}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell align="right"> <h5> {no} </h5> </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">제목</TableCell>
                    <TableCell align="right">  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">작성자</TableCell>
                    <TableCell align="right">  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">작성일</TableCell>
                    <TableCell align="right">  </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <div style={{ float: "right" }}>
            <Button variant="contained" onClick={() => { history.push("/admin/board") }}>돌아가기</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );

}

export default AdminBoardInfo;