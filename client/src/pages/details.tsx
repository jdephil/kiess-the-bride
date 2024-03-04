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
import leftCabin from 'src/assets/images/left_cabin.png'
import rightCabin from 'src/assets/images/right_cabin.png'
import bear from 'src/assets/images/bear.png'
import firepit from 'src/assets/images/firepit.png'
import lightbulbs from 'src/assets/images/lightbulbs.png'

gsap.registerPlugin(ScrollTrigger)
export const Details = () => {
  const container = useRef<HTMLDivElement>(null)
  const registry = useRef<HTMLDivElement>(null)
  const accomodations = useRef<HTMLDivElement>(null)
  const rsvp = useRef<HTMLDivElement>(null)
  const transportation = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.to('.moon', {
        marginLeft: 20,
        duration: 3,
        top: 5,
        delay: 2,
        width: '7rem',
      })
      gsap.to('.menu', {
        display: 'block',
        delay: 5,
        top: '3rem',
      })
      gsap.from('.details', {
        opacity: 0,
        duration: 2,
      })
    },
    { scope: container },
  ) // <-- scope is for selector text (optional)
  useEffect(() => {
    const registryRef = registry.current
    const accomodationsRef = accomodations.current
    const rsvpRef = rsvp.current
    const transportaionRef = transportation.current

    gsap.to('.cabin', {
      opacity: 1,
      scrollTrigger: {
        trigger: accomodationsRef,
      },
    })
    gsap.to('.bear', {
      opacity: 1,
      scrollTrigger: {
        trigger: rsvpRef,
      },
    })
    gsap.to('.firepit', {
      opacity: 1,
      scrollTrigger: {
        trigger: registryRef,
      },
    })
    gsap.to('.lightbulbs', {
      opacity: 1,
      scrollTrigger: {
        trigger: transportaionRef,
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
      <div className="lightbulbs fixed bottom-56 left-20 z-20 opacity-0">
        <img className="w-[650px]" src={lightbulbs} />
      </div>
      <div className="cabin fixed bottom-40 left-24 opacity-0">
        <img className="w-28" src={leftCabin} />
      </div>
      <div className="lake fixed bottom-24 left-48">
        <img className="w-96" src={nightLake} />
      </div>
      <div className="cabin fixed bottom-52 left-[37rem] opacity-0">
        <img className="w-16" src={rightCabin} />
      </div>
      <div className="bear fixed bottom-32 left-[31rem] z-20 opacity-0">
        <img className="w-14" src={bear} />
      </div>
      <div className="firepit fixed bottom-16 left-[29rem] opacity-0">
        <img className="w-16" src={firepit} />
      </div>

      <div className="row-span1 fixed bottom-5 left-[26rem] z-10 ">
        <img className="mb-5 mr-5 w-[22rem]" src={forestRight} />
      </div>

      <div className="main flex justify-end bg-wedding-green text-center font-dmSans text-white">
        <div className="details mr-5 w-[600px]">
          <Schedule />
          <div ref={rsvp}>
            <RSVP />
          </div>
          <div ref={accomodations}>
            <Accomodations />
          </div>
          <div ref={transportation}>
            <Transportation />
          </div>
          <div ref={registry} id="registry" className="reg">
            <Registry />
          </div>
        </div>
      </div>
    </div>
  )
}
