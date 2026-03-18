import NavBar from "./components/NavBar";
import SmoothScroll from "./components/SmoothScroll";
import PartnershipCarousel from "./components/PartnershipCarousel";
import BrandProfile from "./components/BrandProfile";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {

  return (
    <SmoothScroll>
      <NavBar />
      <div  className="h-screen w-full bg-[url(/matcha-surface.avif)] bg-center shadow-[inset_0_-280px_200px_-100px_rgba(255,255,255,1)] px-10 pt-10">
        <div className="flex not-md:flex-col not-md:justify-center mt-15 gap-[clamp(2rem,20vw,6rem)]">
          <p className="text-white font-elsie md:text-[clamp(2rem,15vw,5rem)] not-md:text-[clamp(2rem,15vw,4.5rem)] xl:text-[clamp(3rem,5vw,5.5rem)] w-fit sm:w-100 md:w-80 short:text-[6vw]">The <span className="text-lime-900 bg-black">Green</span> Version <br className="hidden md:flex"/> to
          <br className="hidden not-sm:flex"/> Your <span className="text-black bg-lime-900">Coffee</span></p>
          <p className="text-white drop-shadow-2xl drop-shadow-black font-lato text-[clamp(0.5rem,3vw,1.2rem)] w-fit ml-10 text-justify md:ml-30 lg:ml-80 xl:ml-120 content-end my-5">Elevate your daily ritual with our curated collection of authentic, imported matcha. From vibrant ceremonial grades to versatile culinary blends, experience the pure, antioxidant-rich essence of Japan in every whisk.</p>
        </div>
      </div>

      <div className="h-full w-full px-10">
        <BrandProfile buttonAvail={false} reverse={true} imgSrc="/NACA.png">
          Born in the heart of Tangerang, our journey began not in a boardroom, but from a profound observation of the "modern rush"—the collective loss of stillness in our daily lives.
        </BrandProfile>
        <BrandProfile buttonAvail={false} reverse={false} imgSrc="/tea-fields.jpg">
          To find the antidote, we traveled to the misty hills of Uji and Fukuoka, researching the ancient lineage of tea to bridge the gap between Japanese tradition and the Indonesian spirit.
        </BrandProfile>
        <BrandProfile buttonAvail={false} reverse={true} imgSrc="/matcha-whisk.jpg">
          We built <span className="text-[#768a20] font-elsie">NACA</span> because we believe that in an increasingly chaotic world, the simple, focused act of whisking matcha serves as a secular prayer—a vibrant, emerald bridge back to mindfulness and internal clarity.
        </BrandProfile>
      </div>
      <PartnershipCarousel />

      <div className="h-full w-full px-10 flex justify-center">
        <div className="flex not-md:flex-col gap-10 relative">
          <div className="md:sticky md:top-20 md:self-start">
            <h1 className="text-5xl font-elsie text-[#768a20] mb-10 not-md:mb-0 not-md:text-center w-fit max-w-120 md:text-5xl">Explore our diverse selection of matcha varieties
            </h1>
            <Button size="full" className="not-md:hidden md:w-60">
              Get Yours Now
            </Button>
          </div>
          <div className="flex flex-col gap-5">
            <Card imgSrc="/matcha/seifu-no-mori.jpg" origin="Uji, Kyoto" tasteProfile="Rich, Umami, Creamy">
              Seifu-no-Mori
            </Card>
            <Card imgSrc="/matcha/hisui-no-homura.jpg" origin="Uji, Kyoto" tasteProfile="Nutty, Floral, Velvety">
              Hisui-no-Homura
            </Card>
            <Card imgSrc="/matcha/gekko-no-shizuku.png" origin="Yame, Fukuoka" tasteProfile="Chocolatey, Earthy, Sweet">
              Gekko-no-Shizuku
            </Card>
            <Card imgSrc="/matcha/kasumi-no-ato.png" origin="Uji, Kyoto" tasteProfile="Clean, Grassy, Crisp">
              Kasumi-no-Ato
            </Card>
            <Card imgSrc="/matcha/komorobi-en.png" origin="Kagoshima, Kagoshima" tasteProfile="Balanced, Light, Refreshing">
              Komorobi-en
            </Card>
            <Button size="full" className="md:hidden">
              Get Yours Now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-screen w-full px-10 bg-[#768a20] shadow-[inset_0_300px_150px_-140px_rgba(256,256,256,1)]">

      </div>
    </SmoothScroll>
  );
}
