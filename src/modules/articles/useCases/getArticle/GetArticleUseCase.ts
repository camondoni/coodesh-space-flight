import { injectable, inject } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
import { GetArticleError } from "./GetArticleError";
@injectable()
export class GetArticleUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository
    ) {}
    async execute(id: string) {
        const article = await this.articlesRepository.getArticle(id);

        if (!article) {
            throw new GetArticleError();
        }
        return article;
    }
}
