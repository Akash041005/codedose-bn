import { getRandomQuestions } from '../lib/questions.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const count = parseInt(req.query.count) || 2;
    const questions = getRandomQuestions(count);
    
    res.status(200).json({
      success: true,
      questions
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
