import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <Helmet title="Home" />
      <h1>Header APP</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
