import {
  Button,
  createStyles,
  Grid,
  Theme,
  TextField,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import React, { FunctionComponent, useState } from "react";
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

interface IAdminBoardCreateProps {
  setViewState: (e: boolean) => void;
  createBtnClickHandler: (vo: AdminBoardVo) => void;
  useAdminBoardVo: AdminBoardVo;
  setCreateAdminBoardVo: (vo: AdminBoardVo) => void;
}

const AdminBoardCreate: FunctionComponent<IAdminBoardCreateProps> = ({
  setViewState,
  createBtnClickHandler,
  useAdminBoardVo,
  setCreateAdminBoardVo,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <h5>테이블 리스트 입니다.</h5>
      <Paper className={classes.control}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow></TableRow>
            </TableHead>
            <TableBody>
              <TextField
                label="제목"
                value={useAdminBoardVo.title}
                onChange={(e) =>
                  setCreateAdminBoardVo({
                    ...useAdminBoardVo,
                    title: e.target.value,
                  })
                }
              />
              <TextField
                label="작성자"
                value={useAdminBoardVo.writer}
                onChange={(e) =>
                  setCreateAdminBoardVo({
                    ...useAdminBoardVo,
                    writer: e.target.value,
                  })
                }
              />
              <TextField
                type="date"
                value={useAdminBoardVo.createDate}
                onChange={(e) =>
                  setCreateAdminBoardVo({
                    ...useAdminBoardVo,
                    createDate: e.target.value,
                  })
                }
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};

export default AdminBoardCreate;
