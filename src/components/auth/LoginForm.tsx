import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        navigate('/dashboard');
      } else {
        setError(res.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during authentication');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-auto p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl shadow-black/60 backdrop-blur-xl relative"
    >
      {/* Brand Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <Link to="/" className="w-14 h-14 rounded-2xl bg-black border border-amber-500/30 p-1.5 shadow-lg shadow-amber-500/20 mb-4 flex items-center justify-center overflow-hidden hover:border-amber-400 transition-colors">
          <img src="/jyruka-logo.png" alt="Jyruka" className="w-full h-full object-contain" />
        </Link>
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-semibold text-amber-400 mb-2">
          <ShieldCheck className="w-3 h-3" />
          <span>Restricted Portal</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Executive & Team Portal</h2>
        <p className="text-xs text-zinc-400 mt-1 max-w-xs">
          Authorized sign-in for SuperAdmin and Jyruka employee team members.
        </p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-5 p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{error}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
            <input
              type="email"
              required
              id="login-email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. ruthram667@gmail.com"
              className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
            <input
              type="password"
              required
              id="login-password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          id="login-submit-btn"
          className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-5 border-t border-zinc-800 text-center">
        <Link
          to="/"
          className="text-xs text-zinc-400 hover:text-amber-300 transition-colors flex items-center justify-center gap-1"
        >
          <span>Return to public website</span>
        </Link>
      </div>
    </motion.div>
  );
};
