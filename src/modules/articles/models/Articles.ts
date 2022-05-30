import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";
import { IArticles, IArticlesEvents, IArticlesLaunches } from "./IArticles";

const articlesLaunchesSchema = new Schema<IArticlesLaunches>({
    _id: { type: String },
    provider: { type: String },
});

const articlesEventsSchema = new Schema<IArticlesEvents>({
    _id: { type: String },
    provider: { type: String },
});

const articlesSchema = new Schema<IArticles>({
    _id: { type: String, default: uuid },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date },
    spaceArticleId: { type: String },
    featured: { type: Boolean },
    title: { type: String, required: true },
    url: { type: String },
    imageUrl: { type: String },
    newsSite: { type: String },
    summary: { type: String },
    publishedAt: { type: String },

    launches: [articlesLaunchesSchema],
    events: [articlesEventsSchema],
});

export const Articles = model("articles", articlesSchema);
