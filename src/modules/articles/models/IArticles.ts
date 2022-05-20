interface IArticles {
    _id?: string;
    updatedAt?: Date;
    createdAt?: Date;
    featured: boolean;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: IArticlesLaunches[];
    events: IArticlesEvents[];
}

interface IArticlesLaunches {
    _id?: string;
    provider: string;
}

interface IArticlesEvents {
    _id?: string;
    provider: string;
}

export { IArticles, IArticlesLaunches, IArticlesEvents };
