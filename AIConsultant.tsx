import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Sparkles, Loader2 } from 'lucide-react';
import { getBeautyAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'مرحباً بك في رغدة! 🌸 أنا مستشارتك الذكية للجمال. كيف يمكنني مساعدتك اليوم في اختيار منتجات العناية بالبشرة أو المكياج المناسب لك؟',
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Transform simple history to Gemini format
    const historyForGemini = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const advice = await getBeautyAdvice(userMsg.text, historyForGemini);

    const aiMsg: ChatMessage = {
      role: 'model',
      text: advice,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        id="ai-consultant-trigger"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 bg-brand-600 hover:bg-brand-700 text-white hover:scale-110 ${isOpen ? 'hidden' : 'flex items-center gap-2'}`}
      >
        <Sparkles size={24} />
        <span className="font-bold hidden md:inline">مستشارة الجمال</span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-brand-100 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-brand-200" />
              <h3 className="font-bold text-lg">مستشارة رغدة الذكية</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-brand-700 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-brand-50 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-200 text-brand-900 rounded-br-none'
                      : 'bg-white text-brand-800 border border-brand-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-brand-100 shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-brand-500" />
                  <span className="text-xs text-brand-500">جاري الكتابة...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-brand-100">
            <div className="flex items-center gap-2 bg-brand-50 px-4 py-2 rounded-full border border-brand-200 focus-within:ring-2 focus-within:ring-brand-300 focus-within:border-brand-300 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="اسألي عن منتج أو مشكلة في بشرتك..."
                className="flex-1 bg-transparent border-none focus:outline-none text-brand-900 placeholder-brand-400 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="text-brand-600 hover:text-brand-800 disabled:opacity-50 disabled:cursor-not-allowed p-1"
              >
                <Send size={20} className={inputValue.trim() ? 'fill-current' : ''} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};