import { Router } from "express";
import { CreateArticleController } from "../modules/articles/useCases/createArticle/CreateArticleController";
import { ListArticlesController } from "../modules/articles/useCases/listArticles/ListArticlesController";
const articlesRouter = Router();

const createArticleController = new CreateArticleController();
const listArticlesController = new ListArticlesController();

articlesRouter.post("/", createArticleController.execute);
articlesRouter.get("/", listArticlesController.execute);

export { articlesRouter };
