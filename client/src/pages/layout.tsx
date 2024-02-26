import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="bg-wedding-green">
      <Outlet />
    </div>
  )
}
