import React, { useState } from 'react';
function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim() === '') return;

    const newMessage = {
      text: messageInput,
      isMine: true,
      id: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageInput('');

    setTimeout(() => {
      const botReply = {
        text: generateReply(messageInput),
        isMine: false,
        id: Date.now() + 1,
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const generateReply = (input) => {
    const msg = input.toLowerCase();
    if (msg.includes("hello")) return "Hi there!";
    if (msg.includes("how are you")) return "I'm good, how about you?";
    if (msg.includes("bye")) return "Goodbye! Have a nice day!";
    return "I'm just a bot 😅";
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Application</div>

      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-bubble ${msg.isMine ? 'sent' : 'received'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
