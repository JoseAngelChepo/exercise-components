import LoginFormContainer from '../containers/LoginFormContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
   
  }

  // useEffect(() => {
  //   if (token && role) {
  //     navigate("/dashboard")
  //   }
  // }, [token, role])
  return (
    <div className='container-center'>
      <LoginFormContainer />
    </div>
  )
}

export default Login;