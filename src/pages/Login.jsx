import LoginForm from '../components/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, token, role } = useSelector((state) => state.auth)


  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (token && role) {
      navigate("/dashboard")
    }
  }, [token, role])
  return (
    <div className='container-center'>
      <LoginForm />
      <style jsx>
        {`
          .container-user {
            border: 2px solid #000;
            border-radius: 9px;
            padding: 20px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .button-logout {
            background-color: #000;
            border-radius: 9px;
            color: #fff;
            padding: 5px 10px;
            margin: 10px;
            font-weight: 600;
            margin-top: 40px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Login;