import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';

const ChatBot = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-id', '4489514244');
    script.id = 'chatling-embed-script';
    script.src = 'https://chatling.ai/js/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [])
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ChatBot