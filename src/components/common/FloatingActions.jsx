import { useState, useEffect, useRef } from 'react';
import { Calendar, X, Send, Sparkles, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookDemoChoice from './BookDemoChoice';

export default function FloatingActions() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm **Loka AI** — your SAP assistant. Ask me anything about our services, expertise, or how we can help your business.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderContent = (text) => {
    const boldReg = /\*\*(.+?)\*\*/g;
    const urlReg = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(/(https?:\/\/[^\s]+|\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (boldReg.test(part)) return <strong key={i} style={{ color: '#F5D76E' }}>{part.replace(/\*\*/g, '')}</strong>;
      if (urlReg.test(part)) return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity" style={{ color: '#D9B24C' }}>{part}</a>;
      return <span key={i}>{part}</span>;
    });
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}` },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are Loka AI, an intelligent assistant for ERP LOKA, an SAP consulting company. Answer ONLY about ERP LOKA based on this info:

COMPANY: ERP LOKA – IT Consulting for SAP Business One
SERVICES: SAP Support & AMS, SAP Implementation (Greenfield, Brownfield, Rollouts), SAP Optimisation (Performance Tuning, Config Changes, Upgrades), SAP Consulting (BPA, Architecture, Best Practices, Change Management)
EXPERTISE: 6+ years ERP consulting, 250+ man years SAP S/4 HANA, SAP VAR Partner, 100+ clients, 20+ team members
ACHIEVEMENTS: India's first partner certified for SAP S/4 HANA on-premise deployment, Vendor for world's largest FMCG company, SAP qualified partner packaged solution for CPG Industry
CONTACT: https://calendly.com/venkateshmech8960/30min | info@erploka.com

RULES: Keep responses concise (2-3 sentences). If off-topic, say: "I only answer questions about ERP LOKA and our SAP services. Reach us at https://calendly.com/venkateshmech8960/30min". Never invent info.`,
            },
            { role: 'user', content: userMessage },
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error?.message || 'API error');
      setMessages(prev => [...prev, { role: 'assistant', content: data?.choices?.[0]?.message?.content || 'Please contact us at https://calendly.com/venkateshmech8960/30min' }]);
    } catch (err) {
      const msg = err?.message?.includes('401') || err?.message?.includes('Unauthorized')
        ? 'API key is missing or invalid. Please contact us directly at https://calendly.com/venkateshmech8960/30min'
        : 'Something went wrong. Please try again or visit https://calendly.com/venkateshmech8960/30min';
      setMessages(prev => [...prev, { role: 'assistant', content: msg }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); }
  };

  const quickQuestions = [
    'What services do you offer?',
    'Are you SAP certified?',
    'Book a demo',
  ];

  return (
    <>
      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Book Demo */}
        <motion.button
          onClick={() => setIsDemoModalOpen(true)}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          title="Book a Demo"
          style={{ background: '#DC2626', boxShadow: '0 4px 20px rgba(220,38,38,0.45)' }}
        >
          <Calendar size={22} strokeWidth={2.5} style={{ color: '#000000' }} />
        </motion.button>

        {/* AI Chat toggle */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
          title="Chat with Loka AI"
          style={{
            background: '#DC2626',
            boxShadow: isChatOpen ? '0 4px 16px rgba(220,38,38,0.3)' : '0 0 24px rgba(220,38,38,0.4), 0 4px 16px rgba(0,0,0,0.5)',
          }}
        >
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X size={20} strokeWidth={2.5} style={{ color: '#000000' }} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}
                className="text-[14px] font-black leading-tight text-center"
                style={{ color: '#000000', fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.03em' }}
              >
                Loka<br />AI
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-28 right-6 z-40 flex flex-col rounded-2xl overflow-hidden"
            style={{
              width: '380px',
              maxWidth: 'calc(100vw - 2rem)',
              height: '540px',
              background: '#0D0D0D',
              border: '1px solid rgba(217,178,76,0.22)',
              boxShadow: '0 0 50px rgba(217,178,76,0.12), 0 24px 64px rgba(0,0,0,0.7)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 flex-shrink-0" style={{ background: '#111111', borderBottom: '1px solid rgba(217,178,76,0.15)' }}>
              {/* Avatar */}
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(217,178,76,0.2), rgba(217,178,76,0.08))', border: '1px solid rgba(217,178,76,0.35)' }}>
                <Bot size={17} style={{ color: '#D9B24C' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.04em' }}>
                    Loka <span style={{ color: '#D9B24C' }}>AI</span>
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
                <p className="text-[11px] truncate" style={{ color: '#666' }}>SAP Business Assistant</p>
              </div>
              {/* Close button inside header */}
              <button
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-200 hover:scale-105 group"
                style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)' }}
                aria-label="Close chat"
              >
                <X size={15} strokeWidth={2.5} style={{ color: '#f87171' }} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: '#090909', scrollbarWidth: 'thin', scrollbarColor: 'rgba(217,178,76,0.2) transparent' }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(217,178,76,0.1)', border: '1px solid rgba(217,178,76,0.25)' }}>
                      <Sparkles size={11} style={{ color: '#D9B24C' }} />
                    </div>
                  )}
                  <div
                    className="max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed break-words"
                    style={
                      msg.role === 'user'
                        ? { background: 'linear-gradient(135deg, #D9B24C, #E8C462)', color: '#0A0A0A', fontWeight: '500', borderBottomRightRadius: '4px' }
                        : { background: '#1A1A1A', color: '#E5E5E5', border: '1px solid rgba(217,178,76,0.12)', borderBottomLeftRadius: '4px' }
                    }
                  >
                    {renderContent(msg.content)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(217,178,76,0.1)', border: '1px solid rgba(217,178,76,0.25)' }}>
                    <Sparkles size={11} style={{ color: '#D9B24C' }} />
                  </div>
                  <div className="px-4 py-3 rounded-2xl" style={{ background: '#1A1A1A', border: '1px solid rgba(217,178,76,0.12)', borderBottomLeftRadius: '4px' }}>
                    <div className="flex gap-1.5 items-center h-4">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <div key={i} className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#D9B24C', animationDelay: `${delay}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2 flex-shrink-0" style={{ background: '#090909' }}>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={async () => {
                        if (isLoading) return;
                        setMessages(prev => [...prev, { role: 'user', content: q }]);
                        setIsLoading(true);
                        try {
                          const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}` },
                            body: JSON.stringify({
                              model: 'llama-3.3-70b-versatile',
                              messages: [
                                { role: 'system', content: `You are Loka AI for ERP LOKA SAP consulting. Keep answers to 2-3 sentences. Only answer about ERP LOKA services.` },
                                { role: 'user', content: q },
                              ],
                              temperature: 0.7, max_tokens: 150,
                            }),
                          });
                          const data = await res.json();
                          if (!res.ok) throw new Error(data?.error?.message || 'API error');
                          setMessages(prev => [...prev, { role: 'assistant', content: data?.choices?.[0]?.message?.content || 'Contact us at https://calendly.com/venkateshmech8960/30min' }]);
                        } catch (err) {
                          const msg = err?.message?.includes('401') || err?.message?.includes('Unauthorized')
                            ? 'API key is missing or invalid. Please contact us directly at https://calendly.com/venkateshmech8960/30min'
                            : 'Something went wrong. Please try again or visit https://calendly.com/venkateshmech8960/30min';
                          setMessages(prev => [...prev, { role: 'assistant', content: msg }]);
                        } finally {
                          setIsLoading(false);
                        }
                      }}
                      className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-[#D9B24C]/15"
                      style={{ border: '1px solid rgba(217,178,76,0.25)', color: '#D9B24C', background: 'rgba(217,178,76,0.05)' }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 flex-shrink-0" style={{ background: '#0D0D0D', borderTop: '1px solid rgba(217,178,76,0.12)' }}>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our SAP services…"
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                  style={{
                    background: '#161616',
                    border: '1px solid rgba(217,178,76,0.2)',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#D9B24C'; e.target.style.boxShadow = '0 0 0 2px rgba(217,178,76,0.12)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(217,178,76,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #D9B24C, #E8C462)', boxShadow: '0 2px 12px rgba(217,178,76,0.35)' }}
                >
                  <Send size={15} style={{ color: '#0A0A0A' }} strokeWidth={2.5} />
                </motion.button>
              </div>
              <p className="text-center text-[10px] mt-2" style={{ color: '#444' }}>Powered by Loka AI · Only answers about ERP LOKA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookDemoChoice isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}
