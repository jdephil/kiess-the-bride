import { Heading } from 'src/components/heading'
import forestLeft from 'src/assets/images/nightime_forest_left.png'
import forestRight from 'src/assets/images/nighttime_forest_right.png'
import starsLeft from 'src/assets/images/left_stars.png'
import starsRight from 'src/assets/images/right_stars.png'
import moon from 'src/assets/images/moon.png'
import nightLake from 'src/assets/images/lake-night.png'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MyMenu from 'src/components/menu'
import Registry from 'src/components/registry'
import RSVP from 'src/components/rsvp'
import Accomodations from 'src/components/accomodations'
import Transportation from 'src/components/transportation'
import Schedule from 'src/components/schedule'
export const Details = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // gsap code here...
      gsap.to('.moon', {
        paddingLeft: 20,
        duration: 3,
        position: 'fixed',
        top: 5,
        delay: 5,
        width: '7rem',
      }) // <-- automatically reverted
      gsap.to('.menu', {
        display: 'block',
        delay: 8,
      })
      gsap.to('.main', {
        marginTop: 40,
        delay: 5,
        duration: 3,
      })
      gsap.to('.lake', {
        display: 'none',
        duration: 3,
      })
    },
    { scope: container },
  ) // <-- scope is for selector text (optional)

  return (
    <div ref={container} className="flex min-h-screen flex-col justify-center">
      <div className="relative h-screen overflow-scroll bg-wedding-green">
        <div className="moon pl-moon absolute z-10">
          <img className="w-36" src={moon} />
          <div className="menu hidden">
            <MyMenu />
          </div>
        </div>
        <Heading />
        <main className="main font-dmSans mt-72 grid grid-cols-3 text-white ">
          <div className="fixed bottom-0">
            <img className="mb-5 ml-5 w-96" src={forestLeft} />
          </div>
          <div className="col-start-2 text-center">
            <div className=" text-center text-white">
              <p className="font-abel text-3xl">Chris & Jen</p>
              <p>June 8, 2024</p>
            </div>
            <div className="lake">
              <img className="w-large" src={nightLake} />
            </div>
            <div>Come meet us in the mountains</div>
            <Schedule />
            <RSVP />
            <Accomodations />
            <Transportation />
            <Registry />
          </div>

          <div className="fixed bottom-0 right-0">
            <img className="mb-5 mr-5 w-96" src={forestRight} />
          </div>
        </main>
      </div>
    </div>
  )
}
