import { injectable, inject } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
@injectable()
export class DeleteArticleUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository
    ) {}
    execute(id: string) {
        const article = this.articlesRepository.deleteArticle(id);
        return article;
    }
}
