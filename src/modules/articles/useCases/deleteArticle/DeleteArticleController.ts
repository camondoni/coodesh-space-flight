import { container } from "tsyringe";
import { DeleteArticleUseCase } from "./DeleteArticleUseCase";

export class DeleteArticleController {
    async execute(request, response) {
        const { id } = request.params;
        const deleteArticle = container.resolve(DeleteArticleUseCase);
        await deleteArticle.execute(id);
        return response.status(204).send();
    }
}
