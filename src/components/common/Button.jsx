export default function Button({ children, variant = 'primary', size = 'md', className = '', glow = false, ...props }) {
  const baseStyles = 'font-heading font-bold tracking-tight rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';

  const variants = {
    primary: 'bg-gradient-to-r from-electric to-neon-blue text-slate-950 hover:from-electric-light hover:to-electric shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] hover:scale-105',
    secondary: 'bg-slate-800 border-2 border-electric text-electric hover:bg-electric hover:text-slate-950 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]',
    outline: 'border-2 border-slate-700 text-gray-150 hover:border-electric hover:text-electric hover:bg-slate-800/50 backdrop-blur-md',
    ghost: 'text-electric hover:bg-slate-800/80 hover:text-electric-light',
    cta: 'bg-gradient-to-r from-energetic to-energetic-light text-white shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:scale-105 animate-glow',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-4.5 text-lg',
    xl: 'px-12 py-5 text-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${glow ? 'animate-glow' : ''} ${className}`}
      {...props}
    >
      {/* Shine effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </button>
  );
}
