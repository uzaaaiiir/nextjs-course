import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
    let client;

    client = await MongoClient.connect("mongodb://localhost:27017");

    return client;
};
