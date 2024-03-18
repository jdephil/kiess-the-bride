import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from 'src/stores/auth'
import daytime from 'src/assets/images/daytime.png'
import video from 'src/assets/videos/daytimeAnimation.mp4'
import html from 'public/daytimehtml.html?raw'

import { AnimateCC, GetAnimationObjectParameter } from 'react-adobe-animate'
export const Home = () => {
  const navigate = useNavigate()
  const logOutUser = () => {
    logout()
    navigate('/log-in')
  }
  const [animationObject, getAnimationObject] = useState<GetAnimationObjectParameter | null>(null)
  console.log(animationObject)
  return (
    <div className="align-center grid h-screen grid-cols-12 justify-center bg-wedding-yellow">
      <div className="container col-start-2 col-end-12">
        <p
          onClick={() => {
            navigate('/home')
          }}
          className="absolute left-enter top-36 z-10"
        >
          Enter
        </p>
        <AnimateCC animationName="daytimehtml" getAnimationObject={getAnimationObject} />
        {/* <img className="ml-16 w-11/12" src={daytime} /> */}
        {/* <video width={'100% '} height={'100%'} loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video> */}
        {/* <iframe height={'768px'} width={'1000px'} src={html}>
          jh
        </iframe> */}
      </div>
    </div>
  )
}
