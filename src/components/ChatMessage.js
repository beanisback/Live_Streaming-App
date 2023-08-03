import React from 'react';

const ChatMessage = ( { name , text }) => {
  return (
    <div className="flex items-center">
      <img className="h-5" alt="usericon" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      />
    
    <span className="font-bold px-2 shadow-sm">{name}</span>
    <span>{text}</span>
    </div>
  );
};

export default ChatMessage;
