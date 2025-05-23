import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock } from 'lucide-react';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else onClose();
    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Пароли не совпадают');
      return;
    }
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else onClose();
    setLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="modal-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          key="modal-content"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 flex flex-col items-center"
        >
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-[#C6A052] transition-colors"
            onClick={onClose}
            aria-label="Закрыть"
            type="button"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="w-full flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{tab === 'login' ? 'Вход' : 'Регистрация'}</h2>
            <div className="flex gap-2 bg-black/20 rounded-full p-1">
              <button
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-200 ${tab === 'login' ? 'bg-[#C6A052] text-black shadow' : 'text-white/70 hover:text-white'}`}
                onClick={() => setTab('login')}
                type="button"
              >
                Вход
              </button>
              <button
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-200 ${tab === 'register' ? 'bg-[#C6A052] text-black shadow' : 'text-white/70 hover:text-white'}`}
                onClick={() => setTab('register')}
                type="button"
              >
                Регистрация
              </button>
            </div>
          </div>

          {tab === 'login' ? (
            <form onSubmit={handleLogin} className="w-full space-y-5">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C6A052] h-5 w-5" />
                <input
                  type="email"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#C6A052] focus:border-transparent transition"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C6A052] h-5 w-5" />
                <input
                  type="password"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#C6A052] focus:border-transparent transition"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="Пароль"
                  autoComplete="current-password"
                />
              </div>
              {error && <div className="text-red-400 text-sm text-center">{error}</div>}
              <Button type="submit" className="w-full bg-[#C6A052] hover:bg-[#C6A052]/80 text-black rounded-lg shadow-md transition" disabled={loading}>
                Войти
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="w-full space-y-5">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C6A052] h-5 w-5" />
                <input
                  type="email"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#C6A052] focus:border-transparent transition"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C6A052] h-5 w-5" />
                <input
                  type="password"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#C6A052] focus:border-transparent transition"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="Пароль"
                  autoComplete="new-password"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C6A052] h-5 w-5" />
                <input
                  type="password"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#C6A052] focus:border-transparent transition"
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                  required
                  placeholder="Повторите пароль"
                  autoComplete="new-password"
                />
              </div>
              {error && <div className="text-red-400 text-sm text-center">{error}</div>}
              <Button type="submit" className="w-full bg-[#C6A052] hover:bg-[#C6A052]/80 text-black rounded-lg shadow-md transition" disabled={loading}>
                Зарегистрироваться
              </Button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal; 