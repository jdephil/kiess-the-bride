import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MyMenu from 'src/components/menu'
import moon from 'src/assets/images/moon.png'
import star1 from 'src/assets/images/star_1.png'
import star2 from 'src/assets/images/star_2.png'
import star3 from 'src/assets/images/star_3.png'

export const Stars = () => {
  const container = useRef<HTMLDivElement>(null)

  return (
    <div>
      <div className="fixed left-0 ">
        <img className="ml-36 mt-28 w-6" src={star2} />
        <img className="ml-56 mt-8 w-6" src={star3} />
        <img className="ml-12 mt-4 w-6" src={star1} />
        <img className="ml-72 mt-4 w-6" src={star3} />
      </div>
      <div className="fixed left-0 z-20">
        {/* <img className=" mt-12 w-96" src={starsRight} /> */}
        <img className="ml-[25rem] mt-36 w-6" src={star1} />
        <img className="ml-[34rem] mt-0 w-6" src={star3} />
        <img className="ml-[29rem] mt-6 w-6" src={star2} />
        <img className="ml-[38rem] mt-0 w-6" src={star1} />
      </div>
    </div>
  )
}
