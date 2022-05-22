import { container } from "tsyringe";
import { ListArticlesUseCase } from "./ListArticlesUseCase";

export class ListArticlesController {
    async execute(request, response) {
        const { page = 0, limit = 0 } = request.query;
        const listArticles = container.resolve(ListArticlesUseCase);
        const articles = await listArticles.execute(
            parseInt(page),
            parseInt(limit)
        );
        return response.json(articles);
    }
}
