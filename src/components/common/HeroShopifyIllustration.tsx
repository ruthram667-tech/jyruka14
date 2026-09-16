import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, CheckCircle, Star, ShoppingBag, Box, ArrowUpRight } from 'lucide-react';

export const HeroShopifyIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[560px] mx-auto select-none pt-4 pb-2">
      {/* Soft pastel ambient glow behind illustration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-emerald-200/50 via-teal-100/40 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main SVG Vector Stage */}
      <div className="relative z-10 w-full aspect-[4/3] flex items-center justify-center">
        <svg
          viewBox="0 0 540 400"
          className="w-full h-full drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* DEFINITIONS FOR GRADIENTS & SHADOWS */}
          <defs>
            {/* Soft ground shadow */}
            <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.16" />
              <stop offset="70%" stopColor="#0f172a" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>

            {/* Laptop metal gradient */}
            <linearGradient id="laptopBezel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>

            {/* Screen glass gradient */}
            <linearGradient id="screenGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Awning green gradient */}
            <linearGradient id="awningGreen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>

            {/* Awning cream gradient */}
            <linearGradient id="awningCream" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>

            {/* Gold coin gradient */}
            <linearGradient id="goldCoin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>

            {/* Shopping bag green */}
            <linearGradient id="bagGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>

            {/* Box kraft cardboard */}
            <linearGradient id="kraftBox" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="kraftBoxSide" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>

          {/* GROUND SHADOW */}
          <ellipse cx="270" cy="370" rx="210" ry="18" fill="url(#groundShadow)" />

          {/* LAPTOP KEYBOARD BASE */}
          <path
            d="M 110 338 L 430 338 L 454 362 C 456 364 453 367 449 367 L 91 367 C 87 367 84 364 86 362 Z"
            fill="#e4e4e7"
            stroke="#18181b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Laptop trackpad notch */}
          <rect x="235" y="344" width="70" height="15" rx="3" fill="#d4d4d8" stroke="#a1a1aa" strokeWidth="1.2" />

          {/* LAPTOP DISPLAY BEZEL */}
          <rect
            x="135"
            y="130"
            width="270"
            height="208"
            rx="14"
            fill="url(#laptopBezel)"
            stroke="#18181b"
            strokeWidth="4"
          />
          {/* Display Glass / Screen */}
          <rect
            x="146"
            y="142"
            width="248"
            height="184"
            rx="8"
            fill="url(#screenGlass)"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />

          {/* Browser Top Window Bar */}
          <rect x="146" y="142" width="248" height="24" rx="8" fill="#f1f5f9" />
          <circle cx="160" cy="154" r="3.5" fill="#f87171" />
          <circle cx="172" cy="154" r="3.5" fill="#fbbf24" />
          <circle cx="184" cy="154" r="3.5" fill="#34d399" />
          <rect x="202" y="148" width="140" height="12" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="220" y="157" fontSize="7" fill="#64748b" fontFamily="sans-serif" fontWeight="bold">
            jyruka.com/live-store
          </text>

          {/* SCREEN CONTENT: Web Store Dashboard Elements */}
          {/* Metric Chart Box */}
          <rect x="160" y="180" width="105" height="60" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Sparkline curve */}
          <path
            d="M 170 220 Q 185 200 200 215 T 230 195 T 255 188"
            fill="none"
            stroke="#059669"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="255" cy="188" r="3" fill="#10b981" />
          <text x="170" y="193" fontSize="8" fill="#0f172a" fontWeight="bold">Analytics</text>
          <text x="170" y="202" fontSize="7" fill="#059669" fontWeight="600">+148% Traffic</text>

          {/* Metric Bar Chart Box */}
          <rect x="275" y="180" width="105" height="60" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="286" y="215" width="8" height="18" rx="2" fill="#cbd5e1" />
          <rect x="300" y="205" width="8" height="28" rx="2" fill="#94a3b8" />
          <rect x="314" y="196" width="8" height="37" rx="2" fill="#6ee7b7" />
          <rect x="328" y="190" width="8" height="43" rx="2" fill="#059669" />
          <rect x="342" y="186" width="8" height="47" rx="2" fill="#047857" />
          <text x="285" y="193" fontSize="8" fill="#0f172a" fontWeight="bold">Revenue</text>

          {/* Sub Content Rows inside screen */}
          <rect x="160" y="250" width="155" height="22" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="166" y="256" width="10" height="10" rx="2" fill="#10b981" />
          <text x="182" y="264" fontSize="7.5" fill="#334155" fontWeight="600">
            Next-Gen E-Commerce & Web Systems
          </text>

          <rect x="160" y="280" width="220" height="20" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="170" cy="290" r="4" fill="#059669" />
          <text x="180" y="293" fontSize="7" fill="#475569" fontWeight="500">
            Verified Sprint: 100% Core Web Vitals • Mobile Responsive
          </text>

          {/* STORE AWNING (Green & Cream Striped Canopy over the laptop) */}
          <g id="storeAwning">
            {/* Awning Structure Top Angle */}
            <polygon
              points="140,118 400,118 418,154 122,154"
              fill="#065f46"
              stroke="#18181b"
              strokeWidth="3.5"
            />
            {/* Green Stripe 1 */}
            <polygon points="140,118 172,118 160,154 122,154" fill="url(#awningGreen)" />
            {/* Cream Stripe 1 */}
            <polygon points="172,118 205,118 198,154 160,154" fill="url(#awningCream)" />
            {/* Green Stripe 2 */}
            <polygon points="205,118 237,118 235,154 198,154" fill="url(#awningGreen)" />
            {/* Cream Stripe 2 */}
            <polygon points="237,118 270,118 270,154 235,154" fill="url(#awningCream)" />
            {/* Green Stripe 3 */}
            <polygon points="270,118 302,118 305,154 270,154" fill="url(#awningGreen)" />
            {/* Cream Stripe 3 */}
            <polygon points="302,118 335,118 342,154 305,154" fill="url(#awningCream)" />
            {/* Green Stripe 4 */}
            <polygon points="335,118 367,118 380,154 342,154" fill="url(#awningGreen)" />
            {/* Cream Stripe 4 */}
            <polygon points="367,118 400,118 418,154 380,154" fill="url(#awningCream)" />

            {/* Awning Front Scallops / Valance with dark stroke */}
            {/* Scallop 1 */}
            <path d="M 122 154 Q 141 168 160 154" fill="#047857" stroke="#18181b" strokeWidth="3" />
            <path d="M 160 154 Q 179 168 198 154" fill="#fde68a" stroke="#18181b" strokeWidth="3" />
            <path d="M 198 154 Q 216 168 235 154" fill="#047857" stroke="#18181b" strokeWidth="3" />
            <path d="M 235 154 Q 252 168 270 154" fill="#fde68a" stroke="#18181b" strokeWidth="3" />
            <path d="M 270 154 Q 287 168 305 154" fill="#047857" stroke="#18181b" strokeWidth="3" />
            <path d="M 305 154 Q 323 168 342 154" fill="#fde68a" stroke="#18181b" strokeWidth="3" />
            <path d="M 342 154 Q 361 168 380 154" fill="#047857" stroke="#18181b" strokeWidth="3" />
            <path d="M 380 154 Q 399 168 418 154" fill="#fde68a" stroke="#18181b" strokeWidth="3" />
          </g>

          {/* REVIEW BUBBLE (★★★★) */}
          <g id="reviewBubble" className="transform transition-transform hover:scale-105">
            <rect
              x="385"
              y="155"
              width="78"
              height="28"
              rx="14"
              fill="#ffffff"
              stroke="#18181b"
              strokeWidth="2.5"
            />
            {/* Small speech triangle pointing to screen */}
            <polygon points="388,172 380,178 392,176" fill="#ffffff" stroke="#18181b" strokeWidth="2.5" />
            {/* 4 Gold Stars */}
            <text x="397" y="174" fontSize="13" fill="#ca8a04" fontWeight="bold">
              ★★★★
            </text>
            <text x="444" y="173" fontSize="10" fill="#15803d" fontWeight="bold">
              ★
            </text>
          </g>

          {/* RED & WHITE MEGAPHONE AT TOP-LEFT */}
          <g id="megaphone" className="transform hover:rotate-6 transition-transform origin-center">
            {/* Cone Body */}
            <polygon
              points="198,105 228,88 238,124 198,105"
              fill="#ef4444"
              stroke="#18181b"
              strokeWidth="3"
            />
            {/* Speaker Bell Ring */}
            <ellipse
              cx="238"
              cy="106"
              rx="6"
              ry="18"
              fill="#ffffff"
              stroke="#18181b"
              strokeWidth="3"
            />
            {/* Handle */}
            <path
              d="M 205 108 L 205 125 L 213 123 L 213 111"
              fill="#ffffff"
              stroke="#18181b"
              strokeWidth="2.5"
            />
            {/* Sound Lines */}
            <path d="M 252 92 Q 262 106 252 120" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 262 86 Q 274 106 262 126" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>

          {/* FLYING GOLD COINS (representing profit generated) */}
          {/* Coin 1 - Large Top */}
          <g id="coin1">
            <ellipse cx="270" cy="85" rx="14" ry="17" fill="url(#goldCoin)" stroke="#18181b" strokeWidth="2.5" />
            <ellipse cx="270" cy="85" rx="9" ry="12" fill="none" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="267" y="90" fontSize="11" fill="#78350f" fontWeight="bold" fontFamily="monospace">₹</text>
          </g>

          {/* Coin 2 - Small Top Right */}
          <g id="coin2">
            <ellipse cx="295" cy="65" rx="9" ry="11" fill="url(#goldCoin)" stroke="#18181b" strokeWidth="2.5" />
            <text x="292" y="69" fontSize="8" fill="#78350f" fontWeight="bold">₹</text>
          </g>

          {/* Coin 3 - Mid Right */}
          <g id="coin3">
            <ellipse cx="308" cy="95" rx="8" ry="10" fill="url(#goldCoin)" stroke="#18181b" strokeWidth="2" />
          </g>

          {/* GREEN SHOPPING BAG (In front of laptop, left side - just like Shopify screenshot!) */}
          <g id="shoppingBag">
            {/* Bag Body */}
            <path
              d="M 170 300 L 195 292 L 222 300 L 218 362 L 166 362 Z"
              fill="url(#bagGreen)"
              stroke="#18181b"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Bag Left Fold */}
            <path
              d="M 170 300 L 195 292 L 193 362 L 166 362 Z"
              fill="#14532d"
              opacity="0.25"
            />
            {/* Handles */}
            <path
              d="M 182 296 C 182 280 188 274 195 274 C 202 274 208 280 208 296"
              fill="none"
              stroke="#fef08a"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 182 296 C 182 280 188 274 195 274 C 202 274 208 280 208 296"
              fill="none"
              stroke="#18181b"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* CARDBOARD SHIPPING BOX (In front of laptop, right side - just like Shopify screenshot!) */}
          <g id="shippingBox">
            {/* Front Face */}
            <rect
              x="268"
              y="320"
              width="54"
              height="44"
              rx="4"
              fill="url(#kraftBox)"
              stroke="#18181b"
              strokeWidth="3"
            />
            {/* Side 3D Perspective Face */}
            <polygon
              points="322,320 338,308 338,348 322,364"
              fill="url(#kraftBoxSide)"
              stroke="#18181b"
              strokeWidth="3"
            />
            {/* Top 3D Perspective Flap */}
            <polygon
              points="268,320 286,308 338,308 322,320"
              fill="#f59e0b"
              stroke="#18181b"
              strokeWidth="3"
            />
            {/* Sealing Tape Stripe */}
            <line x1="295" y1="320" x2="295" y2="364" stroke="#78350f" strokeWidth="4" />
            <line x1="305" y1="308" x2="295" y2="320" stroke="#78350f" strokeWidth="4" />
            {/* Box Label Tape */}
            <rect x="274" y="332" width="15" height="12" rx="2" fill="#ffffff" stroke="#18181b" strokeWidth="1.5" />
            <line x1="277" y1="336" x2="286" y2="336" stroke="#475569" strokeWidth="1.2" />
            <line x1="277" y1="340" x2="284" y2="340" stroke="#475569" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* Floating Interactive Conversion Badges around the illustration */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 mt-1 flex-wrap">
        <div className="px-3 py-1.5 rounded-full bg-white border border-emerald-200/90 shadow-sm flex items-center gap-1.5 text-xs font-bold text-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>10+ Websites Delivered</span>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-white border border-amber-200/90 shadow-sm flex items-center gap-1.5 text-xs font-bold text-slate-800">
          <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
          <span>$50k+ Direct Client Profit</span>
        </div>

        <div className="hidden sm:flex px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm items-center gap-1.5 text-xs font-semibold text-slate-600">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>48-Hour Sprint Kickoff</span>
        </div>
      </div>
    </div>
  );
};
