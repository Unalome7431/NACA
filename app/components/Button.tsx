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
      size: {
       sixty: "w-60",
       full: "w-full"
      },
      fontColor: {
        primary: "text-[#768a20] group-hover:text-white transition-all duration-400",
        secondary: "text-[#768a20]/40 group-hover:text-white transition-all duration-400"
      }
    }
  }
)

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  position?: string
  font?: string
}

export default function Button({ className, position, variant, border, font, fontColor, size, icon, children, onClick, ...props }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <>
      <div className={cn(buttonVariants({border: border || "primary", size: size || "sixty", className}), position, "group relative h-fit flex justify-center items-center overflow-hidden border bg-white hover:cursor-pointer")}>
        <div className={`invisible flex gap-3 ${icon ? 'm-0' : 'm-2 hsm:m-1 md:m-2 lg:m-3'} text-2sm md:text-md lg:text-lg xl:text-xl font-lato`}>
          {children}
          {icon && <span>{icon}</span>}
        </div>
        <button className={cn(buttonVariants({fontColor: fontColor || "primary"}), font, "z-10 absolute flex gap-3 scale-95 group-hover:font-semibold group-hover:scale-100 hover:cursor-pointer group-active:scale-100 text-2sm md:text-md lg:text-lg xl:text-xl font-lato")} onClick={handleClick} {...props}>
          {children}
          {icon && <span>{icon}</span>}
        </button>
        <div className={cn(buttonVariants({variant: variant || "primary"}), "absolute w-full h-20 translate-y-20 group-hover:translate-y-0 transition-all duration-600")}></div>
      </div>
    </>
  )
}