import { container } from "tsyringe";
import { ListArticlesUseCase } from "./ListArticlesUseCase";

export class ListArticlesController {
    async execute(request, response) {
        const listArticles = container.resolve(ListArticlesUseCase);
        const articles = await listArticles.execute();
        return response.json(articles);
    }
}
