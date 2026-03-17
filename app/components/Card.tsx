import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import Image from "next/image";
import { Leaf, MapPin } from "lucide-react";

const cardVariants = cva(
  "p-3 flex gap-3",
  {
    variants: {
      variant: {
        primary: "bg-[#768a20]/20",
        secondary: "bg-gray-200"
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
  imgSrc?: string,
  tasteProfile?: string,
  origin?: string,

}

export default function Card({ className, variant, border, children, origin, tasteProfile, imgSrc, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, border, className}), "w-full md:w-100 lg:w-120")} {...props}>
      {imgSrc && <Image src={imgSrc} alt="content" width={150} height={150} className="not-hsm:hidden not-sps:hidden" />}
      {imgSrc && <Image src={imgSrc} alt="content" width={100} height={100} className="not-sps:hidden hsm:hidden" />}
      {imgSrc && <Image src={imgSrc} alt="content" width={65} height={65} className="sps:hidden" />}

      <div className="flex flex-col">
        <p className="font-lato text-[clamp(0.9rem,4vw,1.5rem)] text-lime-900 font-semibold">{children} </p>
        <hr />
        <div className="flex items-center my-2 not-sps:my-0 not-sps:mt-1 gap-2">
          <MapPin className="w-6 not-sps:w-4 self-start shrink-0 text-[#768a20]"/>
          <p className="w-fit text-[clamp(0.7rem,3vw,1rem)]">{origin}</p>
        </div>
        <div className="flex items-center gap-2">
          <Leaf className="w-6 not-sps:w-4 self-start shrink-0 text-[#768a20]"/>
          <p className="w-fit text-[clamp(0.7rem,3vw,1rem)]">{tasteProfile}</p>
        </div>
      </div>
    </div>
  )
}