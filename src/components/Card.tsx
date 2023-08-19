import clsx from "clsx";
import React from "react";

interface CardProps {
  className?: string;
  children: JSX.Element;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};
