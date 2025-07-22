import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useServices } from '../data/providers/ServicesProvider';
import { useNavigate } from 'react-router-dom';

const LoginFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useServices();
  const navigate = useNavigate();

  const signIn = async (data) => {
    setIsLoading(true)
    const res = await login(data.email, data.password)
    if (res) {
      navigate('/dashboard')
    }
    setIsLoading(false)
  }
  return (
    <LoginForm
      isLoading={isLoading}
      signIn={signIn}
    />
  )
}

export default LoginFormContainer;