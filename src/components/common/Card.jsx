export default function Card({ children, className = '', hover = true, glow = false, ...props }) {
  const hoverEffect = hover ? 'hover:-translate-y-2 hover:border-electric/50 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]' : '';
  const glowEffect = glow ? 'shadow-[0_0_40px_rgba(14,165,233,0.2)]' : '';

  return (
    <div
      className={`
        bg-slate-900/40 backdrop-blur-md rounded-2xl p-6
        transition-all duration-400
        border border-slate-800/50
        relative overflow-hidden group
        ${hoverEffect}
        ${glowEffect}
        ${className}
      `}
      {...props}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

      {/* Inner border glow */}
      <div className="absolute inset-0 rounded-2xl border border-electric/0 group-hover:border-electric/30 transition-all duration-400"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
