import { IArticles } from "../models/IArticles";

export interface IArticlesRepository {
    create: (data: IArticles) => Promise<IArticles>;
    listArticles: (page: number, limit: number) => Promise<Object | undefined>;
    getArticle: (id: string) => Promise<Object | undefined>;
    deleteArticle: (id: string) => void;
}
