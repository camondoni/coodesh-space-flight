import { IArticles } from "../models/IArticles";

export interface IArticlesRepository {
    create: (data: IArticles) => Promise<IArticles>;
    listArticles: () => Promise<Object>;
}
