import React, { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [replyTo, setReplyTo] = useState(null);

  return (
    <MessageContext.Provider value={{ replyTo, setReplyTo }}>
      {children}
    </MessageContext.Provider>
  );
};
