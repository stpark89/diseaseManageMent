export interface IUserRequestVo {
  userId: string;
  userPwd: string;
}

export default class UserRequestVo implements IUserRequestVo {
  public userId: string;
  public userPwd: string;
}

export const create = ({ userId, userPwd }: IUserRequestVo): UserRequestVo => {
  const next = new UserRequestVo();
  next.userId = userId;
  next.userPwd = userPwd;
  return next;
};

export const empty = create({
  userId: "",
  userPwd: "",
});
