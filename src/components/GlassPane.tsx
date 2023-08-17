import { ReactNode } from "react";
import clsx from "clsx";

export default function GlassPane({
  children,
  className,
}: {
  children: ReactNode;
  className: String;
}) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}
