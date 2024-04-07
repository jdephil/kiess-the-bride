import ExportLink from './locationLink'

export default function Accomodations() {
  return (
    <div id="accomodations" className="my-3 pt-24 ">
      <div className="mb-7 text-center font-abel  text-4xl tracking-wide ">Accommodations</div>
      <div className="mt-2 ">
        <div className="mt-5 ">
          <p className="m-auto w-[70%] border-b-2 pb-2   text-2xl text-wedding-yellow">
            Blue Moon Rising Cabins
          </p>
          <p className="my-5">Stay onsite with Chris & Jen!</p>

          <a
            className=" underline"
            target="_blank"
            rel="noreferrer"
            href="https://bluemoonrising.org/explore-interactive-map/"
          >
            Property & Cabin Map
          </a>
          <p className="mt-5">Available starting Thursday, June 6th</p>
          <p>$250/night, 2 night minimum</p>
          <p>Call to reserve</p>
          <ExportLink
            link={'https://maps.app.goo.gl/rmJpvFJG6y2FXtvb7'}
            streetAddress={'89 Blue Moon Rising Way'}
            cityStateZip={'McHenry, MD 21541'}
          />
        </div>
        <div className="mt-2 ">
          <p className="m-auto w-[70%] border-b-2 pb-2   text-2xl text-wedding-yellow">
            The Suites at Silver Tree
          </p>
          <p className="my-5">Room block with studio, 1 & 2 bedrooms</p>
          <a className=" underline" href="https://www.suitesatsilvertree.com/">
            Suites at Silver Tree
          </a>
          <p className="mt-5">$164/night and up</p>
          <p>Call and mention the De Phillips/Kiessling room block</p>

          <ExportLink
            link={'https://maps.app.goo.gl/vJ2YwpHc6bXcXGU89'}
            streetAddress={'567 Glendale Road'}
            cityStateZip={'Oakland, MD 21550'}
          />
        </div>
        <div className="mt-2 ">
          <p className="m-auto w-[70%] border-b-2 pb-2   text-2xl text-wedding-yellow">
            Other Options
          </p>
          <p className="mt-5">LakeFront Lodge</p>
          <p>The Lodges at Sunset Village</p>
          <p>Wisp Ski Resort</p>
          <p>Airbnb</p>
          <p>vrbo</p>
        </div>
      </div>
    </div>
  )
}
