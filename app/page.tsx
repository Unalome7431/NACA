import NavBar from "./components/NavBar";
import SmoothScroll from "./components/SmoothScroll";
import PartnershipCarousel from "./components/PartnershipCarousel";
import Image from "next/image";
import Button from "./components/Button";
import Card from "./components/Card";

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

      <div className="h-full w-full px-10">
        <div className="flex flex-col hsm:flex-row mt-20 gap-10">
          <div className="relative ml-4 shadow-2xl">
            <div className="absolute bg-[#768a20]/40 z-0 -translate-y-4 -translate-x-4 w-full h-full"></div>
            <Image src='/NACA.png' alt="NACA" width={690} height={464} className="relative z-10 not-md:w-full not-md:h-auto object-contain md:object-cover"/>
          </div>
          <div className="w-fit flex flex-col hsm:min-w-3xs">
            <p className="font-quicksand not-hsm:text-[clamp(0.9rem,1.7vw,2rem)] hsm:text-[clamp(0.6rem,1.5vw,2rem)] md:text-[clamp(0.7rem,1.4vw,1.5rem)] lg:text-[clamp(1rem,1.5vw,1.5rem)] text-justify">Born in the heart of Tangerang, our journey began not in a boardroom, but from a profound observation of the "modern rush"—the collective loss of stillness in our daily lives. To find the antidote, we traveled to the misty hills of Uji and Shizuoka, researching the ancient lineage of tea to bridge the gap between Japanese tradition and the Indonesian spirit. We built <span className="text-[#768a20] font-elsie">NACA</span> because we believe that in an increasingly chaotic world, the simple, focused act of whisking matcha serves as a secular prayer—a vibrant, emerald bridge back to mindfulness and internal clarity.</p>
            <Button position="hsm:mt-auto mt-10 content-center" font="font-quicksand" className="hsm:w-40 md:w-60" size="full">
              Explore Our Specialty
            </Button>
          </div>
        </div>
        <PartnershipCarousel />
      </div>

      <div className="h-full w-full px-10 flex justify-center">
        <div className="flex not-md:flex-col gap-10">
          <div>
            <h1 className="text-5xl font-elsie text-[#768a20] mb-10 not-md:mb-0 w-fit max-w-120 md:text-5xl">NACA comes with lot of varieties
            </h1>
            <Button size="full" className="not-md:hidden md:w-60">
              Get yours now
            </Button>
          </div>
          <div className="flex flex-col gap-5">
            <Card imgSrc="/matcha/gekko-no-shizuku.png">
              Gekko-no-Shizuku
            </Card>
            <Card imgSrc="/matcha/hisui-no-homura.jpg">
              Hisui-no-Homura
            </Card>
            <Card imgSrc="/matcha/kasumi-no-ato.png">
              Kasumi-no-Ato
            </Card>
            <Card imgSrc="/matcha/komorobi-en.png">
              Komorobi-en
            </Card>
            <Card imgSrc="/matcha/seifu-no-mori.jpg">
              Seifu-no-Mori
            </Card>
            <Button size="full" className="md:w-60">
              Get yours now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-screen w-full px-10 bg-[#768a20] shadow-[inset_0_300px_150px_-140px_rgba(256,256,256,1)]">

      </div>
    </SmoothScroll>
  );
}
