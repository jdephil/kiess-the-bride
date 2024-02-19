import { useEffect } from 'react'
import { Heading } from 'src/components/heading'
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
        paddingLeft: 20,
        duration: 3,
        position: 'fixed',
        top: 5,
        delay: 2,
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
      gsap.from('.details', {
        opacity: 0,
        delay: 5,
        duration: 2,
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
    },
    { scope: container },
  ) // <-- scope is for selector text (optional)
  useEffect(() => {
    const el = registry.current
    gsap.to(el, {
      backgroundColor: 'red',
      duration: 1,
      scrollTrigger: {
        trigger: el,
        // markers: true,
      },
    })
  }, [])
  return (
    <div ref={container} className="flex min-h-screen flex-col justify-center">
      <div className="relative h-screen overflow-scroll bg-wedding-green">
        <div className="moon absolute z-10 pl-moon">
          <img className="w-36" src={moon} />
          <div className="menu hidden">
            <MyMenu />
          </div>
        </div>
        <Heading />
        <main className="main grid-rows-detailsMain mt-72 grid h-screen  grid-cols-3  font-dmSans text-white">
          <div className="fixed bottom-0 row-span-2">
            <img className="mb-5 ml-5 w-96" src={forestLeft} />
          </div>
          <div className="content row-start-0 col-start-2 row-end-1 min-w-0">
            <div className="text-center text-white">
              <p className="mb-5 font-abel text-6xl">Chris & Jen</p>
              <p>Meet us in the mountains</p>
              <div className="details">
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
          <div className="lake col-start-2 row-start-1">
            <img className="w-large" src={nightLake} />
          </div>

          <div className="row-span1 fixed bottom-0 right-0">
            <img className="mb-5 mr-5 w-96" src={forestRight} />
          </div>
        </main>
      </div>
    </div>
  )
}
