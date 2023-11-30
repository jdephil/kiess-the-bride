import forestLeft from 'src/assets/images/nightime_forest_left.png'
import forestRight from 'src/assets/images/nighttime_forest_right.png'
import starsLeft from 'src/assets/images/left_stars.png'
import starsRight from 'src/assets/images/right_stars.png'
import moon from 'src/assets/images/moon.png'

export const Details = () => {
  return (
    <div className="grid h-screen grid-cols-12 grid-rows-6 bg-wedding-green">
      <div className="col-start-1 col-end-5 row-start-1 row-end-3  flex">
        <img className="ml-10 mt-12" src={starsLeft} />
      </div>
      <div className="col-start-8 col-end-12 row-start-1 row-end-3  flex">
        <img className="ml-8 mt-12" src={starsRight} />
      </div>
      <div className="col-start-6 col-end-8 row-start-1 row-end-3  flex">
        <img className="ml-1/4" src={moon} />
      </div>
      <div className="col-start-4 col-end-9 row-start-3 row-end-7 text-center text-white">
        <div>
          <p className="">Chris & Jen</p>
          <p>June 8, 2024</p>
        </div>
        <p>The Details</p>
        <div>
          <p>Welcome Party</p>
          <p>Thursday June 6, 2024</p>
          <p>6:00 - 9:30pm</p>
          <p>Dutch&apos;s at Silver Tree</p>
          <p>patio bar</p>
          <p>567 Glendale Road</p>
          <p>Oakland, MD 21550</p>
        </div>
        <div>
          <p>Rehersal Drinks</p>
          <p>Friday June 7, 2024</p>
          <p>8:00 - 10:00pm</p>
          <p>Deep Creek Fun Zone</p>
          <p>72 Fort Dr</p>
          <p>McHenry, MD 21541</p>
        </div>
        <div>
          <p>Ceremony & Reception</p>
          <p>Saturday June 8, 2024</p>
          <p>5:30pm</p>
          <p>Blue Moon Rising</p>
          <p>89 Blue Moon Rising Way</p>
          <p>McHenry, MD 21541</p>
        </div>
      </div>

      <div className="col-start-1 col-end-5 row-start-3 row-end-7  flex">
        <img className="mb-5 ml-5" src={forestLeft} />
      </div>
      <div className="col-start-9 col-end-13 row-start-3 row-end-7  flex">
        <img className="mb-5 mr-5" src={forestRight} />
      </div>
    </div>
  )
}
