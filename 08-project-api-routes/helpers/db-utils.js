import { MongoClient } from "mongodb";

export const connectDb = async () => {
    const client = await MongoClient.connect("mongodb://localhost:27017/");
    return client;
};

export const insertDocument = async (client, collection, document) => {
    const db = client.db("events");
    const result = await db.collection(collection).insertOne(document);
    return result;
};

export const getAllDocuments = async (client, collection, sort) => {
    const db = client.db("events");
    const documents = await db
        .collection(collection)
        .find()
        .sort(sort)
        .toArray();

    return documents;
};
