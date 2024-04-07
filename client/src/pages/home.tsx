import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from 'src/stores/auth'
import daytime from 'src/assets/images/daytime.png'

export const Home = () => {
  const navigate = useNavigate()
  const logOutUser = () => {
    logout()
    navigate('/log-in')
  }

  return (
    <div className="align-center grid-rows-[00px 1fr] grid h-screen grid-cols-12 justify-center bg-wedding-yellow">
      <div className="col-start-6 col-end-7 row-start-1 row-end-2 mt-32 justify-center align-middle md:ml-[50%] md:mt-10">
        <button
          onClick={() => {
            navigate('/home')
          }}
          className="rounded border border-wedding-green bg-transparent px-4 py-2 font-semibold text-wedding-green hover:border-transparent hover:bg-white hover:text-wedding-purple"
        >
          <p className="">Enter</p>
        </button>
      </div>
      <div className="col-start-1 col-end-13 row-start-2 justify-center align-middle md:col-start-2 md:col-end-12 md:row-end-3 md:flex">
        <img className="md:w-11/12" src={daytime} />
      </div>
    </div>
  )
}
