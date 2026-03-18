'use client'

import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface alignment extends React.ComponentProps<"p"> {
  reverse: boolean
  imgSrc: string
}

export default function BrandProfile({ reverse, imgSrc, children }: alignment) {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useGSAP(() => {
    // Define gsap.matchMedia for responsive animation
    const mm = gsap.matchMedia();

    // Make a helper function so no DRY (Don't Repeat Yourself)
    const buildTimeline = (startPosition: string) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top " + startPosition, // Start animating when the top of the container is [startPositon] down the screen
          end: "+=1000", // Pin the container and extend the scroll distance so we have time to read
          pin: true, 
          pinSpacing: true,
          scrub: 1 // Adding a small number makes the scrub feel much smoother!
        }
      })

      tl.to(imgRef.current, {opacity: 1, duration: 1})
      .to(textRef.current, {opacity: 1, duration: 1}, "+0.5") // "-=0.5" makes the text start fading in slightly before the image finishes
      .to({}, {duration: 2}) // This creates a "pause" so the user can read the text while it's pinned
      .to([imgRef.current, textRef.current], {opacity: 0, duration: 1}) // Finally, fade both out before unpinning
    }

    // Laptop/PC and Phone
    mm.add("(min-width: 1024px), (max-width: 499px)", () => {
      buildTimeline("20%")
    })

    // Phone to Tab
    mm.add("(min-width: 500px) and (max-width: 589px)", () => {
      buildTimeline("15%")
    })

    // Tab
    mm.add("(min-width: 590px) and (max-width: 619px)", () => {
      buildTimeline("13%")
    })

    // Tab
    mm.add("(min-width: 620px) and (max-width: 767px)", () => {
      buildTimeline("35%")
    })

    // Tab
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      buildTimeline("27%")
    })
  }, { scope: containerRef })

  return (
    <div className={`flex flex-col gap-10 justify-center items-center ${reverse ? 'hsm:flex-row-reverse' : 'hsm:flex-row'}`} ref={containerRef}>
      <div className={`relative w-full aspect-square max-w-xl opacity-0 ${reverse ? 'hsm:mr-4' : 'hsm:ml-4'}`} ref={imgRef}>
        <div className={`absolute bg-[#768a20]/40 z-0 ${reverse ? 'translate-x-4' : '-translate-x-4'} -translate-y-4 w-full h-full not-hsm:hidden`}></div>
        <div className="relative w-full h-full">
          {
            imgSrc &&
            <Image src={imgSrc} alt="NACA" fill className="z-10 object-cover" sizes="(max-width: 768px) 100vw, 40vw" priority/>
          }
        </div>
      </div>
      
      <div className="w-fit h-fit flex flex-col hsm:min-w-3xs opacity-0" ref={textRef}>
        <p className={`font-lato not-hsm:text-[clamp(1.1rem,2vw,2rem)] hsm:text-[clamp(1rem,2vw,2rem)] md:text-[clamp(1.3rem,2vw,1.8rem)] lg:text-[clamp(1.5rem,2vw,3rem)] not-hsm:text-center w-fit ${reverse ? 'text-end' : 'text-start'}`}>
          {children}
        </p>
      </div>
    </div>
  )
}