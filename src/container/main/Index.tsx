import { Button, Grid, TextField } from "@material-ui/core";
import { RootState } from "modules";
import { action as boardAction } from "modules/board/action";
import { action as userInfoAction } from "modules/login/action";
import { fetchBoardRequest } from "modules/board/action";
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserRequestVo, {
  empty as emptyUserRequest,
  create as cr,
} from "dto/UserRequestVo";

const Index: FunctionComponent = () => {
  const dispatch = useDispatch();

  const [useUserInfo, setUseUserInfo] = useState<UserRequestVo>(
    emptyUserRequest
  );

  useEffect(() => {
    dispatch(boardAction.fetchBoardRequest());
  }, [dispatch]);

  // 로그인
  const handleChaneLogin = () => {
    dispatch(userInfoAction.fetchLoginRequest(useUserInfo));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <p>질병사전</p>
      </Grid>
      <Grid item xs={4}>
        <p>질병사전</p>
        <Link to={"/admin/board"}>관리자</Link>
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={(
            event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) =>
            setUseUserInfo(cr({ ...useUserInfo, userId: event.target.value }))
          }
        />
        <TextField
          onChange={(
            event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) =>
            setUseUserInfo(cr({ ...useUserInfo, userPwd: event.target.value }))
          }
        />
        <Button onClick={handleChaneLogin}>로그인</Button>
      </Grid>
    </Grid>
  );
};

export default Index;
