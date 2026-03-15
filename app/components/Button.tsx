'use client'

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ReactNode } from "react";

const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "bg-[#768a20]",
        secondary: "bg-[#768a20]/40"
      },
      border: {
        primary: "border-[#768a20]",
        secondary: "border-[#768a20]/40"
      },
      fontColor: {
        primary: "text-[#768a20] group-hover:text-white transition-color duration-400",
        secondary: "text-[#768a20]/40 group-hover:text-white transition-color duration-400"
      }
    }
  }
)

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  position?: string
  font?: string
}

export default function Button({ className, position, variant, border, font, fontColor, icon, children, onClick, ...props }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <div className={cn(buttonVariants({border: border || "primary"}), position, "group relative w-fit h-fit flex justify-center items-center overflow-hidden border")}>
      <div className="invisible flex gap-3 m-2 hsm:m-1 md:m-2 lg:m-3 md:text-[clamp(0.9rem,1.5vw,1.3rem)] hsm:text-[clamp(0.5rem,1.1vw,2rem)] not-hsm:text-[clamp(0.9rem,1.7vw,2rem)]">
        {children}
        {icon && <span>{icon}</span>}
      </div>
      <button className={cn(buttonVariants({fontColor: fontColor || "primary"}), font, "z-10 absolute flex gap-3 scale-95 group-hover:font-semibold group-hover:scale-100 group-active:scale-100 md:text-[clamp(0.9rem,1.5vw,1.3rem)] hsm:text-[clamp(0.5rem,1.1vw,2rem)] not-hsm:text-[clamp(0.9rem,1.7vw,2rem)]")} onClick={handleClick} {...props}>
        {children}
        {icon && <span>{icon}</span>}
      </button>
      <div className={cn(buttonVariants({variant: variant || "primary"}), "absolute w-full h-20 translate-y-20 group-hover:translate-y-0 transition-all duration-600")}></div>
    </div>
  )
}