'use client'

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function PartnershipCarousel() {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="my-20 relative lg:mt-30">
      <hr className="mb-5"/>

      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />

      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />
      <Slider {...settings}>
        <div className="bg-none px-10">
          <Image src="/partnership/COMMUNION.svg" alt="" width={400} height={200} className="grayscale"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/Heisei.svg" alt="" width={400} height={200} className="grayscale"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/MAGNA.svg" alt="" width={400} height={200} className="grayscale"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/OTCHA.svg" alt="" width={400} height={200} className="grayscale"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/zonahijau.svg" alt="" width={400} height={200} className="grayscale"/>
        </div>
        <div className="bg-none px-10">
          <Image src="/partnership/SugarRush.svg" alt="" width={400} height={200} className="grayscale"/>
        </div>
      </Slider>
      <hr className="mt-5"/>
    </div>
  )
}