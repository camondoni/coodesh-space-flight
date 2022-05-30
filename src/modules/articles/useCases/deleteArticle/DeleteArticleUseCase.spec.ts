import { IArticles } from "../../models/IArticles";
import { InMemoryArticlesRepository } from "../../repositories/in-memory/InMemoryArticlesRepository";
import { DeleteArticleUseCase } from "./DeleteArticleUseCase";

let inMemoryArticlesRepository: InMemoryArticlesRepository;
let deleteArticleUseCase: DeleteArticleUseCase;
describe("CreateArticleUseCase", () => {
    beforeEach(() => {
        inMemoryArticlesRepository = new InMemoryArticlesRepository();
        deleteArticleUseCase = new DeleteArticleUseCase(
            inMemoryArticlesRepository
        );
    });
    it("Should delete Article", async () => {
        const createArticle = await inMemoryArticlesRepository.create({
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

        const deleteArticle = await deleteArticleUseCase.execute(
            createArticle._id
        );
        expect(deleteArticle).toBeUndefined();
    });
});
