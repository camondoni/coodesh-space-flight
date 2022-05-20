import { IArticles } from "../../models/IArticles";
import { injectable, inject } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
@injectable()
export class CreateArticleUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository
    ) {}
    async execute(data: IArticles) {
        const article = await this.articlesRepository.create(data);
        return article;
    }
}
