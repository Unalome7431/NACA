'use client'

import { useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      start: 500,
      onEnter: () => {
        gsap.to(navRef.current, {
          color: '#768a20',
          duration: 0.7
        }),
        gsap.to('.bar', {
          backgroundColor: '#768a20',
          duration: 0.01
        })
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          color: '#FFFFFF',
          duration: 0.7
        }),
        gsap.to('.bar', {
          backgroundColor: '#FFFFFF',
          duration: 0.01
        })
      }
    })
  }, {scope: navRef})

  return (
    <nav className="fixed w-full top-0 z-50 p-10 pb-0 flex flex-row text-white justify-between font-elsie items-center" ref={navRef}>
      <span className="text-3xl relative z-50">NACA</span>

      <div className="hidden flex-row gap-10 text-xl md:flex">
        <a href="/">About</a>
        <a href="/">Specialty</a>
        <a href="/">FAQ</a>
        <a href="/">Contact</a>
      </div>

      <div className="flex flex-col md:hidden space-y-1.5 cursor-pointer relative z-50" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar w-8 h-[3px] bg-white rounded-full transition-all duration-700 ease-in-out ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></div>
        <div className={`bar w-8 h-[3px] bg-white rounded-full transition-all duration-700 ease-in-out ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></div>
        <div className={`bar w-8 h-[3px] bg-white rounded-full transition-all duration-700 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></div>
      </div>

      <div className={`absolute w-screen h-[770px] rounded-[35vw] rounded-br-none bg-lime-950 -top-300 left-0 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-170' : ''} md:hidden`}>
        <div className="flex flex-col text-end absolute right-10 bottom-6 gap-3">
          <a href="/">About</a>
          <a href="/">Specialty</a>
          <a href="/">FAQ</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </nav>
  )
}