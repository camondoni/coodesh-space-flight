import { Router } from "express";
import { CreateArticleController } from "../modules/articles/useCases/createArticle/CreateArticleController";
import { ListArticlesController } from "../modules/articles/useCases/listArticles/ListArticlesController";
import { GetArticleController } from "../modules/articles/useCases/getArticle/GetArticleController";
import { DeleteArticleController } from "../modules/articles/useCases/deleteArticle/DeleteArticleController";
const articlesRouter = Router();

const createArticleController = new CreateArticleController();
const listArticlesController = new ListArticlesController();
const getArticleController = new GetArticleController();
const deleteArticleController = new DeleteArticleController();

articlesRouter.post("/", createArticleController.execute);
articlesRouter.get("/:id", getArticleController.execute);
articlesRouter.get("/", listArticlesController.execute);
articlesRouter.delete("/", deleteArticleController.execute);

export { articlesRouter };
