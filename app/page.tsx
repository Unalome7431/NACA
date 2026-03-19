import NavBar from "./components/NavBar";
import SmoothScroll from "./components/SmoothScroll";
import PartnershipCarousel from "./components/PartnershipCarousel";
import BrandProfile from "./components/BrandProfile";
import Button from "./components/Button";
import Card from "./components/Card";
import { Question, QuestionTitle, QuestionAnswer, QuestionGroup } from "./components/Question";
import FooterList from "./components/FooterList";
import Image from "next/image";

export default function Home() {

  return (
    <SmoothScroll>
      <NavBar />
      <div id="naca" className="h-screen w-full bg-[url(/matcha-surface.avif)] bg-center shadow-[inset_0_-280px_200px_-100px_rgba(255,255,255,1)] px-10 pt-10 select-none">
        <div className="flex not-md:flex-col not-md:justify-center mt-15 gap-[clamp(2rem,20vw,6rem)]">
          <p className="text-white font-elsie md:text-[clamp(2rem,15vw,5rem)] not-md:text-[clamp(2rem,15vw,4.5rem)] xl:text-[clamp(3rem,5vw,5.5rem)] w-fit sm:w-100 md:w-80 short:text-[6vw]">The <span className="text-lime-900 bg-black">Green</span> Version <br className="hidden md:flex"/> to
          <br className="hidden not-sm:flex"/> Your <span className="text-black bg-lime-900">Coffee</span></p>
          <p className="text-white drop-shadow-2xl drop-shadow-black font-lato text-[clamp(0.5rem,3vw,1.2rem)] w-fit ml-10 text-justify md:ml-30 lg:ml-80 xl:ml-120 content-end my-5">Elevate your daily ritual with our curated collection of authentic, imported matcha. From vibrant ceremonial grades to versatile culinary blends, experience the pure, antioxidant-rich essence of Japan in every whisk.</p>
        </div>
      </div>

      <div id="story" className="h-full w-full px-10 selection:bg-[#768a20] selection:text-white">
        <BrandProfile reverse={true} imgSrc="/NACA.png">
          Born in the heart of Tangerang, our journey began not in a boardroom, but from a profound observation of the "modern rush"—the collective loss of stillness in our daily lives.
        </BrandProfile>
        <BrandProfile reverse={false} imgSrc="/tea-fields.jpg">
          To find the antidote, we traveled to the misty hills of Uji, Fukuoka and Kagoshima, researching the ancient lineage of tea to bridge the gap between Japanese tradition and the Indonesian spirit.
        </BrandProfile>
        <BrandProfile reverse={true} imgSrc="/matcha-whisk.jpg">
          We built <span className="text-[#768a20] font-elsie">NACA</span> because we believe that in an increasingly chaotic world, the simple, focused act of whisking matcha serves as a secular prayer—a vibrant, emerald bridge back to mindfulness and internal clarity.
        </BrandProfile>
      </div>
      <PartnershipCarousel />

      <div className="h-full w-full px-10 flex justify-center">
        <div className="flex not-md:flex-col gap-10 relative selection:bg-[#768a20] selection:text-white">
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

      <div id="faq" className="h-full w-full px-10 pt-40 mt-10 flex flex-col items-center selection:bg-[#768a20] selection:text-white">
        <p className="font-elsie text-5xl text-[#768a20] mb-10">Frequently Asked Question</p>
        <QuestionGroup>
          <Question id="1">
            <QuestionTitle >
              Where exactly does <span className="font-elsie text-[#768a20] font-normal">NACA</span> matcha come from?
            </QuestionTitle>
            <QuestionAnswer>
              Our leaves are harvested from the misty, high-altitude hills of Uji, Fukuoka and Kagoshima, Japan. We partner with heritage tea estates that have perfected the art of shading and stone-milling for generations, ensuring every tin captures the "emerald bridge" we promise.
            </QuestionAnswer>
          </Question>
          <Question id="2">
            <QuestionTitle >
              What makes your matcha "Ceremonial Grade"?
            </QuestionTitle>
            <QuestionAnswer>
              "Ceremonial" refers to the highest quality of tea, intended to be enjoyed whisked with water alone. We use only the first harvest (shincha)—the youngest, most tender leaves from the top of the plant—resulting in a vibrant green color and a naturally sweet, umami-rich flavor with zero bitterness.
            </QuestionAnswer>
          </Question>
          <Question id="3">
            <QuestionTitle >
              Do I really need a bamboo whisk (chasen)?
            </QuestionTitle>
            <QuestionAnswer>
              While you can use a hand-held frother, a bamboo whisk is the traditional tool for a reason. Its 100 fine tines break up clumps and aerate the tea, creating that signature "creamy froth" that defines the <span className="font-elsie text-[#768a20]">NACA</span> experience.
            </QuestionAnswer>
          </Question>
          <Question id="4">
            <QuestionTitle >
              Is it okay to add milk or sweeteners?
            </QuestionTitle>
            <QuestionAnswer>
              While our ceremonial grade is designed to be sipped pure, we believe mindfulness is a personal journey. If a splash of oat milk or a touch of honey helps you find your "stillness," then by all means, enjoy it your way.
            </QuestionAnswer>
          </Question>
          <Question id="5">
            <QuestionTitle >
              How much caffeine is in a serving?
            </QuestionTitle>
            <QuestionAnswer>
              One bowl of <span className="font-elsie text-[#768a20]">NACA</span> matcha contains about 35-70mg of caffeine (roughly 1/3 of a cup of coffee). However, because of the high concentration of L-theanine, the energy is released slowly, providing "calm alertness" without the jittery crash of coffee.
            </QuestionAnswer>
          </Question>
        </QuestionGroup>
        <div className="flex flex-col items-center gap-5 mt-10">
          <p className="font-lato text-2xl text-[#768a20] font-semibold">Any more question?</p>
          <Button >
            Contact Us
          </Button>
        </div>
      </div>

      <div id="footer" className="h-full w-full pb-10 pt-80 mt-30 bg-linear-0 from-[#768a20] from-40% to-white">
        <div className="px-10 flex lg:justify-between not-lg:flex-col items-start lg:items-start hsm:items-center select-none">
          <div className="flex">
            <span className="font-elsie text-white sm:text-[12rem] xl:text-[12rem] lg:text-[10rem] not-sm:text-[clamp(7rem,30vw,10rem)]">NACA</span>
            <div className="rounded-t w-[3px] bg-white ml-10 not-lg:hidden"></div>
          </div>
          <div className="font-lato flex xl:gap-20 lg:gap-10 gap-20 text-white not-hsm:flex-col not-hsm:gap-7">
            <FooterList title="Quick Links" listItem={["Story", "Specialty", "FAQ"]} />
            <FooterList title="Partnership" listItem={["Affiliates", "Wholesale", "Dropship"]} />
            <ul className="space-y-0.5">
              <p className="font-semibold pb-2 text-lg">Office</p>
              <div className="hover:underline hover:cursor-pointer">
                <li className="not-lg:underline">NACA Headquarters</li>
                <li className="not-lg:underline">Jl. Jalur Sutera Barat No. 17</li>
                <li className="not-lg:underline">Alam Sutera, Tangerang</li>
                <li className="not-lg:underline">Banten 15143</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="items-center not-lg:flex hidden px-10 justify-center py-10 flex-col select-none">
          <p className="font-lato text-white font-semibold pb-2.5 text-xl">Contact Us</p>
          <div className="flex gap-5">
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/instagram.png" alt="Instagram" width={30} height={30} className="p-1"/>} />
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/tiktok.png" alt="Tiktok" width={30} height={30} className="p-1" />} />
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/whatsapp.png" alt="Whatsapp" width={30} height={30} className="p-1" />} />
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/x.png" alt="X" width={30} height={30} className="p-1"/>} />
          </div>
        </div>
        <div className="rounded h-[3px] bg-white"></div>
        <div className="px-10 pt-5 pb-10 lg:pb-30 flex justify-center lg:justify-between not-hsm:justify-between select-none">
          <p className="text-white font-lato not-hsm:hidden">© 2026 NACA. All rights reserved. | <span className="hover:underline hover:cursor-pointer not-lg:underline">Privacy Policy</span> | <span className="hover:underline hover:cursor-pointer not-lg:underline">Terms of Service</span></p>
          <p className="text-white font-lato hsm:hidden">© 2026 NACA. All rights reserved.<br /><span className="underline">Privacy Policy</span><br /><span className="underline">Terms of Service</span></p>
          <div className="flex gap-5 items-center not-lg:hidden">
            <p className="font-lato text-white font-semibold text-xl">Contact Us</p>
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/instagram.png" alt="Instagram" width={30} height={30} className="p-1"/>} />
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/tiktok.png" alt="Tiktok" width={30} height={30} className="p-1" />} />
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/whatsapp.png" alt="Whatsapp" width={30} height={30} className="p-1" />} />
            <Button variant="secondary" position="w-fit" icon={<Image src="/social/x.png" alt="X" width={30} height={30} className="p-1"/>} />
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}
