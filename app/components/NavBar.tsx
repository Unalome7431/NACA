'use client'

import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (!target) return
    target.scrollIntoView({ behavior: "smooth"})
    setIsOpen(false)
  }

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
  }, { scope: navRef })

  useEffect(() => {
    const footer = document.getElementById('footer')
    if (!footer) return

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        gsap.to(navRef.current, {
          display: "none",
          opacity: 0,
          duration: 0.7,
        })
      } else {
        gsap.to(navRef.current, {
          display: "flex",
          opacity: 1,
          duration: 0.7
        })
      }
    }, { root: null, rootMargin: "0px 0px -750px 0px", threshold: 0 })

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed w-full top-0 z-50 p-10 pb-0 flex flex-row text-white justify-between font-elsie items-center select-none" ref={navRef}>
      <span className="text-3xl relative z-50 cursor-pointer" onClick={(e: any) => handleNavClick(e, 'naca')}>NACA</span>

      <div className="hidden flex-row gap-10 text-xl md:flex">
        <a className="hover:underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'story')} href="#story">Story</a>
        <a className="hover:underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'specialty')} href="#specialty">Specialty</a>
        <a className="hover:underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'faq')} href="#faq">FAQ</a>
        <a className="hover:underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'footer')} href="#footer">Contact</a>
      </div>

      <div className="flex flex-col md:hidden space-y-1.5 cursor-pointer relative z-50" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar w-8 h-[3px] bg-white rounded-full transition-all duration-700 ease-in-out ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></div>
        <div className={`bar w-8 h-[3px] bg-white rounded-full transition-all duration-700 ease-in-out ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></div>
        <div className={`bar w-8 h-[3px] bg-white rounded-full transition-all duration-700 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></div>
      </div>

      <div className={`absolute w-screen h-[770px] rounded-[35vw] rounded-br-none bg-lime-950/80 -top-300 left-0 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-170' : ''} md:hidden`}>
        <div className="flex flex-col text-end absolute right-10 bottom-6 gap-3">
          <a className="underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'story')} href="#story">Story</a>
          <a className="underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'specialty')} href="#specialty">Specialty</a>
          <a className="underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'faq')} href="#faq">FAQ</a>
          <a className="underline underline-offset-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'footer')} href="#footer">Contact</a>
        </div>
      </div>
    </nav>
  )
}
