import forestLeft from 'src/assets/images/nightime_forest_left.png'
import forestRight from 'src/assets/images/nighttime_forest_right.png'
import starsLeft from 'src/assets/images/left_stars.png'
import starsRight from 'src/assets/images/right_stars.png'
import moon from 'src/assets/images/moon.png'

export const Details = () => {
  return (
    <div className="bg-wedding-green grid h-screen grid-cols-12 grid-rows-6">
      <div className="col-start-1 col-end-5 row-start-1 row-end-3  flex">
        <img className="ml-8 mt-12" src={starsLeft} />
      </div>
      <div className="col-start-8 col-end-12 row-start-1 row-end-3  flex">
        <img className="ml-8 mt-12" src={starsRight} />
      </div>

      <div className="col-start-1 col-end-7 row-start-3 row-end-7  flex">
        <img className="mb-5 ml-5" src={forestLeft} />
      </div>
      <div className="col-start-9 col-end-13 row-start-3 row-end-7  flex">
        <img className="mb-5 mr-5" src={forestRight} />
      </div>
    </div>
  )
}
