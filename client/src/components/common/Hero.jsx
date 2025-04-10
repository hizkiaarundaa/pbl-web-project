import Cta from "../ui/Cta.jsx"
import HeroImage from "../ui/HeroImage.jsx"
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  return (
    <main className="xl:flex xl:px-4 mt-8 xl:gap-4 sm:px-4 sm:justify-center">
      <div className="wrapper h-full flex-col justify-center items-center xl:w-1/2 max-h-full xl:gap-16 lg:w-full md:w-full sm:w-full md:gap-8 sm:gap-4 ">
        <h1 className="md:text-2xl lg:text-4xl xl:text-8xl font-bold ">DaurAksi</h1>
        <p className="text-justify xl:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium a saepe laboriosam molestiae cumque quos
          enim fuga dolore amet quibusdam!
        </p>
        <div className="wrapper gap-8 w-full justify-center">
          <Cta title="Gabung Sekarang" icon={faArrowAltCircleRight} />
          <Cta title="Komunitas DaurAksi" icon={faUsers} />
        </div>
      </div>
      <HeroImage />
    </main>
  )
}

export default Hero
