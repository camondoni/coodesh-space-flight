import { AppError } from "../../../../shared/errors/AppError";

export class GetArticleError extends AppError {
    constructor() {
        super("Article not found", 404);
    }
}
