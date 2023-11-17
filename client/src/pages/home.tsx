import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from 'src/stores/auth'
import daytime from 'src/assets/images/daytime.jpeg'

export const Home = () => {
  const navigate = useNavigate()
  const logOutUser = () => {
    logout()
    navigate('/log-in')
  }

  return (
    <div className="bg-wedding-yellow grid h-screen grid-cols-12">
      <div className="col-start-1 col-end-3"></div>
      <div className="col-start-3 col-end-11">
        <img className="" src={daytime} />
      </div>
      <div></div>
    </div>
  )
}
