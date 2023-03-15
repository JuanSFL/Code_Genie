const { Router } = require("express");
const axios = require("axios");
const route = Router();
require("dotenv").config();
const API_KEY = process.env.OPENAI_API_KEY;
console.log(API_KEY);
const config = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`,
  },
};

route.get("/", async (req, res) => {
  const prompt = "Hello, OpenAI!";
  const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

  const data = {
    prompt,
    max_tokens: 5,
  };

  try {
    const response = await axios.post(apiUrl, data, config);
    if (!response.data)
      res.status(400).send("bad request made to /api/openai ");
    const completion = response.data.choices[0].text;
    res.status(200).json({ prompt, completion });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

route.post("/completions", async (req, res) => {
  console.log("post open ai completions", req.body);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `Q: ${req.body.question}\nA:`,
        max_tokens: 100,
        n: 1,
        stop: ["\n"],
      },
      config
    );
    res.status(200).json({ response: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

route.post("/search", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/search",
      {
        documents: [],
        query: req.body.question,
        search_model: "ada",
        model: "davinci",
        max_rerank: 10,
        return_metadata: true,
      },
      config
    );
    res.status(200).json({ response: response.data.data[0].answer });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

module.exports = route;
