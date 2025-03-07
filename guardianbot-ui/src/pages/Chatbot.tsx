import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertTriangle, User, LogOut, ChevronDown, X, Shield, Code } from 'lucide-react';

const MultiUserMonitoringSystem = () => {
  // User data with actual conversations from the CSV
  const userProfiles = [
    {
      id: 2,
      name: 'Alex',
      avatar: '/api/placeholder/40/40',
      conversation: [
        {
          id: 'msg-123',
          sender: 'user',
          content: "Write an introduction paragraph for an essay about the symbolism of light and darkness in Romeo and Juliet.",
          timestamp: '2024-01-26T10:25:00Z'
        },
        {
          id: 'msg-124',
          sender: 'ai',
          content: "Shakespeare masterfully employs the contrasting motifs of light and darkness in Romeo and Juliet, illuminating the play's central themes of love, fate, and conflict. The ethereal glow of affection clashes violently with the oppressive shadows of hatred and death, creating a dramatic tapestry where opposing forces perpetually vie for dominance, ultimately shaping the tragic destinies of the titular lovers.",
          timestamp: '2024-01-26T10:30:00Z',
          flagged: true,
          flagReason: "Potential plagiarism: Providing essay content."
        },
        {
          id: 'msg-125',
          sender: 'user',
          content: "Can you write the next paragraph, talking about how Juliet is associated with light?",
          timestamp: '2024-01-26T10:35:00Z'
        },
        {
          id: 'msg-126',
          sender: 'ai',
          content: "Juliet Capulet is consistently portrayed as a figure of radiant light, embodying innocence, beauty, and hope. Romeo frequently compares her to the sun, the stars, and other celestial bodies, emphasizing her dazzling presence that banishes the darkness surrounding him. Her inherent luminosity symbolizes the purity and transformative power of love, offering a fleeting respite from the pervasive gloom of the feud between their families.",
          timestamp: '2024-01-26T10:40:00Z',
          flagged: true,
          flagReason: "Potential plagiarism: Providing essay content."
        },
        {
          id: 'msg-127',
          sender: 'user',
          content: "Now write a paragraph about Romeo and darkness.",
          timestamp: '2024-01-26T10:45:00Z'
        },
        {
          id: 'msg-128',
          sender: 'ai',
          content: "In stark contrast, Romeo often finds himself enveloped in a metaphorical darkness, representing his despair, impulsivity, and ultimately, his tragic fate. His banishment casts a long shadow over his life, severing him from Juliet's light and plunging him into a world of isolation and grief. This association with darkness foreshadows his ultimate demise and underscores the destructive consequences of the feud that haunts his existence.",
          timestamp: '2024-01-26T10:50:00Z',
          flagged: true,
          flagReason: "Potential plagiarism: Providing essay content."
        }
      ]
    },
    {
      id: 4,
      name: 'Ethan',
      avatar: '/api/placeholder/40/40',
      conversation: [
        {
          id: 'msg-123',
          sender: 'user',
          content: "Can you give me the formula to calculate the potential energy of an object?",
          timestamp: '2024-01-25T14:15:00Z'
        },
        {
          id: 'msg-456',
          sender: 'ai',
          content: "Certainly. The potential energy (PE) of an object can be calculated using the formula: PE = mgh, where 'm' represents the mass of the object, 'g' is the acceleration due to gravity (approximately 9.8 m/s²), and 'h' is the height of the object above the reference point.",
          timestamp: '2024-01-25T14:15:30Z'
        },
        {
          id: 'msg-789',
          sender: 'user',
          content: "Okay, so if an object has a mass of 5kg and is 10 meters high, what's the potential energy? Please show me each step.",
          timestamp: '2024-01-25T14:16:00Z'
        },
        {
          id: 'msg-012',
          sender: 'ai',
          content: "Absolutely! Here's how to calculate the potential energy step-by-step:\n\n1. Identify the values: m (mass) = 5 kg, g (acceleration due to gravity) = 9.8 m/s², h (height) = 10 m.\n2. Apply the formula: PE = mgh.\n3. Substitute the values: PE = (5 kg) * (9.8 m/s²) * (10 m).\n4. Calculate: PE = 490 Joules. Therefore, the potential energy of the object is 490 Joules.",
          timestamp: '2024-01-25T14:16:30Z',
          flagged: true,
          flagReason: "Providing complete solution to physics problem."
        },
        {
          id: 'msg-345',
          sender: 'user',
          content: "Can you write out that whole answer in one sentence?",
          timestamp: '2024-01-25T14:17:00Z'
        },
        {
          id: 'msg-678',
          sender: 'ai',
          content: "With a mass of 5kg at a height of 10 meters, an object has a potential energy of 490 Joules, calculated using the formula PE = mgh.",
          timestamp: '2024-01-25T14:17:30Z',
          flagged: true,
          flagReason: "Providing condensed solution to physics problem."
        }
      ]
    },
    {
      id: 3,
      name: 'Mia',
      avatar: '/api/placeholder/40/40',
      conversation: [
        {
          id: 'msg-123',
          sender: 'user',
          content: "What was the most important thing Abraham Lincoln ever said?",
          timestamp: '2024-01-26T14:00:00Z'
        },
        {
          id: 'msg-124',
          sender: 'ai',
          content: "Abraham Lincoln delivered many impactful speeches, but arguably one of his most famous and quoted lines is from the Gettysburg Address: '...that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.'",
          timestamp: '2024-01-26T14:01:00Z'
        },
        {
          id: 'msg-125',
          sender: 'user',
          content: "Write an essay around that quote, about why it's important.",
          timestamp: '2024-01-26T14:05:00Z'
        },
        {
          id: 'msg-126',
          sender: 'ai',
          content: "Abraham Lincoln's words at Gettysburg, \"...that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth,\" resonate powerfully even today. Delivered amidst the carnage of the Civil War, this brief but profound statement encapsulates the core ideals of American democracy and the sacrifices necessary to preserve them. The phrase \"government of the people, by the people, for the people\" elegantly defines the essence of a republic, where sovereignty resides in the citizenry, power is exercised through representative institutions, and the ultimate purpose of governance is the welfare of the populace. Lincoln's vision of a \"new birth of freedom\" speaks to the transformative potential of the conflict, suggesting that the nation could emerge from the crucible of war not only reunited but also fundamentally reformed, with a renewed commitment to equality and justice for all. The Gettysburg Address, and especially this iconic line, serves as a timeless reminder of the principles upon which the United States was founded and the ongoing struggle to live up to its ideals.",
          timestamp: '2024-01-26T14:10:00Z',
          flagged: true,
          flagReason: "Providing a full essay response to the student's request. High risk of plagiarism if submitted as is."
        },
        {
          id: 'msg-127',
          sender: 'user',
          content: "Can you put that into bullet points? Like, the main points of the essay?",
          timestamp: '2024-01-26T14:15:00Z'
        },
        {
          id: 'msg-128',
          sender: 'ai',
          content: "Here are the main points of the essay in bullet form:\n* Lincoln's Gettysburg Address line is famous and impactful.\n* It defines American democracy: government of, by, and for the people.\n* \"New birth of freedom\" refers to the Civil War's potential to transform the nation.\n* The quote is a reminder of American ideals and the struggle to achieve them.",
          timestamp: '2024-01-26T14:20:00Z',
          flagged: true,
          flagReason: "Providing bullet points summarizing the essay, increasing the risk of plagiarism."
        }
      ]
    },
    {
      id: 9,
      name: 'Lorraine',
      avatar: '/api/placeholder/40/40',
      conversation: []
    }
  ];

  // State
  const [activeUser, setActiveUser] = useState(userProfiles[0]);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAPIDetails, setShowAPIDetails] = useState(false);
  const [apiCalls, setApiCalls] = useState([]);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [sessionId] = useState(`session-${Date.now()}`);
  const [showDbPanel, setShowDbPanel] = useState(false);

  const messagesEndRef = useRef(null);

  // Load user's conversation when active user changes
  useEffect(() => {
    setMessages(activeUser.conversation || []);
    // Clear any pending API calls display for the new user
    setApiCalls([]);
  }, [activeUser]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showAPIDetails]);

  // Format timestamp
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Create user message
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      content: inputValue,
      timestamp: new Date().toISOString()
    };

    // Add message to conversation
    setMessages(prev => [...prev, userMessage]);
    
    // Track API call for monitoring
          const newApiCall = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      endpoint: 'https://api.guardianbot.edu/v1/chat',
      request: {
        user_id: activeUser.id,
        user_name: activeUser.name,
        message: inputValue,
        conversation_history: [...messages.map(m => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.content
        })), {
          role: 'user',
          content: inputValue
        }]
      }
    };
    
    setApiCalls(prev => [...prev, newApiCall]);
    setInputValue('');
    setIsTyping(true);

    // Simulate API flagging check
    const containsFlagWords = /write|essay|solve|homework|answer|complete/i.test(inputValue);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      // Generate API response
      const flagged = containsFlagWords;
      const flagReason = flagged ? "Potential academic integrity concern: requesting content for assignment" : null;
      
      let responseContent = "";
      if (inputValue.toLowerCase().includes('hi') || inputValue.toLowerCase().includes('hello')) {
        responseContent = `Hello ${activeUser.name}! How can I help you with your studies today?`;
      } else if (flagged) {
        responseContent = "I understand you're looking for help with your assignment. While I can't provide complete solutions that could be submitted as your own work, I can help explain concepts and guide your learning process. What specific aspects would you like me to help you understand?";
      } else {
        responseContent = "That's an interesting question! I'd be happy to discuss this topic with you and provide some helpful insights. What specific aspects are you most interested in learning about?";
      }
      
      // Create AI response
      const aiResponse = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        content: responseContent,
        timestamp: new Date().toISOString(),
        flagged: flagged,
        flagReason: flagReason
      };
      
      // Update API call with response
      const updatedApiCall = {
        ...newApiCall,
        response: {
          message: responseContent,
          flagged: flagged,
          flag_reason: flagReason,
          timestamp: new Date().toISOString()
        }
      };
      
      setApiCalls(prev => prev.map(call => 
        call.id === newApiCall.id ? updatedApiCall : call
      ));
      
      // Add AI response to messages
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Switch user
  const switchToUser = (user) => {
    setActiveUser(user);
    setShowUserMenu(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Policies Modal */}
      {policiesOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-blue-800">GuardianBot Academic Policies</h2>
              <button 
                onClick={() => setPoliciesOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3">Academic Integrity Policy</h3>
              <p className="mb-4">
                GuardianBot is designed to support student learning while upholding the highest standards of academic integrity. This policy outlines the responsible use of the AI system within educational contexts.
              </p>
              
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Prohibited Uses</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Submitting AI-generated content as your own work</li>
                <li>Using AI to complete assignments without proper attribution</li>
                <li>Sharing accounts or using the system to help others cheat</li>
                <li>Attempting to circumvent the monitoring systems</li>
                <li>Using AI for unauthorized test or exam assistance</li>
              </ul>
              
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Appropriate Uses</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Asking for clarification on concepts you don't understand</li>
                <li>Getting feedback on your own written work</li>
                <li>Exploring different perspectives on a topic</li>
                <li>Practicing problem-solving with guidance</li>
                <li>Brainstorming ideas for projects or essays</li>
              </ul>
              
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Monitoring & Enforcement</h4>
              <p className="mb-3">
                All interactions with GuardianBot are monitored for academic integrity purposes. The system employs advanced AI to detect:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Requests for complete assignments or solutions</li>
                <li>Patterns suggesting unauthorized use</li>
                <li>Attempts to generate assessment answers</li>
                <li>Excessive use suggesting over-reliance</li>
              </ul>
              
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Flagging System</h4>
              <p className="mb-3">
                When potential academic integrity issues are detected:
              </p>
              <ol className="list-decimal pl-5 mb-4 space-y-1">
                <li>Warnings are displayed to students</li>
                <li>Teachers receive alerts about concerning behavior</li>
                <li>Repeated violations may trigger escalation to administration</li>
                <li>Severe cases may result in temporary or permanent account restrictions</li>
              </ol>
              
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Student Privacy</h4>
              <p className="mb-4">
                While all conversations are monitored, student privacy is respected. Data is only shared with authorized educational staff and used exclusively for academic purposes.
              </p>
              
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Acknowledgment</h4>
              <p className="mb-4">
                By using GuardianBot, students acknowledge they have read and agree to abide by these policies. Violations may result in academic penalties according to school policy.
              </p>
              
              <div className="mt-8 pt-4 border-t text-sm text-gray-500">
                Policy Version: 1.2 | Last Updated: March 1, 2025
              </div>
            </div>
            <div className="bg-gray-100 p-4 flex justify-end">
              <button 
                onClick={() => setPoliciesOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="bg-blue-600 text-white p-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <h1 className="text-lg font-bold">GuardianBot AI</h1>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 py-1 px-3 rounded"
            >
              <img 
                src={activeUser.avatar} 
                alt={activeUser.name} 
                className="w-6 h-6 rounded-full" 
              />
              <span>{activeUser.name}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                    Switch User
                  </div>
                  {userProfiles.map(user => (
                    <button
                      key={user.id}
                      onClick={() => switchToUser(user)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        activeUser.id === user.id 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-6 h-6 rounded-full" 
                        />
                        <span>{user.name}</span>
                        {user.conversation && user.conversation.length > 0 && (
                          <span className="ml-auto text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
                            {user.conversation.length}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="border-t py-1">
                  <button 
                    onClick={() => setShowAPIDetails(!showAPIDetails)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span>{showAPIDetails ? 'Hide API Details' : 'Show API Details'}</span>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* User info banner */}
          <div className="bg-blue-50 border-b border-blue-100 p-2">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-800">
                  Viewing conversation as <strong>{activeUser.name}</strong>
                </span>
              </div>
              <div className="text-xs text-blue-600">
                {activeUser.conversation && activeUser.conversation.length > 0 
                  ? `${activeUser.conversation.length} messages` 
                  : 'New conversation'}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="container mx-auto max-w-3xl space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400">No messages yet</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Start a new conversation with the AI
                  </p>
                </div>
              ) : (
                messages.map(message => (
                  <div key={message.id}>
                    <div 
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                      )}
                      
                      <div 
                        className={`max-w-lg rounded-lg px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-gray-200 shadow-sm'
                        } ${message.flagged ? 'border-yellow-500 border-2' : ''}`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                        <div className="mt-1 flex justify-between items-center">
                          <span className={`text-xs ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                            {formatTime(message.timestamp)}
                          </span>
                          
                          {message.flagged && (
                            <div className="flex items-center gap-1 text-xs text-yellow-700 bg-yellow-50 px-1 rounded">
                              <AlertTriangle className="h-3 w-3" />
                              <span>Flagged</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {message.sender === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
                          <span className="text-gray-700 text-xs font-bold">
                            {activeUser.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Show flag reason if present */}
                    {message.flagged && message.flagReason && (
                      <div className={`flex ${message.sender === 'user' ? 'justify-end mr-10' : 'justify-start ml-10'} mt-1`}>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-md px-2 py-1 text-xs text-yellow-800">
                          <span className="font-medium">Flag reason:</span> {message.flagReason}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white p-3">
            <form onSubmit={handleSendMessage} className="container mx-auto max-w-3xl flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* API Details Panel */}
        {showAPIDetails && (
          <div className="w-80 bg-gray-800 text-white overflow-y-auto">
            <div className="p-3 border-b border-gray-700 flex justify-between items-center">
              <h2 className="font-bold">SafeGuard API Calls</h2>
              <button 
                onClick={() => setShowAPIDetails(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-3">
              <h3 className="text-sm font-semibold mb-2 text-green-400">Monitoring API Details</h3>
              <p className="text-xs text-gray-400 mb-4">
                All messages are sent to the GuardianBot API for real-time monitoring and content analysis.
              </p>
              
              {apiCalls.length === 0 ? (
                <div className="text-gray-500 text-sm py-3 text-center">
                  No API calls yet
                </div>
              ) : (
                <div className="space-y-4">
                  {apiCalls.map((call, index) => (
                    <div key={call.id} className="border border-gray-700 rounded-md overflow-hidden">
                      <div className="bg-gray-700 p-2 flex justify-between items-center">
                        <span className="text-xs">Request {index + 1}</span>
                        <span className="text-xs text-gray-400">{formatTime(call.timestamp)}</span>
                      </div>
                      <div className="p-2 text-xs">
                        <div className="mb-2">
                          <span className="text-green-400">POST</span> {call.endpoint}
                        </div>
                        <div className="mb-1 text-blue-400">Request</div>
                        <pre className="bg-gray-900 p-2 rounded overflow-x-auto text-gray-300 text-xs">
                          {JSON.stringify({
                            user_id: call.request.user_id,
                            user_name: call.request.user_name,
                            message: call.request.message,
                            timestamp: call.timestamp,
                            conversation_length: call.request.conversation_history.length
                          }, null, 2)}
                        </pre>
                        
                        {call.response && (
                          <>
                            <div className="mb-1 mt-3 text-green-400">Response</div>
                            <pre className="bg-gray-900 p-2 rounded overflow-x-auto text-gray-300 text-xs">
                              {JSON.stringify({
                                message: call.response.message.substring(0, 50) + '...',
                                flagged: call.response.flagged,
                                flag_reason: call.response.flag_reason,
                                timestamp: call.response.timestamp
                              }, null, 2)}
                            </pre>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-4 border-t border-gray-700 pt-4">
                                  <h3 className="text-sm font-semibold mb-2 text-blue-400">GuardianBot API Base URL</h3>
                <code className="text-xs bg-gray-900 p-2 rounded block overflow-x-auto">
                  https://api.guardianbot.edu/v1
                </code>
                
                <h3 className="text-sm font-semibold mb-2 mt-4 text-blue-400">OpenAI Configuration</h3>
                <pre className="text-xs bg-gray-900 p-2 rounded block overflow-x-auto text-gray-300">
{`const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.guardianbot.edu/v1/openai',
  defaultHeaders: {
    'X-GuardianBot-User-ID': '${activeUser.id}',
    'X-GuardianBot-User-Name': '${activeUser.name}'
  }
});`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiUserMonitoringSystem;
