import ExportLink from './locationLink'

export default function FAQ() {
  return (
    <div id="faq" className="pt-36 text-center">
      <div className=" text-center font-abel text-4xl font-bold tracking-wide">FAQ</div>

      <div className="mt-14 text-left ">
        <p className="m-auto border-b-2 pb-2  text-xl  text-wedding-yellow">What should I wear?</p>

        <p className="my-5 ">
          The wedding is formal, with a caveat from the bride that looking hot supercedes the dress
          code.
        </p>
        <p>Please note:</p>
        <p>This is an outdoor event. </p>
        <p>There may be soft or uneven ground.</p>
        <p>Bringing a coat is recommended.</p>
      </div>
      <div className="mt-14 text-left ">
        <p className="m-auto  border-b-2 pb-2 text-xl  text-wedding-yellow">
          What is the RSVP deadline?
        </p>

        <p className="my-5 ">May 10th, 2024</p>
      </div>
      <div className="mt-14 text-left ">
        <p className="m-auto  border-b-2 pb-2 text-xl  text-wedding-yellow">Can I bring a date?</p>

        <p className="my-5 ">Please see your invitation for your +1</p>
      </div>
      <div className="mt-14 text-left ">
        <p className="m-auto  border-b-2 pb-2 text-xl  text-wedding-yellow">
          Is this a kid-friendly or dog-friendly weekend?
        </p>

        <p className="my-5 ">
          Chris & Jen are obsessed with your children and pets, but this is a human & adults-only
          event. While Blue Moon is technically dog-friendly, please leave your dog at home if you
          are staying on site with us.
        </p>
      </div>
    </div>
  )
}
