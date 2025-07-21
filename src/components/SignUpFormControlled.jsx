import { useState } from 'react';
import Loader from './Loader';
const initialData = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpFormControlled = (props) => {
  const { isLoading, signUp } = props;
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (e.target.name === "confirmPassword") {
      if (formData.password.length === e.target.value.length &&
        formData.password !== e.target.value) {
        alert("Error: Las contraseñas no coinciden")
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData)
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
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Apellidos</label>
          <input
            name="lastName"
            type="text"
            placeholder="Apellido(s)"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Correo electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="email@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Confirmar contraseña</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
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

export default SignUpFormControlled;