export class News {
    
    constructor(
        public newsId: number,
        public title: string, // 标题
        public author: string,  // 作者
        public content: string, // 内容
        public creation: Date, // 日期
    ) { }
}
