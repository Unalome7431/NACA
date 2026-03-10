import NavBar from "./components/NavBar";
import SmoothScroll from "./components/SmoothScroll";
import Image from "next/image";
import Button from "./components/Button";
import { Instagram } from "lucide-react";

export default function Home() {
  

  return (
    <SmoothScroll>
      <NavBar />
      <div  className="h-screen w-full bg-[url(/matcha-surface.avif)] bg-center shadow-[inset_0_-300px_200px_-100px_rgba(256,256,256,1)] px-10 pt-10">
        <div className="flex not-md:flex-col not-md:justify-center mt-15 gap-[clamp(2rem,20vw,6rem)]">
          <p className="text-white font-elsie text-[clamp(2rem,15vw,4.5rem)] w-fit sm:w-100 md:w-80 short:text-[6vw]">The <span className="text-lime-900 bg-black">Green</span> Version <br className="hidden md:flex"/> to
          <br className="hidden not-sm:flex"/> Your <span className="text-black bg-lime-900">Coffee</span></p>
          <p className="text-white drop-shadow-2xl drop-shadow-black font-semibold font-quicksand text-[clamp(0.5rem,3vw,1rem)] w-fit ml-20 text-justify md:ml-30 lg:ml-80 content-end my-5">Elevate your daily ritual with our curated collection of authentic, imported matcha. From vibrant ceremonial grades to versatile culinary blends, experience the pure, antioxidant-rich essence of Japan in every whisk.</p>
        </div>
      </div>
      <div className="h-screen w-full px-10">
        <div className="flex flex-col hmd:flex-row mt-20 gap-10">
          <div className="relative ml-4">
            <div className="absolute bg-[#768a20]/40 z-0 -translate-y-4 -translate-x-4 w-full h-full rounded-2xl"></div>
            {/*
            <div className="relative lg:w-150 lg:h-120 w-auto h-120">
              <Image src='/NACA.png' alt="NACA" fill className="rounded-2xl relative z-10"/>
            </div>
            */}
            <Image src='/NACA.png' alt="NACA" width={990} height={864} className="rounded-2xl relative z-10 not-md:w-full not-md:h-auto object-contain md:object-cover"/>
          </div>
          <div className="w-fit flex flex-col">
            <p className="font-quicksand hmd:text-[clamp(1rem,1.7vw,1.5rem)] not-hmd:text-[clamp(1rem,1.8vw,1.5rem)] text-justify">Born in the heart of Tangerang, our journey began not in a boardroom, but from a profound observation of the "modern rush"—the collective loss of stillness in our daily lives. To find the antidote, we traveled to the misty hills of Uji and Shizuoka, researching the ancient lineage of tea to bridge the gap between Japanese tradition and the Indonesian spirit. We built <span className="text-[#768a20] font-elsie">NACA</span> because we believe that in an increasingly chaotic world, the simple, focused act of whisking matcha serves as a secular prayer—a vibrant, emerald bridge back to mindfulness and internal clarity.</p>
            <Button className="mt-auto" icon={<Instagram />}>
              Learn More
            </Button>
          </div>
        </div>
        
      </div>
      <div className="h-screen w-full px-10">

      </div>
    </SmoothScroll>
  );
}
