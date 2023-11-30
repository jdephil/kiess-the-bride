import forestLeft from 'src/assets/images/nightime_forest_left.png'
import forestRight from 'src/assets/images/nighttime_forest_right.png'
import starsLeft from 'src/assets/images/left_stars.png'
import starsRight from 'src/assets/images/right_stars.png'
import moon from 'src/assets/images/moon.png'
import nightLake from 'src/assets/images/lake-night.png'
export const Details = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="relative h-screen overflow-scroll bg-wedding-green">
        <div className="fixed left-0 ">
          <img className="ml-10 mt-12 w-96" src={starsLeft} />
        </div>
        <div className="fixed right-0">
          <img className=" mt-12 w-96" src={starsRight} />
        </div>

        <div className="pl-moon pb-12">
          <img className="w-36" src={moon} />
        </div>
        <div className="">
          <div className=" text-center text-white">
            <p className="">Chris & Jen</p>
            <p>June 8, 2024</p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/3 justify-center">
          <img className="w-large" src={nightLake} />
        </div>
        <div className="fixed bottom-0">
          <img className="mb-5 ml-5 w-96" src={forestLeft} />
        </div>
        <div className="fixed bottom-0 right-0">
          <img className="mb-5 mr-5 w-96" src={forestRight} />
        </div>
      </div>
    </main>
  )
}
