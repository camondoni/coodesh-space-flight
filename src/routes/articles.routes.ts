import { Router } from "express";
import { CreateArticleController } from "../modules/articles/useCases/createArticle/CreateArticleController";
import { ListArticlesController } from "../modules/articles/useCases/listArticles/ListArticlesController";
import { GetArticleController } from "../modules/articles/useCases/getArticle/GetArticleController";
import { DeleteArticleController } from "../modules/articles/useCases/deleteArticle/DeleteArticleController";
import { UpdateArticleController } from "../modules/articles/useCases/updateArticle/UpdateArticleController";
import { SynchronizeArticlesController } from "../modules/articles/useCases/synchronizeArticles/SynchronizeArticlesController";
const articlesRouter = Router();

const createArticleController = new CreateArticleController();
const listArticlesController = new ListArticlesController();
const getArticleController = new GetArticleController();
const deleteArticleController = new DeleteArticleController();
const updateArticleController = new UpdateArticleController();
const synchronizeArticlesController = new SynchronizeArticlesController();

articlesRouter.post("/synchronize", synchronizeArticlesController.execute);
articlesRouter.post("/", createArticleController.execute);
articlesRouter.get("/:id", getArticleController.execute);
articlesRouter.get("/", listArticlesController.execute);
articlesRouter.delete("/:id", deleteArticleController.execute);
articlesRouter.put("/:id", updateArticleController.execute);

export { articlesRouter };
