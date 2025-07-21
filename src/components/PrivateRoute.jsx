import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  logout,
  selectIsAuthenticated,
} from '../store/authSlice'

const PrivateRoute = () => {
  const dispatch = useDispatch()
  const { user, token, role } = useSelector((state) => state.auth)
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }
  if (role !== 'admin') {
    return <Navigate to='/unauthorized' />
  }
  
  return <Outlet />
}

export default PrivateRoute;