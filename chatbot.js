// /api/chatbot.js
export default async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const userMessage = req.body.message;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
