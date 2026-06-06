interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium transition";
  const variants = variant === 'primary' ? "bg-primary text-white hover:bg-primary-dark" : "border border-primary text-primary hover:bg-primary-light";
  return <button className={`${base} ${variants} ${className}`} {...props}>{children}</button>;
}