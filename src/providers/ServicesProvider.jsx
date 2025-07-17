import { createContext, useContext, useState } from 'react';

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, authToken) => {
    setUser(userData)
    setToken(authToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
  }

  const values = { user, token, login, logout }
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