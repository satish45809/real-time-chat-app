import React from 'react';
import ChatApp from './components/ChatApp';
import { MessageProvider } from './components/MessageContext';
import './styles.css';

function App() {
  return (
    <MessageProvider>
      <ChatApp />
    </MessageProvider>
  );
}

export default App;
