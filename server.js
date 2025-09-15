// server.js - Backend server for the portfolio with /predict endpoint
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Vite dev server and potential other origins
  credentials: true
}));

// Rate limiting configuration for /predict endpoint
const predictRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute window
  max: 10, // Limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many prediction requests from this IP, please try again later.',
    retryAfter: '1 minute'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    res.status(429).json({
      error: 'Rate limit exceeded',
      message: 'Too many prediction requests from this IP, please try again later.',
      retryAfter: '1 minute'
    });
  }
});

// Apply rate limiting specifically to the /predict endpoint
app.use('/predict', predictRateLimit);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Predict endpoint with rate limiting
app.post('/predict', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    // Basic validation
    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'Message is required and must be a string'
      });
    }

    // Simulate LLM processing (replace with actual LLM integration later)
    const responses = [
      "I'm Aum's digital assistant. I can help you learn about his experience in AI/ML and full-stack development.",
      "Aum has extensive experience with React, Node.js, Python, and machine learning frameworks like TensorFlow and Scikit-learn.",
      "Feel free to ask about any of Aum's projects, from the Heart Disease Detector to the E-Commerce platform he built.",
      "Aum specializes in both frontend development with React and backend development with Node.js and Python.",
      "I can tell you about Aum's work experience, projects, or technical skills. What would you like to know?"
    ];
    
    // Simple response selection based on message content
    let response = responses[0]; // Default response
    
    if (message.toLowerCase().includes('project')) {
      response = responses[2];
    } else if (message.toLowerCase().includes('skill') || message.toLowerCase().includes('tech')) {
      response = responses[1];
    } else if (message.toLowerCase().includes('experience') || message.toLowerCase().includes('work')) {
      response = responses[3];
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    res.json({
      response: response,
      timestamp: new Date().toISOString(),
      processed: true
    });

  } catch (error) {
    console.error('Error in /predict endpoint:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while processing your request'
    });
  }
});

// Catch-all for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint does not exist'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: 'An unexpected error occurred'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`🤖 Predict endpoint: http://localhost:${PORT}/predict`);
  console.log(`🛡️  Rate limiting: 10 requests per minute per IP`);
});

export default app;