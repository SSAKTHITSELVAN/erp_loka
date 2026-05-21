export default function Card({ children, className = '', hover = true, ...props }) {
  const hoverEffect = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverEffect} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
