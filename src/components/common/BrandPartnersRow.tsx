import React from 'react';

export const BrandPartnersRow: React.FC = () => {
  const brands = [
    { name: 'mCaffeine', style: 'font-serif font-black tracking-tighter text-xl sm:text-2xl', dot: true },
    { name: 'Yoga Bar', style: 'font-sans font-bold tracking-tight text-lg sm:text-xl rounded-full px-2.5 py-0.5 border border-slate-300 text-slate-700' },
    { name: 'NUSH', style: 'font-mono font-extrabold tracking-widest text-lg sm:text-xl text-slate-800' },
    { name: 'john jacobs', style: 'font-sans font-semibold tracking-tight text-base sm:text-lg text-slate-800', symbol: true },
    { name: 'VAHDAM', sub: 'INDIA', style: 'font-serif tracking-widest font-bold text-sm sm:text-base text-slate-900' },
    { name: 'FableStreet', style: 'font-serif italic font-normal tracking-wide text-base sm:text-lg text-slate-800' },
    { name: 'Star-Struck', style: 'font-sans font-extrabold uppercase tracking-tight text-xs sm:text-sm text-slate-800' },
    { name: 'Hydronix Lab', style: 'font-mono font-bold tracking-tight text-xs sm:text-sm text-slate-700' }
  ];

  return (
    <div className="w-full py-8 sm:py-10 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 sm:mb-8">
          Trusted by fast-growing founders, commerce leaders & scale-ups
        </p>

        {/* Brand logos row with responsive wrap / smooth flex */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 lg:gap-x-14 gap-y-6 opacity-75 hover:opacity-100 transition-opacity duration-300">
          {/* mCaffeine style */}
          <div className="flex items-center text-slate-900 select-none">
            <span className="text-xl sm:text-2xl font-black font-serif tracking-tight">
              mCaffeine
            </span>
          </div>

          {/* Yoga Bar style */}
          <div className="flex items-center select-none">
            <div className="w-10 h-10 rounded-full border border-slate-400/80 flex items-center justify-center text-center p-1 font-bold text-[10px] uppercase leading-none text-slate-800">
              Yoga<br />Bar
            </div>
          </div>

          {/* NUSH style */}
          <div className="flex items-center select-none">
            <span className="text-lg sm:text-xl font-extrabold tracking-[0.25em] text-slate-900 font-sans">
              NUSH
            </span>
          </div>

          {/* John Jacobs style */}
          <div className="flex items-center gap-1.5 select-none text-slate-900">
            <span className="w-3.5 h-3.5 rounded-full bg-slate-900 inline-block" />
            <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 inline-block" />
            <span className="text-sm sm:text-base font-bold tracking-tight">
              john jacobs
            </span>
          </div>

          {/* VAHDAM INDIA style */}
          <div className="flex flex-col items-center select-none text-slate-900">
            <span className="text-sm sm:text-base font-serif font-extrabold tracking-[0.2em]">
              VAHDAM
            </span>
            <span className="text-[8px] font-sans font-bold tracking-[0.3em] -mt-0.5 text-slate-500">
              INDIA
            </span>
          </div>

          {/* FableStreet style */}
          <div className="flex items-center gap-1 select-none text-slate-900">
            <span className="w-4 h-4 rounded-full border border-slate-800 flex items-center justify-center text-[10px] font-serif">FS</span>
            <span className="text-sm sm:text-base font-serif font-medium tracking-wide">
              FableStreet
            </span>
          </div>

          {/* Star-Struck */}
          <div className="flex items-center select-none text-slate-900">
            <span className="text-xs sm:text-sm font-sans font-extrabold uppercase tracking-tight border-b border-slate-900 pb-0.5">
              Star-Struck
            </span>
          </div>

          {/* Hydronix Lab (Jyruka Client) */}
          <div className="hidden sm:flex items-center gap-1 select-none text-slate-800">
            <span className="w-2 h-2 rounded-sm bg-emerald-600" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-tight">
              Hydronix Lab
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
