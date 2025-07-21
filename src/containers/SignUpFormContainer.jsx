import { useState } from 'react';
import SignUpFormControlled from "../components/SignUpFormControlled";
import SignUpFormNotControlled from "../components/SignUpFormNotControlled";
import SignUpFormHookForm from "../components/SignUpFormHookForm";

const SignUpFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUp = (data) => {
    setIsLoading(true)
    // llamar peticion de login
    if (data.password !== data.confirmPassword) {
      alert("Error: Las contraseñas no coinciden")
      setIsLoading(false)
    }
    setTimeout(() => {
      console.log("Enviando datos a servidor...")
      setIsLoading(false)
    }, 2000)
  }
  return (
    <SignUpFormHookForm
      isLoading={isLoading}
      signUp={signUp}
    />
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