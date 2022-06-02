import mongoose, { Mongoose } from "mongoose";

const connectString = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}`;
console.log(connectString);
export const connect = async (): Promise<Mongoose> =>
    await mongoose.connect(connectString);

export const close = (): Promise<void> => mongoose.connection.close();
