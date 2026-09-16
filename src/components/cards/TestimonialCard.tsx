import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      id={`testimonial-${testimonial.id}`}
      className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 backdrop-blur-sm flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 relative group shadow-lg shadow-black/30"
    >
      <div className="absolute top-6 right-6 text-amber-500/15 group-hover:text-amber-500/25 transition-colors pointer-events-none">
        <Quote className="w-10 h-10" />
      </div>

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60 text-amber-300">
            {testimonial.projectCategory}
          </span>
        </div>

        {/* Content */}
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author details */}
      <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center gap-3.5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full object-cover border border-amber-500/40"
        />
        <div>
          <h4 className="text-sm font-bold text-white tracking-tight">
            {testimonial.name}
          </h4>
          <p className="text-xs text-zinc-400">
            {testimonial.role}, <span className="text-zinc-300">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
