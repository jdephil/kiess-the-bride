import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MyMenu from 'src/components/menu'
import moon from 'src/assets/images/moon.png'
import star1 from 'src/assets/images/star_1.png'
import star2 from 'src/assets/images/star_2.png'
import star3 from 'src/assets/images/star_3.png'

export const Heading = () => {
  const container = useRef<HTMLDivElement>(null)

  return (
    <div>
      <div className="fixed left-0 ">
        <img className="ml-44 mt-14 w-8" src={star2} />
        <img className="ml-72 mt-12 w-8" src={star3} />
        <img className="ml-10 mt-4 w-8" src={star1} />
        <img className="ml-96 mt-4 w-8" src={star3} />
      </div>
      <div className="fixed right-0">
        {/* <img className=" mt-12 w-96" src={starsRight} /> */}
        <img className="mr-44 mt-14 w-8" src={star2} />
        <img className="mr-72 mt-12 w-8" src={star1} />
        <img className="mr-10 mt-4 w-8" src={star1} />
        <img className="mr-96 mt-4 w-8" src={star3} />
      </div>
    </div>
  )
}
