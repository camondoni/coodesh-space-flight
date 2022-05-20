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
    featured: { type: Boolean, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    newsSite: { type: String, required: true },
    summary: { type: String, required: true },
    publishedAt: { type: String, required: true },
    launches: [articlesLaunchesSchema],
    events: [articlesEventsSchema],
});

export const Articles = model("articles", articlesSchema);
