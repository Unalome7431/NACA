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
  imgSrc: string
}

export default function BrandProfile({ buttonAvail, reverse, imgSrc, children }: alignment) {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useGSAP(() => {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px), (max-width: 499px)", () => {
      // We create ONE master timeline to handle the whole sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Start animating when the top of the container is 80% down the screen
          start: "top 20%", 
          // Pin the container and extend the scroll distance so we have time to read
          end: "+=1000", 
          pin: true,
          scrub: 1 // Adding a small number makes the scrub feel much smoother!
        }
      })

      tl.to(imgRef.current, { opacity: 1, duration: 1 })
      .to(textRef.current, { opacity: 1, duration: 1 }, "-=0.5") // "-=0.5" makes the text start fading in slightly before the image finishes
      .to({}, { duration: 2 }) // This creates a "pause" so the user can read the text while it's pinned 
      .to([imgRef.current, textRef.current], { opacity: 0, duration: 1 }) // Finally, fade both out before unpinning
    })

    // In between tab and laptop sizing
    mm.add("(min-width: 500px) and (max-width: 589px)", () => {
      // We create ONE master timeline to handle the whole sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Start animating when the top of the container is 80% down the screen
          start: "top 15%", 
          // Pin the container and extend the scroll distance so we have time to read
          end: "+=1000", 
          pin: true,
          scrub: 1 // Adding a small number makes the scrub feel much smoother!
        }
      })

      tl.to(imgRef.current, { opacity: 1, duration: 1 })
      .to(textRef.current, { opacity: 1, duration: 1 }, "-=0.5") // "-=0.5" makes the text start fading in slightly before the image finishes
      .to({}, { duration: 2 }) // This creates a "pause" so the user can read the text while it's pinned 
      .to([imgRef.current, textRef.current], { opacity: 0, duration: 1 }) // Finally, fade both out before unpinning
    })

    // In between tab and laptop sizing
    mm.add("(min-width: 590px) and (max-width: 619px)", () => {
      // We create ONE master timeline to handle the whole sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Start animating when the top of the container is 80% down the screen
          start: "top 13%", 
          // Pin the container and extend the scroll distance so we have time to read
          end: "+=1000", 
          pin: true,
          scrub: 1 // Adding a small number makes the scrub feel much smoother!
        }
      })

      tl.to(imgRef.current, { opacity: 1, duration: 1 })
      .to(textRef.current, { opacity: 1, duration: 1 }, "-=0.5") // "-=0.5" makes the text start fading in slightly before the image finishes
      .to({}, { duration: 2 }) // This creates a "pause" so the user can read the text while it's pinned 
      .to([imgRef.current, textRef.current], { opacity: 0, duration: 1 }) // Finally, fade both out before unpinning
    })

    // In between tab and laptop sizing
    mm.add("(min-width: 620px) and (max-width: 767px)", () => {
      // We create ONE master timeline to handle the whole sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Start animating when the top of the container is 80% down the screen
          start: "top 35%", 
          // Pin the container and extend the scroll distance so we have time to read
          end: "+=1000", 
          pin: true,
          scrub: 1 // Adding a small number makes the scrub feel much smoother!
        }
      })

      tl.to(imgRef.current, { opacity: 1, duration: 1 })
      .to(textRef.current, { opacity: 1, duration: 1 }, "-=0.5") // "-=0.5" makes the text start fading in slightly before the image finishes
      .to({}, { duration: 2 }) // This creates a "pause" so the user can read the text while it's pinned 
      .to([imgRef.current, textRef.current], { opacity: 0, duration: 1 }) // Finally, fade both out before unpinning
    })

    // Phone and tab
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      // We create ONE master timeline to handle the whole sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Start animating when the top of the container is 80% down the screen
          start: "top 27%", 
          // Pin the container and extend the scroll distance so we have time to read
          end: "+=1000", 
          pin: true,
          scrub: 1 // Adding a small number makes the scrub feel much smoother!
        }
      })

      tl.to(imgRef.current, { opacity: 1, duration: 1 })
      .to(textRef.current, { opacity: 1, duration: 1 }, "-=0.5") // "-=0.5" makes the text start fading in slightly before the image finishes
      .to({}, { duration: 2 }) // This creates a "pause" so the user can read the text while it's pinned 
      .to([imgRef.current, textRef.current], { opacity: 0, duration: 1 }) // Finally, fade both out before unpinning
    })
  }, { scope: containerRef })

  return (
    <div className={`flex flex-col gap-10 justify-center items-center ${reverse ? 'hsm:flex-row-reverse' : 'hsm:flex-row'}`} ref={containerRef}>
      {/* Added opacity-0 to fix the server-side flash */}
      <div className={`relative w-full aspect-square max-w-xl opacity-0 ${reverse ? 'hsm:mr-4' : 'hsm:ml-4'}`} ref={imgRef}>
        <div className={`absolute bg-[#768a20]/40 z-0 ${reverse ? 'translate-x-4' : '-translate-x-4'} -translate-y-4 w-full h-full not-hsm:hidden`}></div>
        <div className="relative w-full h-full">
          {
            imgSrc &&
            <Image src={imgSrc} alt="NACA" fill className="z-10 object-cover" sizes="(max-width: 768px) 100vw, 40vw" priority/>
          }
        </div>
      </div>
      
      {/* Added opacity-0 to fix the server-side flash */}
      <div className="w-fit h-fit flex flex-col hsm:min-w-3xs opacity-0" ref={textRef}>
        <p className={`font-lato not-hsm:text-[clamp(1.1rem,2vw,2rem)] hsm:text-[clamp(1rem,2vw,2rem)] md:text-[clamp(1.3rem,2vw,1.8rem)] lg:text-[clamp(1.5rem,2vw,3rem)] not-hsm:text-center w-fit ${reverse ? 'text-end' : 'text-start'}`}>
          {children}
        </p>
        {
          buttonAvail &&
          <Button position={`mt-10 content-center ${reverse ? 'self-end' : ''}`} font="font-lato" className="hsm:w-40 md:w-60" size="full">
            Explore Our Specialty
          </Button>
        }
      </div>
    </div>
  )
}