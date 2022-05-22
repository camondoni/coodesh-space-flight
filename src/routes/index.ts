import { Router } from "express";

import { articlesRouter } from "./articles.routes";

const router = Router();

router.use("/articles", articlesRouter);
router.get("/", (request, response) => {
    response.json({
        message: "Back-end Challenge 2021 🏅 - Space Flight News",
    });
});

export { router };
