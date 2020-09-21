export interface IUserResponseVo {
  userId: string;
  userName: string;
}

export default class UserResponseVo implements IUserResponseVo {
  public userId: string;
  public userName: string;
}

export const create = ({
  userId,
  userName,
}: IUserResponseVo): UserResponseVo => {
  const next = new UserResponseVo();
  next.userId = userId;
  next.userName = userName;
  return next;
};

export const empty = create({
  userId: "",
  userName: "",
});
