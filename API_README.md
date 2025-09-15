# Digital Portfolio - Backend API

This backend server provides API endpoints for the digital portfolio, including a rate-limited `/predict` endpoint for the AI chat assistant.

## Features

### Rate Limiting Protection 🛡️

The `/predict` endpoint is protected by rate limiting to prevent abuse:

- **Rate Limit**: 10 requests per minute per IP address
- **Window**: 1 minute (60 seconds)
- **Response**: HTTP 429 status when limit exceeded
- **Headers**: Includes `RateLimit-*` headers for client tracking

### API Endpoints

#### POST `/predict`
AI chat endpoint with rate limiting protection.

**Request:**
```json
{
  "message": "Tell me about Aum's projects",
  "context": "portfolio-chat"
}
```

**Response (Success):**
```json
{
  "response": "I can tell you about Aum's projects...",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "processed": true
}
```

**Response (Rate Limited):**
```json
{
  "error": "Rate limit exceeded",
  "message": "Too many prediction requests from this IP, please try again later.",
  "retryAfter": "1 minute"
}
```

#### GET `/health`
Health check endpoint (no rate limiting).

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Setup and Usage

### Installation

```bash
npm install
```

### Running the Server

```bash
# Backend only
npm run server

# Full stack (backend + frontend)
npm run dev:full
```

The server runs on port 3001 by default.

### Testing Rate Limiting

Run the included test script to verify rate limiting:

```bash
node test-rate-limit.js
```

This will:
1. Test the health endpoint
2. Test a single predict request
3. Make 12 rapid requests to trigger rate limiting
4. Show which requests succeeded and which were rate limited

## Configuration

### Rate Limiting Settings

In `server.js`, you can modify the rate limiting configuration:

```javascript
const predictRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute window
  max: 10, // Limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many prediction requests from this IP, please try again later.',
    retryAfter: '1 minute'
  }
});
```

### Environment Variables

- `PORT`: Server port (default: 3001)

## Security Features

1. **CORS Protection**: Configured for specific origins
2. **Rate Limiting**: Prevents API abuse
3. **Input Validation**: Validates request data
4. **Error Handling**: Proper error responses
5. **Request Logging**: Server logs requests

## Frontend Integration

The chat component (`src/components/ChatBot.jsx`) integrates with the rate-limited API:

- Shows rate limit information to users
- Handles 429 responses gracefully
- Displays appropriate error messages
- Tracks remaining requests via headers

## Development

### Project Structure

```
/
├── server.js              # Main server file with rate limiting
├── test-rate-limit.js     # Rate limiting test script
├── src/
│   ├── components/
│   │   └── ChatBot.jsx    # Frontend chat component
│   └── Pages/
│       └── ChatPage.jsx   # Chat page with rate limit info
└── package.json           # Dependencies and scripts
```

### Dependencies

**Backend:**
- `express`: Web framework
- `express-rate-limit`: Rate limiting middleware
- `cors`: CORS handling

**Testing:**
- `node-fetch`: HTTP client for testing

### Rate Limiting Implementation

The rate limiting is implemented using the `express-rate-limit` middleware:

1. **Per-IP Tracking**: Each IP address has its own rate limit counter
2. **Sliding Window**: Uses a 1-minute sliding window
3. **Configurable Responses**: Custom error messages and status codes
4. **Header Information**: Provides remaining requests info to clients
5. **Endpoint Specific**: Only applies to `/predict`, not other endpoints

This ensures the API remains responsive while preventing abuse of the AI prediction resources.