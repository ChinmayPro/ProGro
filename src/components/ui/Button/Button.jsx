import './Button.css';

export default function Button({
  children,
  variant = '',
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const combinedClassName = `btn ${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
