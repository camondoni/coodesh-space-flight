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

    async deleteArticle(id: string) {
        await Articles.findByIdAndDelete(id);
    }

    async updateArticle(id: string, data): Promise<IArticles> {
        data.updatedAt = new Date();
        return await Articles.findOneAndUpdate({ _id: id }, data);
    }

    async findSpaceArticle(id: string): Promise<IArticles> {
        return await Articles.findOne({ spaceArticleId: id });
    }

    async updateArticleBySpaceId(id: string, data): Promise<IArticles> {
        data.updatedAt = new Date();
        return await Articles.findOneAndUpdate({ spaceArticleId: id }, data);
    }
}
