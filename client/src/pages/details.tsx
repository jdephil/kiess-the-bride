import { Heading } from 'src/components/heading'
import forestLeft from 'src/assets/images/nightime_forest_left.png'
import forestRight from 'src/assets/images/nighttime_forest_right.png'
import starsLeft from 'src/assets/images/left_stars.png'
import starsRight from 'src/assets/images/right_stars.png'
import moon from 'src/assets/images/moon.png'
import nightLake from 'src/assets/images/lake-night.png'
export const Details = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="relative h-screen overflow-scroll bg-wedding-green">
        <Heading />
        <main className="grid grid-cols-3">
          <div className="fixed bottom-0">
            <img className="mb-5 ml-5 w-96" src={forestLeft} />
          </div>
          <div className="col-start-2">
            <div className=" text-center text-white">
              <p className="">Chris & Jen</p>
              <p>June 8, 2024</p>
            </div>
            <div className="">
              <img className="w-large" src={nightLake} />
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>

          <div className="fixed bottom-0 right-0">
            <img className="mb-5 mr-5 w-96" src={forestRight} />
          </div>
        </main>
      </div>
    </div>
  )
}
