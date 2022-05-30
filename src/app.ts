import "reflect-metadata";
import "express-async-errors";

import express from "express";
import swaggerUi from "swagger-ui-express";
import "./shared/container";
import { router } from "./routes";
import { connect } from "./config/database";
import { scheduler } from "./config/schedulers";
import { AppError } from "./shared/errors/AppError";
import swaggerFile from "./swagger.json";
import dotenv from "dotenv";

const app = express();
//app.use(cors());
app.use(express.json());

app.use("/api/v1", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
    (
        err: Error,
        request: express.Request,
        response: express.Response,
        _next: express.NextFunction
    ) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message} `,
        });
    }
);

dotenv.config({
    path: __dirname + "/.env",
});

scheduler();
connect();

export { app };
