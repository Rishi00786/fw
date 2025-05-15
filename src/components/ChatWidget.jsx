import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import OpenAI from 'openai';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "👋 Hi there! I'm SoftSell's virtual assistant. How can I help you with selling your software licenses today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockResponses = {
    "how do i sell my license": "To sell your license with SoftSell, simply upload your license details through our portal, and we'll provide a valuation within 24 hours. Once you accept our offer, you'll receive payment within 3-5 business days.",
    "what licenses do you buy": "We purchase a wide range of software licenses including Microsoft Office, Adobe Creative Suite, AutoCAD, and many enterprise software licenses. You can select your license type in our 'Get a Quote' form.",
    "how much is my license worth": "License values vary based on software type, remaining subscription period, and current market demand. For a precise valuation, please submit your license details through our 'Get a Quote' form, and we'll respond within 24 hours.",
    "how long does payment take": "Once you accept our offer, you'll typically receive payment within 3-5 business days. We offer multiple payment methods including direct deposit, PayPal, and bank transfer.",
    "is this legal": "Yes, selling unused software licenses is completely legal when done properly. SoftSell ensures all transfers comply with the software's license agreement and applicable laws. We handle all the legal paperwork for you.",
    "what payment methods do you offer": "We offer multiple secure payment options including direct bank deposit, PayPal, wire transfer, and in some regions, cryptocurrency payments.",
    "default": "Thanks for reaching out! I don't have specific information about that yet, but our team would be happy to help. Please fill out the contact form above or ask another question."
  };

  const getMockResponse = (query) => {
    const normalizedQuery = query.toLowerCase().trim();
    for (const [key, response] of Object.entries(mockResponses)) {
      if (normalizedQuery.includes(key)) return response;
    }
    return mockResponses.default;
  };

  const getOpenAIResponse = async (userMessage) => {
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey) {
        console.warn('No OpenAI API key found.');
        return getMockResponse(userMessage);
      }

      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant for SoftSell, a company that helps businesses sell their unused software licenses.
              SoftSell works in 3 steps: Upload License -> Get Valuation -> Get Paid.
              SoftSell buys licenses for Microsoft Office, Adobe Creative Suite, AutoCAD, and many enterprise software. 
              Payment is issued within 3-5 business days and supports bank transfer, PayPal, and wire transfer methods.
              Keep your answers focused on selling software licenses. If asked about anything unrelated, guide the conversation back to SoftSell services.
              Be professional, concise, and helpful.
              Don't ask any questions at the end of your response.`
          },
          {
            role: "user",
            content: userMessage,
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      })

      console.log('OpenAI Response:', response);
      return response.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
    } catch (error) {
      console.error('OpenAI Error:', error);
      return getMockResponse(userMessage);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await getOpenAIResponse(userMessage.text);
      const aiResponse = { sender: 'ai', text: response };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
        console.error('Error fetching AI response:', error);
      setMessages(prev => [...prev, { sender: 'ai', text: "⚠️ I'm having trouble connecting. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question) => {
    const userMessage = { sender: 'user', text: question };
    const aiResponse = { sender: 'ai', text: getMockResponse(question) };
    setMessages(prev => [...prev, userMessage, aiResponse]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "What licenses do you buy?",
    "How much is my license worth?",
    "How long does payment take?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 sm:w-96 h-96 border border-gray-200">
          <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <h3 className="font-medium">SoftSell Assistant</h3>
              <span className="ml-2 bg-green-500 text-xs px-2 py-1 rounded">AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div key={index} className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg max-w-xs sm:max-w-sm ${message.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none max-w-xs sm:max-w-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />

            {messages.length <= 1 && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="bg-white border border-gray-300 hover:bg-gray-100 text-xs px-2 py-1 rounded-full"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 p-3 flex items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button onClick={handleSendMessage} className="ml-2 text-blue-600 hover:text-blue-800">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
