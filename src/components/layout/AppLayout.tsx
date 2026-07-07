import { Outlet } from 'react-router'
import AppHeader from './AppHeader'

function AppLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}

export default AppLayout