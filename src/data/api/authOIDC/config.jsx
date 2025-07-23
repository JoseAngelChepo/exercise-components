const wso2Config = {
  clientId: import.meta.env.VITE_WSO2_CLIENT_ID,
  redirectUri: "http://localhost:5173/callback",
  authorizationEndpoint: "https://localhost:9443/oauth2/authorize",
  tokenEndpoint: "https://localhost:9443/oauth2/token",
  scopes: "openid profile email"
}

export default wso2Config;