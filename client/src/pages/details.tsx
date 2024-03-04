import { useEffect } from 'react'
import { Stars } from 'src/components/stars'
import forestLeft from 'src/assets/images/nightime_forest_left.png'
import forestRight from 'src/assets/images/nighttime_forest_right.png'
import moon from 'src/assets/images/moon.png'
import nightLake from 'src/assets/images/lake-night.png'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MyMenu from 'src/components/menu'
import Registry from 'src/components/registry'
import RSVP from 'src/components/rsvp'
import Accomodations from 'src/components/accomodations'
import Transportation from 'src/components/transportation'
import Schedule from 'src/components/schedule'

gsap.registerPlugin(ScrollTrigger)
export const Details = () => {
  const container = useRef<HTMLDivElement>(null)
  const registry = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // const el = registry.current
      // gsap code here...
      gsap.to('.moon', {
        marginLeft: 20,
        duration: 3,
        top: 5,
        delay: 2,
        width: '7rem',
      }) // <-- automatically reverted
      gsap.to('.menu', {
        display: 'block',
        delay: 5,
        top: '3rem',
      })
      gsap.from('.details', {
        opacity: 0,
        duration: 2,
      })
      gsap.to('.content', {
        // overflowY: 'scroll',
        delay: 5,
      })
    },
    { scope: container },
  ) // <-- scope is for selector text (optional)
  useEffect(() => {
    const el = registry.current
    gsap.to(el, {
      backgroundColor: 'red',
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        // markers: true,
      },
    })
  }, [])
  return (
    <div ref={container} className="justify-center bg-wedding-green">
      <div className="fixed left-[40%] top-5 text-center text-white">
        <p className="mb-5 mt-5 font-abel text-6xl">Chris & Jen</p>
        <p>Meet us in the mountains</p>
      </div>
      <div className="moon fixed top-44 z-30 ml-[18rem] ">
        <img className="w-32" src={moon} />
        <div className="menu z-20 hidden">
          <MyMenu />
        </div>
      </div>

      <Stars />
      <div className="fixed bottom-5 z-10 row-span-2">
        <img className="mb-5 ml-5 w-[22rem] " src={forestLeft} />
      </div>
      <div className="lake fixed bottom-24 left-48">
        <img className="w-96" src={nightLake} />
      </div>

      <div className="row-span1 fixed bottom-5 left-[26rem] z-10 ">
        <img className="mb-5 mr-5 w-[22rem]" src={forestRight} />
      </div>

      <div className="main flex justify-end bg-wedding-green text-center font-dmSans text-white">
        <div className="details mr-5 w-[500px]">
          <Schedule />
          <RSVP />
          <Accomodations />
          <Transportation />
          <div ref={registry} id="registry" className="reg">
            <Registry />
          </div>
        </div>
      </div>
    </div>
  )
}
