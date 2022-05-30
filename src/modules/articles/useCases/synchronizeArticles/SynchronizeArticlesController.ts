import { container } from "tsyringe";
import { SynchronizeArticlesUseCase } from "./SynchronizeArticlesUseCase";

export class SynchronizeArticlesController {
    async execute(request, response) {
        const synchronizeArticles = container.resolve(
            SynchronizeArticlesUseCase
        );
        const article = await synchronizeArticles.execute();
        return response.json(article);
    }
}
