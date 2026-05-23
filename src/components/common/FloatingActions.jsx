import { useState, useEffect, useRef } from 'react';
import { Calendar, MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookDemoChoice from './BookDemoChoice';

export default function FloatingActions() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Loka AI, your intelligent assistant for ERP LOKA. Ask me anything about our SAP services, experience, or how we can help your business!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to convert URLs in text to clickable links
  const renderMessageWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are Loka AI, an intelligent assistant for ERP LOKA, an SAP consulting company. Answer questions ONLY about ERP LOKA based on this information:

COMPANY: ERP LOKA - IT Consulting for SAP Business One

SERVICES:
- SAP Support & AMS (Incident Management, Ticket Handling, System Maintenance, User Assistance)
- SAP Implementation (SAP S/4 HANA, SAP Business One, Module Implementation, System Integration)
- SAP Optimization (Performance Tuning, Configuration Changes, Enhancement Implementation, System Upgrades)
- SAP Consulting (Business Process Analysis, Solution Architecture, Best Practice Implementation, Change Management)

EXPERTISE:
- 6+ years of ERP consulting & implementation
- 250+ man years of SAP S/4 HANA experience
- SAP VAR Partner status
- 100+ happy clients
- 20+ team members
- SAP modules: Procurement, Inventory, Finance, Sales, Production, HR

KEY ACHIEVEMENTS:
- India's first partner certified for SAP S/4 HANA on-premise deployment
- Vendor for world's largest FMCG company for SAP Services
- SAP qualified partner packaged solution for Consumer Packaged Goods Industry
- Strategic partner for SAP Digital Compliance Services & SAP e-Way bill Solution

CONTACT:
- Schedule meeting: https://calendly.com/ssakthitselvan7/erp_loka
- Email: careers@erploka.com (for career inquiries)

IMPORTANT RULES:
1. Keep responses SHORT (2-3 sentences max)
2. Use SIMPLE, clear language
3. If question is NOT about ERP LOKA, SAP services, or the company, respond: "I can only answer questions about ERP LOKA and our SAP services. For other inquiries, please contact us at https://calendly.com/ssakthitselvan7/erp_loka"
4. Do NOT make up information
5. Be professional and helpful`
            },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      const botMessage = data.choices[0]?.message?.content || 'Sorry, I couldn\'t process that. Please contact us at https://calendly.com/ssakthitselvan7/erp_loka';

      setMessages(prev => [...prev, { role: 'assistant', content: botMessage }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting. Please schedule a meeting with us: https://calendly.com/ssakthitselvan7/erp_loka'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Book Demo Button */}
        <motion.button
          onClick={() => setIsDemoModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          style={{ boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)' }}
          title="Book a Demo"
        >
          <Calendar size={24} strokeWidth={2.5} />
        </motion.button>

        {/* Chatbot Button with Label */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          style={{ boxShadow: '0 4px 20px rgba(14, 165, 233, 0.4)' }}
          title="Chat with Loka AI"
        >
          <span className="font-bold text-base whitespace-nowrap">
            Loka <span className="text-red-500">AI</span>
          </span>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            {isChatOpen ? <X size={20} strokeWidth={2.5} /> : <MessageCircle size={20} strokeWidth={2.5} />}
          </div>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-3 right-3 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 shadow-lg group"
              aria-label="Close chat"
            >
              <X size={16} className="group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
            </button>

            {/* Chat Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <MessageCircle size={20} />
                Loka AI
              </h3>
              <p className="text-sm text-emerald-50">Your intelligent SAP assistant</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl break-words ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-white border border-slate-200 text-slate-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed break-words overflow-wrap-anywhere">
                      {renderMessageWithLinks(msg.content)}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-1 px-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Demo Modal */}
      <BookDemoChoice isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}
