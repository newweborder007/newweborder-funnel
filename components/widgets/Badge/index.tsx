import React from 'react';

interface BadgeProps {
  text?: string;
  className?: string;
}
const Badge: React.FC<BadgeProps> = ({text, className}) => {
  return (
    <span className={`py-1.5 px-4 text-sm font-medium tracking-[0.00438rem] self-center ${className}`}>
      {text}
    </span>
  );
};

export default Badge;