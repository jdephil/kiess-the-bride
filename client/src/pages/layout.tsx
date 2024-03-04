import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="h-screen bg-wedding-green">
      <Outlet />
    </div>
  )
}
