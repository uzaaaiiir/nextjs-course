import { connectDb, insertDocument } from "../../helpers/db-utils";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes("@")) {
            res.status(422).json({ message: "Invalid email address." });
            return;
        }

        let client;
        try {
            client = await connectDb();
        } catch (error) {
            res.status(500).json({ message: "Connecting to database failed." });
            return;
        }

        try {
            await insertDocument(client, "newsletter", { email: userEmail });
            client.close();
        } catch (error) {
            res.status(500).json({ message: "Inserting data failed." });
            return;
        }

        console.log(userEmail);
        res.status(201).json({ message: "Signed up!" });
    }
};

export default handler;
