import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import Image from "next/image";

const cardVariants = cva(
  "p-3 rounded-2xl flex gap-3",
  {
    variants: {
      variant: {
        primary: "bg-gray-200",
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

export default function Card({ className, variant, border, children, imgSrc, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, border, className}), "w-full md:w-110 lg:w-120")} {...props}>
      {imgSrc && <Image src={imgSrc} alt="content" width={150} height={150} className="rounded-xl" />}

      <p>{children}</p>
    </div>
  )
}