import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <h1 className='mb-10'>Home</h1>
      <Link to='/login' className='link-navigation'>
        Iniciar sesión
      </Link>
      <Link to='/register' className='link-navigation'>
        Registrarse
      </Link>
      <Link to='/dashboard' className='link-navigation'>
        Dashboard
      </Link>
      <style jsx>
        {`
          .link-navigation {
            background-color: #000;
            border-radius: 9px;
            color: #fff;
            padding: 10px 10px;
            margin: 10px;
            font-weight: 600;
            margin-top: 40px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}

export default App
