'use client'

import Image from "next/image"
import Button from "./Button"
import { useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface alignment extends React.ComponentProps<"p"> {
  buttonAvail: boolean
  reverse: boolean
  imgSrc?: string
}

export default function BrandProfile({ buttonAvail, reverse, imgSrc, children }: alignment) {
  let isImg = false;
  const profileRef = useRef(null)

  if (imgSrc) isImg = true;

  useGSAP(() => {
    gsap.to(profileRef.current, {
      scrollTrigger: {
        trigger: profileRef.current,
        start: isImg ? 'top top+=50' : "top top+=200", // Start pinning and fading when it reaches near the top
        end: "+=700", // Keep it pinned for 600px of scrolling while it fades
        pin: true, // GSAP will hold it in place natively
        pinSpacing: true, // Don't add empty space below it when pinned so the next one can slide up underneath
        scrub: true, // Tie opacity directly to scroll position
      },
      opacity: 0,
    })
  }, {scope: profileRef})

  return (
    <div className={`flex flex-col ${reverse ? 'hsm:flex-row-reverse' : 'hsm:flex-row'} ${isImg ? 'justify-center' : ''} mt-20 top-30`} ref={profileRef}>
      {
        isImg &&
        <div className="flex justify-around w-full flex-col hsm:flex-row hsm:space-x-2 not-hsm:mt-20 hsm:mt-20 md:mt-10 lg:mt-0">
          <Button position="not-hsm:hidden">
            Explore Our Specialty
          </Button>
          <div className="relative ml-4">
            <div className={`absolute bg-[#768a20]/40 z-0 ${reverse ? 'translate-x-4' : '-translate-x-4'} -translate-y-4  w-full h-full`}></div>
            <Image src={imgSrc || ''} alt="NACA" width={690} height={464} className="relative z-10 not-md:w-full not-md:h-auto object-contain md:object-cover"/>
          </div>
          <Button position="self-end hsm:w-60 not-hsm:mt-10" size="full" >
            Explore Our Specialty
          </Button>
        </div>
      }
      {
        !isImg &&
        <div className="w-fit h-fit flex flex-col hsm:min-w-3xs">
          <p className={`font-lato not-hsm:text-[clamp(1.1rem,2vw,2rem)] hsm:text-[clamp(1rem,2vw,2rem)] md:text-[clamp(1.3rem,2vw,1.8rem)] lg:text-[clamp(1.5rem,2vw,3rem)] not-hsm:text-center not-hsm:w-fit hsm:w-100 md:w-100 lg:w-200 ${reverse ? 'text-end' : 'text-start'}`}>
            {children}
          </p>
          {
            buttonAvail &&
            <Button position={`mt-10 content-center ${reverse ? 'self-end' : ''}`} font="font-lato" className="hsm:w-40 md:w-60" size="full">
              Explore Our Specialty
            </Button>
          }
        </div>
      }
    </div>
  )
}