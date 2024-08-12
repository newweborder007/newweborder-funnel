import React from "react";

interface BadgeProps {
  text?: string;
  className?: string;
}
const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <span
      className={`self-center px-4 py-1.5 font-orbitron text-sm font-medium tracking-[0.00438rem] ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
