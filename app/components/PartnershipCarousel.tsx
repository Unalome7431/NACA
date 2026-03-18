'use client'

import React, { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { useState } from "react";

export default function PartnershipCarousel() {
  const { width } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  const getSlideToShow = () => {
    if (width < 480) return 1
    if (width < 600) return 2
    if (width < 1024) return 3
    if (width < 1440) return 4
    return 5
  }

  const settings = {
    infinite: true,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: getSlideToShow(),
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: "linear",
    pauseOnHover: false,
  };

  if (!isClient) {
    return (
      <div className="my-20 relative lg:mt-30 opacity-0">
        <hr className="mb-5"/>
        <div className="h-24" /> {/* Placeholder height to prevent layout shift */}
        <hr className="mt-5"/>
      </div>
    )
  }

  return (
    <div className="m-20 relative lg:mt-30">
      <hr className="mb-5"/>

      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />

      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />
      <Slider {...settings}>
        <div className="bg-none px-10">
          <Image src="/partnership/COMMUNION.svg" alt="" width={400} height={200} className="grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/Heisei.svg" alt="" width={400} height={200} className="grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/MAGNA.svg" alt="" width={400} height={200} className="grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/OTCHA.svg" alt="" width={400} height={200} className="grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/zonahijau.svg" alt="" width={400} height={200} className="grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/SugarRush.svg" alt="" width={400} height={200} className="grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
      </Slider>
      <hr className="mt-5"/>
    </div>
  )
}