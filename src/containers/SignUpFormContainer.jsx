import { useState } from 'react';
import { useServices } from '../data/providers/ServicesProvider';
import { useNavigate } from 'react-router-dom';
import SignUpFormControlled from "../components/SignUpFormControlled";
import SignUpFormNotControlled from "../components/SignUpFormNotControlled";
import SignUpFormHookForm from "../components/SignUpFormHookForm";
import SignUpFormHookFormYup from '../components/SignUpFormHookFormYup';
import SignUpFormHookFormZod from '../components/SignUpFormHookFormZod';

const SignUpFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useServices();
  const navigate = useNavigate()

  const signUp = (data) => {
    setIsLoading(true)
    register(data)
      .then(res => {
        if (res) {
          navigate('/login')
        }
        setIsLoading(false)
      })
  }
  return (
    <SignUpFormHookFormZod
      isLoading={isLoading}
      signUp={signUp}
    />
    // <SignUpFormHookFormYup
    //   isLoading={isLoading}
    //   signUp={signUp}
    // />
    // <SignUpFormHookForm
    //   isLoading={isLoading}
    //   signUp={signUp}
    // />
    // <SignUpFormNotControlled
    //   isLoading={isLoading}
    //   signUp={signUp}
    // />
    // <SignUpFormControlled
    //   isLoading={isLoading}
    //   signUp={signUp}
    // />
  )
}

export default SignUpFormContainer;