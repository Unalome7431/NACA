import NavBar from "./components/NavBar";
import SmoothScroll from "./components/SmoothScroll";

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
        Hello
      </div>
      <div className="h-screen w-full px-10">

      </div>
    </SmoothScroll>
  );
}
