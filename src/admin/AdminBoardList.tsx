import {
    Button,
    createStyles,
    Grid,
    Theme,
  } from "@material-ui/core";
  import Paper from "@material-ui/core/Paper/Paper";
  import makeStyles from "@material-ui/core/styles/makeStyles";
  import Table from "@material-ui/core/Table/Table";
  import TableBody from "@material-ui/core/TableBody/TableBody";
  import TableCell from "@material-ui/core/TableCell/TableCell";
  import TableContainer from "@material-ui/core/TableContainer/TableContainer";
  import TableHead from "@material-ui/core/TableHead/TableHead";
  import TableRow from "@material-ui/core/TableRow/TableRow";
  import React, { FunctionComponent, useState } from "react";
  import AdminBoardVo from "./AdminBoardVo";
  import { useHistory } from 'react-router-dom';


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

interface IAdminBoardListProps {
    setViewState: React.Dispatch<React.SetStateAction<boolean>>,
    adminBoardVoList: AdminBoardVo[],
}

const AdminBoardList: FunctionComponent<IAdminBoardListProps> = ({
    setViewState,
    adminBoardVoList,
}) => {
    const classes = useStyles();
    const history = useHistory();

    const rowClickHandler = (no: number) => {
      console.log(no);
      history.push(`/admin/board/detail/${no}`);
    }

    return (
        <Grid item xs={12}>
        <h5>테이블 리스트 입니다.</h5>
        <Paper className={classes.control}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align="right">제목</TableCell>
                  <TableCell align="right">작성자</TableCell>
                  <TableCell align="right">작성일</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {adminBoardVoList.map( v => 
                    <TableRow 
                      onClick={() => rowClickHandler(v.no)}
                    >
                        <TableCell>{v.no}</TableCell>
                        <TableCell align="right">{v.title}</TableCell>
                        <TableCell align="right">{v.writer}</TableCell>
                        <TableCell align="right">{v.createDate}</TableCell> 
                    </TableRow>
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div style={{ float: "right" }}>
          <Button variant="contained" onClick={ () => { setViewState(false) }}>등록</Button>
        </div>
      </Grid>
    );

}

export default AdminBoardList;