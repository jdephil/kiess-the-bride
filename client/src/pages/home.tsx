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
    <div className="align-center grid h-screen  justify-center bg-wedding-yellow">
      <div className=" mx-auto mt-20 justify-center align-middle">
        <button
          onClick={() => {
            navigate('/home')
          }}
          className="rounded border border-wedding-green bg-transparent px-4 py-2 font-semibold text-wedding-green hover:border-transparent hover:bg-white hover:text-wedding-purple"
        >
          <p className="">Enter</p>
        </button>
      </div>
      <div className=" ">
        <img className="" src={daytime} />
      </div>
    </div>
  )
}
