import React from 'react';

const Logo = () => {
    return (
        <div
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        margin: 0,
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}
        role="img"
        aria-label="FAST-LINE logo with a bus and road"
      >
        <svg
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ height: 40, width: 'auto' }}
        >
          {/* Bus body */}
          <rect
            x={10}
            y={20}
            width={120}
            height={40}
            rx={8}
            ry={8}
            fill="#1a6d1a"
            stroke="#000"
            strokeWidth={3}
          />
          {/* Bus windows */}
          <rect
            x={25}
            y={28}
            width={30}
            height={20}
            fill="#a0d690"
            stroke="#000"
            strokeWidth={2}
          />
          <rect
            x={60}
            y={28}
            width={40}
            height={20}
            fill="#a0d690"
            stroke="#000"
            strokeWidth={2}
          />
          {/* Bus wheels */}
          <circle cx={40} cy={65} r={12} fill="#000" />
          <circle cx={100} cy={65} r={12} fill="#000" />
          <circle cx={40} cy={65} r={6} fill="#1a6d1a" />
          <circle cx={100} cy={65} r={6} fill="#1a6d1a" />
          {/* Road base */}
          <rect x={5} y={70} width={150} height={8} fill="#333" />
          {/* Road dashed white lines */}
          <rect x={15} y={73} width={20} height={2} fill="#fff" />
          <rect x={45} y={73} width={20} height={2} fill="#fff" />
          <rect x={75} y={73} width={20} height={2} fill="#fff" />
          <rect x={105} y={73} width={20} height={2} fill="#fff" />
          {/* Motion lines for energetic feeling */}
          <line
            x1={135}
            y1={30}
            x2={185}
            y2={30}
            stroke="#1a6d1a"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <line
            x1={135}
            y1={40}
            x2={185}
            y2={40}
            stroke="#1a6d1a"
            strokeWidth={6}
            strokeLinecap="round"
          />
          <line
            x1={135}
            y1={50}
            x2={185}
            y2={50}
            stroke="#1a6d1a"
            strokeWidth={4}
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            fontWeight: 900,
            fontSize: '1rem',
            color: '#1a6d1a',
            letterSpacing: 6,
            userSelect: 'none',
            textTransform: 'uppercase',
            fontFamily: `'Arial Black', Arial, sans-serif`,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          FAST-LINE
        </div>
      </div>
    </div>
    );
};

export default Logo;