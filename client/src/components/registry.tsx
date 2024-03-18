import { Button } from './button'

export default function Registry() {
  return (
    <div className="h-72 w-full pt-24 ">
      <div className="font-abel  text-4xl">Registry</div>
      <button className="mt-5 rounded border border-wedding-yellow bg-transparent px-4 py-2 font-semibold text-wedding-yellow hover:border-transparent hover:bg-white hover:text-wedding-purple">
        <a
          className="text-xl"
          target="_blank"
          rel="noreferrer"
          href={'https://withjoy.com/jennifer-and-chris-ecltop3wik000l01yafwx97kjjs/registry'}
        >
          Go to Registry
        </a>
      </button>
    </div>
  )
}
