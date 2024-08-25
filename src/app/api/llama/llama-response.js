import LlamaAI from 'llama-ai';

const apiToken =process.env.LLAMA_API_KEY; // Store API keys in environment variables
const llamaAPI = new LlamaAI(apiToken);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { prompt } = req.body;
      const response = await llamaAPI.generateResponse({
        prompt: prompt,
        maxTokens: 100,
        temperature: 0.7,
      });

      res.status(200).json({ result: response.text });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Llama API response' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
