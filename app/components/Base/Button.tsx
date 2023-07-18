import React from 'react';

interface iButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const Button: React.FC<iButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full rounded-base py-3.5 disabled: ${
        disabled
          ? 'bg-brand-gray-400 pointer-events-none'
          : 'bg-brand-primary lg:hover:bg-brand-hover'
      } ${className}`}
    >
      <span
        className={`font-semibold text-body leading-4 inline-block ${
          disabled ? 'text-brand-gray-600' : 'text-white'
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
