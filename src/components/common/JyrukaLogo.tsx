import React from 'react';

interface JyrukaLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  theme?: 'light' | 'dark';
}

export const JyrukaLogo: React.FC<JyrukaLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubtitle = false,
  theme = 'light',
}) => {
  // Dimension presets
  const dimensions = {
    sm: { height: 28, iconSize: 28, fontSize: 18 },
    md: { height: 38, iconSize: 38, fontSize: 24 },
    lg: { height: 52, iconSize: 52, fontSize: 32 },
    xl: { height: 72, iconSize: 72, fontSize: 46 }
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      id="jyruka-official-logo"
    >
      {/* Golden Handshake Emblem in Ring (Icon) */}
      {variant !== 'text' && (
        <div
          className="relative shrink-0 flex items-center justify-center filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.35)]"
          style={{ width: dimensions.iconSize, height: dimensions.iconSize }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full transform transition-transform duration-300 hover:scale-105"
          >
            <defs>
              {/* Premium 3D Gold Gradient */}
              <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2A3" />
                <stop offset="25%" stopColor="#F5D061" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#997300" />
                <stop offset="100%" stopColor="#FFE066" />
              </linearGradient>

              {/* Gold Ring Edge Highlight */}
              <linearGradient id="goldHighlight" x1="15%" y1="10%" x2="85%" y2="90%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="35%" stopColor="#FFDE59" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#B38600" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#553A00" stopOpacity="0.9" />
              </linearGradient>

              {/* Handshake Depth Shadow */}
              <filter id="handShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
              </filter>

              {/* Silver Metallic Gradient for Text/Bevel */}
              <linearGradient id="silverPlate" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#F1F5F9" />
                <stop offset="70%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
            </defs>

            {/* Outer Golden C-Ring Arc with 3D Bevel */}
            {/* Main Arc */}
            <path
              d="M 50,6 A 44,44 0 1,0 86,30 L 74,38 A 30,30 0 1,1 50,20 A 30,30 0 0,1 72,30 L 84,18 A 44,44 0 0,0 50,6 Z"
              fill="url(#goldSheen)"
              filter="url(#handShadow)"
            />
            {/* Top Light Rim on Ring */}
            <path
              d="M 50,7 A 43,43 0 0,0 12,50 A 43,43 0 0,0 50,93"
              stroke="url(#goldHighlight)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            {/* Bottom Inner Edge */}
            <path
              d="M 50,21 A 29,29 0 0,0 21,50 A 29,29 0 0,0 50,79"
              stroke="#553A00"
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
            />

            {/* Handshake Emblem Center */}
            <g id="handshake-icon" filter="url(#handShadow)">
              {/* Left Arm / Sleeve */}
              <path
                d="M 22,58 L 34,44 L 41,50 L 29,66 Z"
                fill="url(#goldSheen)"
              />
              <path
                d="M 22,58 L 34,44"
                stroke="#FFEFA6"
                strokeWidth="1.5"
              />

              {/* Left Hand & Palm */}
              <path
                d="M 33,45 C 38,40 44,40 49,43 L 60,53 C 61,54 60,57 58,58 L 52,63 C 51,64 49,64 48,63 L 38,54 Z"
                fill="url(#goldSheen)"
              />

              {/* Right Arm / Sleeve */}
              <path
                d="M 76,46 L 64,60 L 57,54 L 69,38 Z"
                fill="url(#goldSheen)"
              />
              <path
                d="M 69,38 L 76,46"
                stroke="#FFEFA6"
                strokeWidth="1.5"
              />

              {/* Right Hand & Thumb Lock */}
              <path
                d="M 65,59 C 60,64 54,64 49,61 L 41,53 C 40,52 41,49 43,48 L 50,43 C 52,41 55,42 56,43 L 64,52 Z"
                fill="url(#goldSheen)"
              />

              {/* Clasped Interlocking Fingers (Detailing) */}
              {/* Finger 1 */}
              <path
                d="M 46,47 L 54,54 C 55,55 54,57 53,58 L 50,60"
                stroke="#704D00"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Finger 2 */}
              <path
                d="M 43,51 L 50,57 C 51,58 50,60 49,61 L 46,63"
                stroke="#704D00"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Finger 3 */}
              <path
                d="M 40,55 L 46,60 C 47,61 46,63 45,64 L 43,65"
                stroke="#704D00"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Specular Highlights across Hands */}
              <circle cx="48" cy="46" r="2" fill="#FFFFFF" opacity="0.85" />
              <path
                d="M 36,46 Q 44,41 52,46"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
            </g>
          </svg>
        </div>
      )}

      {/* 3D Silver "Jyruka" Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <span
              className={`font-extrabold tracking-tight font-serif ${
                theme === 'dark' ? 'text-white' : 'text-slate-950'
              }`}
              style={{
                fontSize: `${dimensions.fontSize}px`,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Jyruka
            </span>
          </div>

          {showSubtitle && (
            <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-emerald-600 dark:text-amber-400 -mt-0.5">
              Website Development
            </span>
          )}
        </div>
      )}
    </div>
  );
};
