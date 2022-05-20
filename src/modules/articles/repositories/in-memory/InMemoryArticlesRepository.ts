import { IArticles } from "../../models/IArticles";
import { IArticlesRepository } from "../IArticlesRepository";
import { v4 as uuid } from "uuid";
export class InMemoryArticlesRepository implements IArticlesRepository {
    private articles: any = [];

    async create(data: IArticles): Promise<IArticles> {
        const articles = data;
        Object.assign(articles, {
            _id: uuid(),
            createdAt: new Date(),
        });
        this.articles.push(articles);
        return data;
    }

    async listArticles(): Promise<Object> {
        return this.articles;
    }
}
