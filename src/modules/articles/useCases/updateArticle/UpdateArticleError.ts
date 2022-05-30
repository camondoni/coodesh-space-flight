import { AppError } from "../../../../shared/errors/AppError";

export class UpdateArticleError extends AppError {
    constructor() {
        super("Article not found", 404);
    }
}
