import './App.css'
import Examples from './components/Examples';
import ContainerFlexbox from './components/ContainerFlexbox';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ExampleCard from './components/ExampleCard';
import ExerciseTailwind from './components/ExerciseTailwind';
import ThemeSelector from './components/ThemeSelector.jsx';
import { useServices } from './providers/ServicesProvider';

function App() {
  const { user, token, logout } = useServices();
  return (
    <>
      <ThemeSelector />
      {token === null
        ? (
          <LoginForm />
        ) : (
          <div className='container-user'>
            <p>User: {user}</p>
            <p>Token: {token}</p>
            <button className="button-logout" onClick={() => logout()}>Cerrar sesión</button>
          </div>
        )}
      {/* <SignUpForm /> */}
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
      {/* termina css */}
    </>
  )
}

export default App
