// src/Pages/ChatPage.jsx
import React from 'react';
import { ToastContainer } from 'react-toastify';
import ChatBot from '../components/ChatBot';
import NebulaBackground from '../components/NebulaBackground';
import 'react-toastify/dist/ReactToastify.css';

export default function ChatPage() {
  return (
    <div className="min-h-screen relative">
      <NebulaBackground />
      
      <div className="relative z-10 pt-20 pb-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🤖 AI Assistant
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Chat with Aum's AI-powered assistant to learn about his projects, skills, and experience. 
              The assistant is protected by rate limiting to ensure fair usage.
            </p>
          </div>
          
          <ChatBot />
          
          <div className="mt-8 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg p-4 text-sm text-gray-300">
              <h3 className="font-semibold text-white mb-2">🛡️ Rate Limiting Protection</h3>
              <ul className="space-y-1 text-left">
                <li>• Maximum 10 requests per minute per IP address</li>
                <li>• Prevents abuse and ensures fair resource usage</li>
                <li>• Rate limit resets every minute</li>
                <li>• HTTP 429 status returned when limit exceeded</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer position="bottom-right" />
    </div>
  );
}