import { IArticles } from "../models/IArticles";
import { Articles } from "../models/Articles";
import { IArticlesRepository } from "./IArticlesRepository";

export class ArticlesRepository implements IArticlesRepository {
    async create(data: IArticles): Promise<IArticles> {
        return await Articles.create(data);
    }

    async listArticles(page: number, limit: number): Promise<Object> {
        return await Articles.find()
            .skip(page * limit)
            .limit(limit);
    }
    async getArticle(id: string): Promise<Object> {
        return await Articles.findById(id);
    }

    deleteArticle(id: string): void {
        Articles.findById(id).remove();
    }
}
