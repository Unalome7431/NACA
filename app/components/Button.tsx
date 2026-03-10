'use client'

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ReactNode } from "react";

const buttonVariants = cva(
  "w-fit p-3 flex gap-2",
  {
    variants: {
      variant: {
        primary: "bg-[#768a20]",
        secondary: "border-[#768a20] bg-none"
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  icon?: ReactNode
}

export default function Button({ className, variant, icon, children, onClick, ...props }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <button className={cn(buttonVariants({ variant, className}))} onClick={handleClick} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  )
}