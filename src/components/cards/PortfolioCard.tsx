import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, CheckCircle, Users } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position coordinates for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery smooth tilt return
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse positions to subtle tilt rotation degrees (max +-8 deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(item)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      id={`portfolio-card-${item.id}`}
      className="group relative cursor-pointer rounded-2xl bg-zinc-900/60 border border-zinc-800/90 overflow-hidden shadow-xl shadow-black/40 hover:shadow-amber-500/10 hover:border-amber-500/50 transition-colors duration-300"
    >
      {/* Cover Image with subtle zoom */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-black">
        <img
          src={item.image}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md border border-white/10 text-amber-300 shadow-sm">
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/80 backdrop-blur-md border border-white/10 text-zinc-300">
            <Users className="w-3.5 h-3.5 text-zinc-400" />
            <span>{item.freelancerCount} Experts</span>
          </div>
        </div>

        {/* Floating open trigger button */}
        <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl bg-amber-500 text-black flex items-center justify-center shadow-lg shadow-amber-500/30 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400">
          <ArrowUpRight className="w-4 h-4 font-bold" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="text-xs font-semibold text-zinc-400 mb-1">
          {item.client} • {item.year}
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
          {item.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {item.summary}
        </p>

        {/* Primary metric badge */}
        {item.results[0] && (
          <div className="mt-4 p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center gap-2 text-xs text-amber-300 font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{item.results[0]}</span>
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
          {item.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2.5 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-800/40 text-zinc-400">
              +{item.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
