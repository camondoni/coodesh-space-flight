import { injectable, inject } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
@injectable()
export class ListArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository
    ) {}
    async execute(page: number, limit: number) {
        const article = await this.articlesRepository.listArticles(page, limit);
        return article;
    }
}
