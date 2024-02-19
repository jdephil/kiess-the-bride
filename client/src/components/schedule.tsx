import locationPin from 'src/assets/images/locationPin.svg'

export default function Schedule() {
  return (
    <div id="schedule" className="mb-5 mt-14 text-center  ">
      <div className="mb-7 text-center font-abel text-3xl tracking-wide">Schedule</div>

      <div className="my-2 ">
        <p className="m-auto w-[70%] border-b-2 pb-2 text-xl">Thursday June 6, 2024</p>

        <p className="my-7  text-lg font-bold tracking-widest text-wedding-yellow">Welcome Party</p>
        <p>6:00 PM to 9:30 PM</p>
        <p>Dutch&apos;s at Silver Tree</p>
        <p>Patio Bar</p>
        <a target="_blank" href="https://maps.app.goo.gl/fhXvFcx2AZngL2yT6">
          <div className="mb-10 mt-5 flex items-center justify-center pr-10">
            <img className="h-10 w-10 fill-wedding-yellow text-wedding-yellow " src={locationPin} />
            <div className=" flex flex-col underline">
              <p>567 Glendale Road</p>
              <p>Oakland, MD 21550</p>
            </div>
          </div>
        </a>
      </div>
      <div className=" mt-7">
        <p className="m-auto w-[70%] border-b-2 pb-2 text-xl">Friday June 7, 2024</p>
        <p className="my-7  text-lg font-bold tracking-widest text-wedding-yellow">
          Rehersal Drinks
        </p>
        <p>7:00 PM to 9:00 PM</p>
        <p>Deep Creek Fun Zone</p>
        <a target="_blank" href="https://maps.app.goo.gl/iSLVh1iZyfQdccUE7">
          <div className="mt-5 flex items-center justify-center pr-10">
            <img className="h-10 w-10 fill-wedding-yellow text-wedding-yellow " src={locationPin} />
            <div className=" flex flex-col underline">
              <p>72 Fort Drive</p>
              <p>McHenry, MD 21541</p>
            </div>
          </div>
        </a>
      </div>
      <div className="mt-7 ">
        <p className="m-auto w-[70%] border-b-2 pb-2 text-xl">Saturday June 8, 2024</p>
        <p className="my-7  text-lg font-bold tracking-widest text-wedding-yellow">
          Ceremony & Reception
        </p>
        <p>5:30 PM</p>
        <p>Blue Moon Rising</p>
        <a target="_blank" href="https://maps.app.goo.gl/rmJpvFJG6y2FXtvb7">
          <div className="mt-5 flex items-center justify-center pr-10">
            <img className="h-10 w-10 fill-wedding-yellow text-wedding-yellow " src={locationPin} />
            <div className=" flex flex-col underline">
              <p className="pl-1">89 Blue Moon Rising Way</p>
              <p>McHenry, MD 21541</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
