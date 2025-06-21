const { generateAiResponse } = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).json({ error: "Prompt query parameter is required." });
  }

  try {
    const response = await generateAiResponse(code);
    res.json({ response });
  } catch (error) {
    console.error("Error in getResponse controller:", error);
    res.status(500).json({ 
      error: "An error occurred while processing your request.",
      details: error.message 
    });
  }
};