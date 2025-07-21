import { useRef } from 'react';
import Loader from './Loader';

const SignUpFormNotControlled = (props) => {
  const { isLoading, signUp } = props;
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef(); 
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    }
    signUp(data)
  }
  return (
     <>
      <form 
        className="login-form-container"
        onSubmit={handleSubmit}
      >
        <h2 className="text-title">Registro</h2>
        <p className="text-subtitle">Registro de usuarios</p>
        <div className="input-container">
          <label>Nombre</label>
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            ref={nameRef}
          />
        </div>
        <div className="input-container">
          <label>Apellidos</label>
          <input
            name="lastName"
            type="text"
            placeholder="Apellido(s)"
            ref={lastNameRef}
          />
        </div>
        <div className="input-container">
          <label>Correo electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="email@gmail.com"
            ref={emailRef}
          />
        </div>
        <div className="input-container">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            ref={passwordRef}
          />
        </div>
        <div className="input-container">
          <label>Confirmar contraseña</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
            ref={confirmPasswordRef}
          />
        </div>
        {isLoading
          ? (
            <div className='loader-container'>
              <Loader />
            </div>
          ) : (
            <button className="button-login" type="submit">
              Registrarse
            </button>
          )
        }
      </form>
      <style jsx>
        {`
          .login-form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color:rgb(238, 238, 238);
            color: #000;
            border-radius: 14px;
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
          }
          .text-title {
            font-size: clamp(1.1rem, 2.5vw, 2rem);
            margin: 5px;
          }
          .text-subtitle {
            font-size: clamp(.9rem, 1.8vw, 1.2rem);
            margin: 5px 0px 0px 0px;
          }
          .input-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 8px 0px;
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
            background-color: #ffffff;
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
            border-radius: 9px;
            color: white;
            font-weight: 600;
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
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignUpFormNotControlled;