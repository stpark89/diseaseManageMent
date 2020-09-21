export interface IAdminBoardVo {
    no: number,
    title: string,
    writer: string,
    createDate: string,
}

export default class AdminBoardVo implements IAdminBoardVo {
    public no: number;
    public title: string;
    public writer: string;
    public createDate: string;
}

export const create = ({
    no,
    title,
    writer,
    createDate,
}:IAdminBoardVo) => {
    const next = new AdminBoardVo();
    next.no = no;
    next.title = title;
    next.writer = writer;
    next.createDate = createDate;
    return next;
}

export const empty = create({ 
    no: 0, 
    title: '', 
    writer: '', 
    createDate: '' 
});