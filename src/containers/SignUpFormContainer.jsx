import { useState } from 'react';
import SignUpFormControlled from "../components/SignUpFormControlled";
import SignUpFormNotControlled from "../components/SignUpFormNotControlled";
import SignUpFormHookForm from "../components/SignUpFormHookForm";
import SignUpFormHookFormYup from '../components/SignUpFormHookFormYup';
import SignUpFormHookFormZod from '../components/SignUpFormHookFormZod';

const SignUpFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUp = (data) => {
    setIsLoading(true)
    // llamar peticion de login
    setTimeout(() => {
      console.log("Enviando datos a servidor...")
      setIsLoading(false)
    }, 2000)
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