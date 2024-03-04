import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MyMenu from 'src/components/menu'
import moon from 'src/assets/images/moon.png'
import star1 from 'src/assets/images/star_1.png'
import star2 from 'src/assets/images/star_2.png'
import star3 from 'src/assets/images/star_3.png'

export const Stars = () => {
  const stars = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    // const el = registry.current
    // gsap code here...

    // gsap.to('.main', {
    //   marginTop: 40,
    //   delay: 5,
    //   duration: 3,
    // })
    gsap.to('.star1', {
      scale: '1.25',
      repeat: -1,
      duration: 0.75,
      yoyo: true,
      ease: 'power1.inOut',
      opacity: 1,
      // startAt: {
      //   opacity: '50%',
      // },
      stagger: { each: 0.3, from: 'random' },
    })
    gsap.to('.star2', {
      scale: '.75',
      repeat: -1,
      duration: 0.25,
      yoyo: true,
      ease: 'power1.inOut',
      opacity: 0.5,
      // startAt: {
      //   opacity: '50%',
      // },
      stagger: { each: 0.5, from: 'random' },
    })
    gsap.to('.content', {
      overflowY: 'scroll',
      delay: 5,
    })

    // gsap.to('.lake', {
    //   scrollTrigger: { trigger: el }, // start the animation when ".box" enters the viewport (once)
    //   x: 500,
    //   display: 'block',
    //   position: 'absolute',
    // })
  }) // <-- scope is for selector text (optional)
  return (
    <div>
      <div className="fixed left-0 ">
        <img className="star1 ml-36 mt-56 w-6 opacity-50" src={star2} />
        <img className="star2 ml-56 mt-8 w-6 opacity-90" src={star3} />
        <img className="star2 ml-12 mt-4 w-6 opacity-60" src={star1} />
        <img className="star1 ml-72 mt-4 w-6 opacity-30" src={star3} />
      </div>
      <div className="fixed left-0 z-20">
        {/* <img className=" mt-12 w-96" src={starsRight} /> */}
        <img className="star1 ml-[25rem] mt-64 w-6 opacity-60" src={star1} />
        <img className="star2 ml-[34rem] mt-0 w-6 opacity-90" src={star3} />
        <img className="star1 ml-[29rem] mt-6 w-6 opacity-50" src={star2} />
        <img className="star2 ml-[38rem] mt-0 w-6 opacity-80" src={star1} />
      </div>
    </div>
  )
}
