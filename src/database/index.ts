import mongoose, { Mongoose } from 'mongoose';
export const connect = async() : Promise<Mongoose> =>  await mongoose.connect(`mongodb://camondoni:Exi9064!!@localhost:27017`);

export const close = () : Promise<void> =>  mongoose.connection.close();
