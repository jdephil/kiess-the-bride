import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import star1 from 'src/assets/images/star_1.png'
import star2 from 'src/assets/images/star_2.png'
import star3 from 'src/assets/images/star_3.png'

export const Stars = () => {
  useGSAP(() => {
    gsap.to('.star1', {
      scale: '1.25',
      repeat: -1,
      duration: 0.5,
      yoyo: true,
      ease: 'power1.inOut',
      opacity: 1,

      stagger: { each: 0.3, from: 'random' },
    })
    gsap.to('.star2', {
      scale: '.75',
      repeat: -1,
      duration: 0.75,
      yoyo: true,
      ease: 'power1.inOut',
      opacity: 0.5,

      stagger: { each: 0.5, from: 'random' },
    })
  }) // <-- scope is for selector text (optional)
  return (
    <div className="bg-wedding-green ">
      <div className="left-0 mt-10 md:fixed md:mt-0 ">
        <img className="star1 ml-36 w-6 opacity-50 md:mt-56" src={star2} />
        <img className="star2 ml-56 w-6 opacity-90 md:mt-8" src={star3} />
        <img className="star2 ml-12 w-6 opacity-60 md:mt-4" src={star1} />
        <img className="star1 ml-72 w-6 opacity-30 md:mt-4" src={star3} />
      </div>
      <div className="left-0 z-20 hidden md:fixed ">
        <img className="star1 ml-[25rem] mt-64 w-6 opacity-60" src={star1} />
        <img className="star2 ml-[34rem] mt-0 w-6 opacity-90" src={star3} />
        <img className="star1 ml-[29rem] mt-6 w-6 opacity-50" src={star2} />
        <img className="star2 ml-[38rem] mt-0 w-6 opacity-80" src={star1} />
      </div>
    </div>
  )
}
