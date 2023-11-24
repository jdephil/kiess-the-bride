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
    <div className="bg-wedding-yellow align-center grid h-screen grid-cols-12 justify-center">
      <div className="container col-start-2 col-end-12">
        <p
          onClick={() => {
            navigate('/details')
          }}
          className="left-enter absolute top-36 z-10"
        >
          Enter
        </p>
        <img className="ml-16 w-11/12" src={daytime} />
      </div>
    </div>
  )
}
