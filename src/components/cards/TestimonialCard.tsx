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
      className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 relative group shadow-sm"
    >
      <div className="absolute top-6 right-6 text-emerald-600/10 group-hover:text-emerald-600/20 transition-colors pointer-events-none">
        <Quote className="w-10 h-10" />
      </div>

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800">
            {testimonial.projectCategory}
          </span>
        </div>

        {/* Content */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author details */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full object-cover border border-emerald-300/80"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-900 tracking-tight">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500">
            {testimonial.role}, <span className="text-slate-700 font-medium">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
