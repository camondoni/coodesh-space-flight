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
        return articles;
    }

    async listArticles(page: number, limit: number): Promise<IArticles> {
        if (limit > 0) {
            return this.articles.slice((page - 1) * limit, page * limit);
        } else {
            return this.articles;
        }
    }

    async getArticle(id: string): Promise<IArticles> {
        return await this.articles.find((article) => article._id === id);
    }

    deleteArticle(id: string): void {
        const articleIndex = this.articles.indexOf(
            (article) => article._id === id
        );
        this.articles.splice(articleIndex, 1);
    }

    async updateArticle(
        id: string,
        data: Object
    ): Promise<IArticles | undefined> {
        const articleIndex = this.articles.findIndex(
            (article) => article._id === id
        );

        if (articleIndex < 0) {
            return undefined;
        }

        let article = {
            ...this.articles[articleIndex],
            ...data,
        };

        article.updatedAt = new Date();
        this.articles[articleIndex] = article;
        return this.articles[articleIndex];
    }

    findSpaceArticle: (id: string) => Promise<IArticles>;
    updateArticleBySpaceId: (id: string, data: Object) => Promise<IArticles>;
}
