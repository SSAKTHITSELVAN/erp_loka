export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
