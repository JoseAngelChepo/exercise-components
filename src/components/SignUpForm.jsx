import { useState } from 'react';
import Loader from './Loader';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = () => {
    setIsLoading(true)
    // llamar peticion de login
    setTimeout(() => {
      console.log("Regreso resultado de login ")
      setIsLoading(false)
    }, 2000)
  }
  return (
    <>
      <div className="login-form-container">
        <h2 className="text-title">Registro</h2>
        <p className="text-subtitle">Registro de usuarios</p>
        <div className="input-container">
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Apellidos</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Correo electrónico</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Contraseña</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Confirmar contraseña</label>
          <input type="text" />
        </div>
        {isLoading
          ? (
            <div className='loader-container'>
              <Loader />
            </div>
          ) : (
            <button className="button-login" onClick={() => signIn()}>
              Iniciar sesión
            </button>
          )
        }
      </div>
      <style jsx>
        {`
          .login-form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            color: #000;
            padding: 50px;
            border-radius: 14px;
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
          }
          .text-title {
            font-size: 28px;
            margin: 5px;
          }
          .text-subtitle {
            font-size: 16px;
            margin: 5px 0px 50px 0px;
          }
          .input-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 10px 0px;
          }
          .input-container label {
            font-size: 16px;
          }
          .input-container input {
            font-size: 16px;
            width: 250px;
            height: 35px;
            border: none;
            border-radius: 9px;
            background-color:rgb(222, 222, 222);
            outline: none;
            color:rgb(62, 62, 62);
            padding: 0px 5px;
          }
          .loader-container {
            height: 40px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px 0px;
          }
          .button-login {
            height: 40px;
            width: 100%;
            margin: 10px 0px;
            background-color:rgb(40, 40, 40);
            transition: background-color 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button-login:hover {
            border: none;
            background-color:rgb(105, 104, 104);
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
          @media (max-width: 768px) {
            .login-form-container {
               padding: 20px;
            }
            .text-subtitle {
              font-size: 16px;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignUpForm;