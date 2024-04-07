import ExportLink from './locationLink'

export default function Schedule() {
  return (
    <div id="schedule" className="pt-10 text-center md:pt-36">
      <div className="text-center font-abel text-4xl  font-bold tracking-wide">Schedule</div>

      <div className="mt-10 ">
        <p className="m-auto w-[70%] border-b-2 pb-2   text-xl">Thursday June 6, 2024</p>

        <p className="my-7  text-2xl font-bold tracking-widest text-wedding-yellow">
          Weekend Kick-Off
        </p>
        <p className="tracking-wide">6:00 PM to 9:30 PM</p>
        <p>Dutch&apos;s at Silver Tree</p>
        <p>Patio Bar</p>

        <ExportLink
          link={'https://maps.app.goo.gl/fhXvFcx2AZngL2yT6'}
          streetAddress={'567 Glendale Road'}
          cityStateZip={'Oakland, MD 21550'}
        />
      </div>
      <div className="mt-16">
        <p className="m-auto w-[70%] border-b-2 pb-2   text-xl">Friday June 7, 2024</p>
        <p className="my-7  text-2xl font-bold tracking-widest text-wedding-yellow">
          Swallow Falls Hike
        </p>
        <p>1:00 PM to 3:00 PM</p>
        <p>Swallow Falls State Park</p>
        <ExportLink
          link={'https://maps.app.goo.gl/oHraTkkTGjxjK2cV7'}
          streetAddress={'2460 Maple Glade Rd'}
          cityStateZip={'Oakland, MD 21550'}
        />
        <p className="my-7  text-2xl font-bold tracking-widest text-wedding-yellow">
          Rehersal Drinks
        </p>
        <p>7:00 PM to 9:00 PM</p>
        <p>Deep Creek Fun Zone</p>
        <ExportLink
          link={'https://maps.app.goo.gl/iSLVh1iZyfQdccUE7'}
          streetAddress={'72 Fort Drive'}
          cityStateZip={'McHenry, MD 21541'}
        />
      </div>
      <div className="mt-16 ">
        <p className="m-auto w-[70%] border-b-2 pb-2   text-xl">Saturday June 8, 2024</p>
        <p className="my-7  text-2xl font-bold tracking-widest text-wedding-yellow">
          Wedding Day Yoga
        </p>
        <p>10:00 AM to 11:00 AM</p>
        <p>Blue Moon Rising</p>
        <ExportLink
          link={'https://maps.app.goo.gl/rmJpvFJG6y2FXtvb7'}
          streetAddress={'89 Blue Moon Rising Way'}
          cityStateZip={'McHenry, MD 21541'}
        />
        <p className="my-7  text-2xl font-bold tracking-widest text-wedding-yellow">
          Ceremony & Reception
        </p>
        <p>Welcome Party with Bride & Groom</p>
        <p>5:30 PM</p>
        <p className="mt-5">Twilight Ceremony</p>
        <p>8:00 PM</p>
        <p className="mt-5">Dinner & Reception</p>
        <p>8:30 PM</p>
        <p className="mt-5">Blue Moon Rising</p>
        <ExportLink
          link={'https://maps.app.goo.gl/rmJpvFJG6y2FXtvb7'}
          streetAddress={'89 Blue Moon Rising Way'}
          cityStateZip={'McHenry, MD 21541'}
        />
      </div>
    </div>
  )
}
