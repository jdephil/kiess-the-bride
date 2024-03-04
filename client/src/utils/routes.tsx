import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Layout, LogIn, Details, Rsvp, RsvpId } from 'src/pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Details />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/rsvp/:guestId" element={<RsvpId />} />
      </Route>
    </Routes>
  )
}
