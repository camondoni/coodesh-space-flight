import { IArticles } from "../../models/IArticles";
import { InMemoryArticlesRepository } from "../../repositories/in-memory/InMemoryArticlesRepository";
import { ListArticlesUseCase } from "./ListArticlesUseCase";

let inMemoryArticlesRepository: InMemoryArticlesRepository;
let listArticlesUseCase: ListArticlesUseCase;
describe("ListArticleUseCase", () => {
    beforeEach(() => {
        inMemoryArticlesRepository = new InMemoryArticlesRepository();
        listArticlesUseCase = new ListArticlesUseCase(
            inMemoryArticlesRepository
        );
    });
    it("Should list Articles", async () => {
        const article = await inMemoryArticlesRepository.create({
            title: "NASA plans early June rollout of SLS for next countdown test",
            url: "https://spacenews.com/nasa-plans-early-june-rollout-of-sls-for-next-countdown-test/",
            imageUrl:
                "https://spacenews.com/wp-content/uploads/2022/05/sls-rollback.jpg",
            newsSite: "SpaceNews",
            summary:
                "NASA is gearing up to perform another practice countdown of the Space Launch System in mid-June as it completes repairs to the vehicle from previous tests.",
            publishedAt: "2022-05-21T23:07:00.000Z",
            updatedAt: new Date(),
            featured: false,
            launches: [
                {
                    provider: "Launch Library 2",
                },
            ],
            events: [
                {
                    provider: "teste123",
                },
            ],
        });

        const articles = await listArticlesUseCase.execute(0, 0);
        expect(articles).toEqual([article]);
    });

    it("Should list Paginated Articles", async () => {
        await inMemoryArticlesRepository.create({
            title: "NASA plans early June rollout of SLS for next countdown test",
            url: "https://spacenews.com/nasa-plans-early-june-rollout-of-sls-for-next-countdown-test/",
            imageUrl:
                "https://spacenews.com/wp-content/uploads/2022/05/sls-rollback.jpg",
            newsSite: "SpaceNews",
            summary:
                "NASA is gearing up to perform another practice countdown of the Space Launch System in mid-June as it completes repairs to the vehicle from previous tests.",
            publishedAt: "2022-05-21T23:07:00.000Z",
            updatedAt: new Date(),
            featured: false,
            launches: [
                {
                    provider: "Launch Library 2",
                },
            ],
            events: [
                {
                    provider: "teste123",
                },
            ],
        });

        await inMemoryArticlesRepository.create({
            title: "NASA plans early June rollout of SLS for next countdown test2",
            url: "https://spacenews.com/nasa-plans-early-june-rollout-of-sls-for-next-countdown-test2/",
            imageUrl:
                "https://spacenews.com/wp-content/uploads/2022/05/sls-rollback2.jpg",
            newsSite: "SpaceNews2",
            summary:
                "NASA is gearing up to perform another practice countdown of the Space Launch System in mid-June as it completes repairs to the vehicle from previous tests.2",
            publishedAt: "2022-05-21T23:07:00.000Z2",
            updatedAt: new Date(),
            featured: false,
            launches: [
                {
                    provider: "Launch Library 2",
                },
            ],
            events: [
                {
                    provider: "teste123",
                },
            ],
        });

        expect(await listArticlesUseCase.execute(1, 1)).toHaveLength(1);
        expect(await listArticlesUseCase.execute(1, 2)).toHaveLength(2);
    });
});
