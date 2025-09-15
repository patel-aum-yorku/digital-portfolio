// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I am Aum's digital assistant. Ask me about his projects, skills, or experience!",
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          context: 'portfolio-chat'
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Add bot response
        const botMessage = {
          type: 'bot',
          content: data.response,
          timestamp: data.timestamp
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        // Handle rate limiting or other errors
        if (response.status === 429) {
          toast.error('🛡️ Rate limit exceeded! Please wait a moment before sending another message.');
          const errorMessage = {
            type: 'bot',
            content: 'I am receiving too many requests right now. Please wait a moment before asking another question.',
            timestamp: new Date().toISOString(),
            isError: true
          };
          setMessages(prev => [...prev, errorMessage]);
        } else {
          toast.error('❌ Failed to get response');
          console.error('API Error:', data);
        }
      }
    } catch (error) {
      toast.error('❌ Connection error. Make sure the server is running on port 3001.');
      console.error('Connection error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">💬 Chat with Aum AI Assistant</h3>
        <p className="text-sm text-gray-300">
          Rate limited to 10 messages per minute per IP address
        </p>
      </div>
      
      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto mb-4 space-y-3 p-4 bg-black/20 rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : message.isError
                  ? 'bg-red-500/20 text-red-200 border border-red-500/30'
                  : 'bg-gray-700 text-white'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-60 mt-1">
                {new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              <p className="text-sm">Thinking...</p>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask about Aum projects, skills, or experience..."
          disabled={isLoading}
          className="flex-1 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md placeholder-gray-400 text-white outline-yellow-500 focus:outline-2 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !inputMessage.trim()}
          className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
      
      <div className="mt-2 text-xs text-gray-400 text-center">
        🛡️ Protected by rate limiting: 10 requests per minute
      </div>
    </div>
  );
}