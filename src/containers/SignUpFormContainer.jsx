import { useState } from 'react';
import SignUpFormControlled from "../components/SignUpFormControlled";
import SignUpFormNotControlled from "../components/SignUpFormNotControlled";
import SignUpFormHookForm from "../components/SignUpFormHookForm";
import SignUpFormHookFormYup from '../components/SignUpFormHookFormYup';
import SignUpFormHookFormZod from '../components/SignUpFormHookFormZod';

const SignUpFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (data) => {
    console.log(data)
    setIsLoading(true)
    const baseUrl = 'http://localhost:5001/api/auth/register'
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        console.log('Error http:', response.status)
      }
      console.log(response)
      const content = await response.json();
      console.log(content)
      setIsLoading(false)
    } catch (error) {
      console.log('Error red:', error.message)
      setIsLoading(false)
    }
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