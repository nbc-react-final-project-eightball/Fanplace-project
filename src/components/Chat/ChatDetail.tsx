import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3000');
const ChatDetail = () => {
  //   const [message, setMessage] = useState('');
  //   const [messages, setMessages] = useState<string[]>([]);
  //   useEffect(() => {
  //     socket.on('chat message', (msg) => {
  //       setMessages((messages) => [...messages, msg]);
  //     });
  //   }, []);

  //   const sendMessage = (event: React.FormEvent) => {
  //     event.preventDefault();

  //     socket.emit('chat message', message);
  //     setMessage('');
  //   };
  return (
    <div>
      {/* {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form> */}
    </div>
  );
};

export default ChatDetail;
