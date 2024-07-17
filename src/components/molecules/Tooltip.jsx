import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex items-center" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      {children}
      {showTooltip && (
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2  mb-2 bg-gray-800 text-white text-xs rounded px-2 py-1">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
