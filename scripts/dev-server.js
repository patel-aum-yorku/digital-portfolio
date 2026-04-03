// Local dev server to emulate Vercel serverless functions
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Dynamically import the chat handler (Vercel serverless function)
app.post('/api/chat', async (req, res) => {
  try {
    const { default: handler } = await import('../api/chat.js');
    await handler(req, res);
  } catch (err) {
    console.error('Dev server error:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Local API dev server running at http://localhost:${PORT}`);
});
