import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import Image from "next/image";

const cardVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "",
        secondary: ""
      },
      border: {
        white: "",
        green: ""
      }
    },
    defaultVariants: {
      variant: 'primary',
      border: 'white'
    }
  }
)

interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  imgSrc?: string
}

export default function Card({ className, variant, border, imgSrc, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, border, className}))} {...props}>
      {imgSrc && <Image src={imgSrc} alt="content" fill />}

      
    </div>
  )
}