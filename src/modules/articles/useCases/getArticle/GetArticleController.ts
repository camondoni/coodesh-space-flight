import { container } from "tsyringe";
import { GetArticleUseCase } from "./GetArticleUseCase";

export class GetArticleController {
    async execute(request, response) {
        const { id } = request.params;
        const getArticle = container.resolve(GetArticleUseCase);
        const article = await getArticle.execute(id);
        return response.json(article);
    }
}
