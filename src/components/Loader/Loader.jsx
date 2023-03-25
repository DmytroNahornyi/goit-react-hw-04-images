import React, { useState, useEffect } from 'react';

function Loader() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(rotation => rotation + 360);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Loader">
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#9a1d1d"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              transform={`rotate(${rotation} 18 18)`}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Loader;
