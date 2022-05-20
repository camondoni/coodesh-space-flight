import { IArticles } from "../models/IArticles";
import { Articles } from "../models/Articles";
import { IArticlesRepository } from "./IArticlesRepository";

export class ArticlesRepository implements IArticlesRepository {
    async create(data: IArticles): Promise<IArticles> {
        return await Articles.create(data);
    }

    async listArticles(): Promise<Object> {
        return await Articles.find();
    }
}
