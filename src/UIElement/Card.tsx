import React from "react";

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, style, children }) => (
  <div
    className={`rounded-lg shadow bg-white overflow-hidden ${className}`}
    style={style}
  >
    {children}
  </div>
);
