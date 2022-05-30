import nodeSchedule from "node-schedule";
import { ArticlesRepository } from "../modules/articles/repositories/ArticlesRepository";
import { SynchronizeArticlesUseCase } from "../modules/articles/useCases/synchronizeArticles/SynchronizeArticlesUseCase";

export const scheduler = () => {
    nodeSchedule.scheduleJob("00 00 09 * * 0-6", () => {
        const articlesRepository = new ArticlesRepository();
        const sync = new SynchronizeArticlesUseCase(articlesRepository);
        sync.execute();
    });
};
