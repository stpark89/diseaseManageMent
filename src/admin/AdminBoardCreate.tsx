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
      empty as emptyAdminBoardVo
  } from './AdminBoardVo'

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
    setViewState: React.Dispatch<React.SetStateAction<boolean>>,
    createBtnClickHandler: (vo: AdminBoardVo) => void,
}

const AdminBoardCreate: FunctionComponent<IAdminBoardCreateProps> = ({
    setViewState,
    createBtnClickHandler,
}) => {
    const classes = useStyles();
    const [createAdminBoardVo, setCreateAdminBoardVo] = useState<AdminBoardVo>(emptyAdminBoardVo);

    return (
        <Grid item xs={12}>
        <h5>테이블 리스트 입니다.</h5>
        <Paper className={classes.control}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                </TableRow>
              </TableHead>
              <TableBody>
                <TextField 
                    label="제목"
                    value={createAdminBoardVo.title}
                    onChange={
                        e => setCreateAdminBoardVo({ ...createAdminBoardVo, title: e.target.value })
                    }
                />
                <TextField 
                    label="작성자"
                    value={createAdminBoardVo.writer}
                    onChange={
                        e => setCreateAdminBoardVo({ ...createAdminBoardVo, writer: e.target.value })
                    }
                />
                <TextField 
                    type="date"
                    value={createAdminBoardVo.createDate}
                    onChange={
                        e => setCreateAdminBoardVo({ ...createAdminBoardVo, createDate: e.target.value })
                    }
                />
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div style={{ float: "right" }}>
          <Button variant="contained" onClick={ () => { createBtnClickHandler(createAdminBoardVo); } }>등록</Button>
        </div>
      </Grid>
    );

}

export default AdminBoardCreate;