import { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = (data) => {
    setIsLoading(true)
    // llamar peticion de login
    setTimeout(() => {
      console.log("Login: Enviando datos a servidor...")
      setIsLoading(false)
    }, 2000)
  }
  return (
    <LoginForm
      isLoading={isLoading}
      signIn={signIn}
    />
  )
}

export default LoginFormContainer;