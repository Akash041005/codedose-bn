import { generateSolution } from '../lib/gemini.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { questionTitle, language } = req.body;

    if (!questionTitle || !language) {
      return res.status(400).json({ error: 'questionTitle and language are required' });
    }

    const result = await generateSolution(questionTitle, language);

    if (!result.success) {
      return res.status(500).json({ error: result.error });
    }

    res.status(200).json({
      success: true,
      solution: result.solution,
      source: result.source
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate solution' });
  }
}
