import { injectable, inject } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
import axios from "axios";
import { mailer } from "../../../../config/email";
@injectable()
export class SynchronizeArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository
    ) {}
    async execute() {
        axios
            .get("https://api.spaceflightnewsapi.net/v3/articles")
            .then((response) => {
                response.data.forEach(async (article) => {
                    const spaceArticle =
                        await this.articlesRepository.findSpaceArticle(
                            article.id
                        );
                    if (spaceArticle) {
                        await this.articlesRepository.updateArticleBySpaceId(
                            article.id,
                            article
                        );
                    } else {
                        article.spaceArticleId = article.id;
                        await this.articlesRepository.create(article);
                    }
                });
            })
            .catch((error) => {
                const mailOptions = {
                    from: process.env.EMAIL_USERNAME,
                    to: process.env.EMAIL_USERNAME,
                    subject:
                        "Hey amiguinho, houve uma falha na sincronização dos dados",
                    text: error.message,
                };
                mailer.sendMail(mailOptions, () =>
                    console.log("email enviado com sucesso !")
                );
            });
    }
}
