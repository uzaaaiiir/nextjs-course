import {
    connectDb,
    insertDocument,
    getAllDocuments,
} from "../../../helpers/db-utils";

const handler = async (req, res) => {
    const eventId = req.query.eventId;

    let client;
    try {
        client = connectDb();
    } catch (error) {
        res.status(500).json({ message: "Connection to database failed." });
    }

    if (req.method === "POST") {
        const { email, name, text } = req.body;

        if (
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            text.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid input." });
            client.close();
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId,
        };

        let result;
        try {
            result = await insertDocument(client, "comments", newComment);
            console.log(result);
            newComment._id = result.insertedId;

            res.status(201).json({
                message: "Added comment.",
                comment: newComment,
            });
        } catch (error) {
            res.status(500).json({ message: "Inserting comment failed." });
        }
    }

    if (req.method === "GET") {
        let documents;
        try {
            documents = await getAllDocuments(client, "comments", {
                _id: -1,
            });
            res.status(200).json({ comments: documents });
        } catch (error) {
            res.status(500).json({ message: "Finding all comments failed." });
        }
    }

    client.close();
};

export default handler;
