// src/Pages/ChatbotPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import NebulaBackground from '../components/NebulaBackground';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { FaRobot, FaUser, FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm Aum's personal assistant. Feel free to ask me anything about his work, projects, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      // Send the user queries and full chat history to the vercel serverless function
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }]
        })
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to the network right now. Please check out the Contact page if you need to reach Aum directly." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <NebulaBackground />
      
      <section className="pt-32 pb-8 px-4 flex-1 flex flex-col items-center">
        <SectionHeading className="mb-6 text-glow" id="chatbot">My Assistant</SectionHeading>
        <p className="text-gray-300 text-center mb-8 max-w-xl">
          Ask me anything about my software engineering journey!
        </p>

        <div className="w-full max-w-3xl flex-1 flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative mb-10 h-[60vh]">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-gradient-to-tr from-amber-400 to-amber-600 text-black' : 'bg-gradient-to-tr from-gray-700 to-gray-900 border border-white/10 text-amber-400'}`}>
                  {msg.role === 'user' ? <FaUser /> : <FaRobot />}
                </div>
                <div className={`max-w-[75%] px-5 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-amber-500/20 text-white rounded-tr-sm border border-amber-500/30' : 'bg-black/40 text-gray-200 rounded-tl-sm border border-white/10'}`}>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
                </div>
              </motion.div>
            ))}
            
            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-gray-700 to-gray-900 border border-white/10 text-amber-400">
                  <FaRobot />
                </div>
                <div className="px-5 py-3 rounded-2xl bg-black/40 text-gray-400 rounded-tl-sm border border-white/10 flex items-center gap-2">
                  <FaSpinner className="animate-spin" /> Thinking...
                </div>
              </motion.div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Input Form */}
          <div className="p-4 bg-black/30 border-t border-white/10">
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about Aum..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:hover:bg-amber-500 text-black px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center shadow-[0_0_15px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.6)]"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
