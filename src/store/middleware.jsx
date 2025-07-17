export const loggerMiddleware = (store) => (next) => (action) => {
  console.group('Action: ' + action.type)
  console.log("Previous State: ", store.getState())
  console.log("Action: ", action)
  const result = next(action)
  console.log("Next State: ", store.getState())
  console.groupEnd()
  return result
}

export const authMetricsMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  
  if (action.type === 'auth/login' || action.type === 'auth/loginAsync/fulfilled') {
    console.log("Métrica: usuario logueado exitosamente")
  }

  if (action.type === 'auth/logout') {
    console.log("Métrica: usuario deslogueado")
  }

  return result
}
