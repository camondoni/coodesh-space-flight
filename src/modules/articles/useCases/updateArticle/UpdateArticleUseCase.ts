import { injectable, inject } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
import { UpdateArticleError } from "./UpdateArticleError";
@injectable()
export class UpdateArticleUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository
    ) {}
    async execute(id: string, data: Object) {
        const article = await this.articlesRepository.updateArticle(id, data);
        if (!article) {
            throw new UpdateArticleError();
        }
        return article;
    }
}
