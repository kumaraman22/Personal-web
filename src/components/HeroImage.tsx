import logo from "../../public/Aman.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
        <div className="w-[450px] h-[450px] rounded-full border-[6px] border-gray overflow-hidden shadow-lg mx-auto">
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        width={1000}
        height={1000}
        className="object-cover"
      />
    </div>
        </>
    )
}
export default HeroImage