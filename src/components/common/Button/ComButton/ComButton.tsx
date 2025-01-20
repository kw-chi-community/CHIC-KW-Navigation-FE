import type { VariantProps } from "class-variance-authority";
import cn from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { buttonVariants } from "./buttonVariants";

type ButtonPT = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  className?: string;
  children: ReactNode;
  size?: VariantProps<typeof buttonVariants>["size"];
  color?: VariantProps<typeof buttonVariants>["color"];
  type?: "button" | "submit";
};

export default function Button({
  className,
  size = "m",
  color = "red",
  type = "button",
  children,
  ...rest
}: ButtonPT) {
  return (
    <button
      {...rest}
      type={type}
      className={cn(buttonVariants({ size, color }), className)}
    >
      {children}
    </button>
  );
}