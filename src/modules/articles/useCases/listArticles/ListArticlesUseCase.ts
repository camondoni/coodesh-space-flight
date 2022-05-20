import { injectable, inject } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
@injectable()
export class ListArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository
    ) {}
    async execute() {
        const article = await this.articlesRepository.listArticles();
        return article;
    }
}
