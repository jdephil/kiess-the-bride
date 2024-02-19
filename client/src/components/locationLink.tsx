import locationPin from 'src/assets/images/locationPin.svg'

export default function ExportLink(props: any) {
  return (
    <a target="_blank" rel="noreferrer" href={props.link}>
      <div className="mb-10 mt-5 flex items-center justify-center pr-10">
        <img className="h-10 w-10 fill-wedding-yellow text-wedding-yellow " src={locationPin} />
        <div className=" flex flex-col underline">
          <p>{props.streetAddress}</p>
          <p>{props.cityStateZip}</p>
        </div>
      </div>
    </a>
  )
}
