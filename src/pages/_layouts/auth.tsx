import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <Helmet title="Sign-In" />
      <h1>Auth</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
