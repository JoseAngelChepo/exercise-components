import { Navigate, Outlet } from 'react-router-dom';
import { useServices } from '../data/providers/ServicesProvider';

const PrivateRoute = () => {
  const { token, role, logout } = useServices()

  const handleLogout = () => {
    logout()
  }

  if (token === null) {
    return <Navigate to='/login' />
  }
  // if (role !== 'admin') {
  //   return <Navigate to='/unauthorized' />
  // }
  
  return <Outlet />
}

export default PrivateRoute;