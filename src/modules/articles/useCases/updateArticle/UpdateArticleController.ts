import { container } from "tsyringe";
import { UpdateArticleUseCase } from "./UpdateArticleUseCase";

export class UpdateArticleController {
    async execute(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateArticles = container.resolve(UpdateArticleUseCase);
        const article = await updateArticles.execute(id, data);
        return response.json(article);
    }
}
