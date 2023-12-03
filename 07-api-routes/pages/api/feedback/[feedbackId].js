import { buildFeedbackPath, extractFeedback } from ".";

const handler = (req, res) => {
    const feedbackId = req.query.feedbackId;

    const feedbackData = extractFeedback(buildFeedbackPath());

    const selectedFeedback = feedbackData.find(
        (feedback) => feedback.id === feedbackId
    );

    res.status(200).json({ feedback: selectedFeedback });
};

export default handler;
