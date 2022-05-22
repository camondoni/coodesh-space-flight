import { container } from "tsyringe";
import { CreateArticleUseCase } from "./CreateArticleUseCase";

export class CreateArticleController {
    async execute(request, response) {
        const data = request.body;
        const createArticle = container.resolve(CreateArticleUseCase);
        const article = await createArticle.execute(data);
        return response.status(201).json(article);
    }
}
