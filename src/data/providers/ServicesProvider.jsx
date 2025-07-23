import { createContext, useContext, useState, useEffect } from 'react';
import Services from '../api/server'
import ServicesAuthOIDC from '../api/authOIDC'
import handleApiError from '../../utils/handleApiError';
import { toast } from 'react-toastify';

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [stateServices, setStateServices] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const register = (data) => {
    return Services.register(data)
      .then(data => data)
      .catch(error => {
        const message = handleApiError(error)
        toast.error(message)
        return false
      })
  }

  const login = async (email, password) => {
    return Services.login(email, password)
      .then(res => {
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('role', res.role)
        setToken(res.accessToken)
        setRole(res.role)
        return res
      })
      .catch(error => {
        const message = handleApiError(error)
        toast.error(message)
        return false
      })
  }

  const loginOIDC = async () => {
    return ServicesAuthOIDC.loginWithPKCE()
      .then(res => {
        return res
      })
      .catch(error => {
        const message = handleApiError(error)
        toast.error(message)
        return false
      })
  }

  const exchangeCodeForToken = async (code) => {
    return ServicesAuthOIDC.exchangeCodeForToken(code)
      .then(res => {
        console.log("Autenticado con éxito!!")
        console.log(res)
        localStorage.setItem('token', res.access_token)
        setToken(res.access_token)
        return res
      })
      .catch(error => {
        const message = handleApiError(error)
        toast.error(message)
        return false
      })
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
    setToken(null);
  }

  const getToken = () => {
    return localStorage.getItem('token');
  }

  const getRole = () => {
    return localStorage.getItem('role');
  }

  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  }

  const values = { 
    stateServices,
    user,
    token,
    role,
    register,
    login,
    loginOIDC,
    exchangeCodeForToken,
    logout,
    getToken,
    getRole,
    isAuthenticated
  }

  useEffect(() => {
    const storedToken = getToken();
    const storedRole = getRole();
    if (storedToken && storedRole) {
      // verificar token con mi servicio
      const resultadoDeValidacionToken = true
      if (resultadoDeValidacionToken) {
        console.log('Se recupero token')
        setToken(storedToken)
        setRole(storedRole)
      } else {
        logout()
      }
    }
    setStateServices(true)
  }, [])
  return (
    <ServicesContext.Provider value={values}>
      {children}
    </ServicesContext.Provider>
  )
}

const useServices = () => {
  return useContext(ServicesContext);
}

export { ServicesProvider, useServices };