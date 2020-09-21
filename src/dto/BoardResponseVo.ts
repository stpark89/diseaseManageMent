export interface IBoardResponseVo {
  boardId: number;
  boardTitle: string;
  boardContent: string;
}

export default class BoardResponseVo implements IBoardResponseVo {
  public boardId: number;
  public boardTitle: string;
  public boardContent: string;
}

export const create = ({
  boardId,
  boardTitle,
  boardContent,
}: IBoardResponseVo): BoardResponseVo => {
  const next = new BoardResponseVo();
  next.boardId = boardId;
  next.boardTitle = boardTitle;
  next.boardContent = boardContent;
  return next;
};
