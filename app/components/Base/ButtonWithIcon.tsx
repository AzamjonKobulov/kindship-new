import React from 'react';

interface iButtonWithIconProps {
  children: any;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const ButtonWithIcon: React.FC<iButtonWithIconProps> = ({
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
      className={`max-w-[22.5rem] w-full mx-auto rounded-base flex items-center justify-center space-x-2 text-white text-lg lg:text-xl font-semibold py-2.5 lg:py-3.5 ${
        disabled
          ? 'bg-brand-gray-400 pointer-events-none'
          : 'bg-brand-primary lg:hover:bg-brand-hover'
      }  mt-5 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonWithIcon;
