import wso2Config from './config';
import apiServices from '../server/config';

function generateCodeVerifier (length = 128) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let verifier = "";
  for (let i = 0; i < length; i++) {
    verifier += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return verifier;
}

async function generateCodeChallenge (verifier) {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

const ServicesAuthOIDC = {}

ServicesAuthOIDC.loginWithPKCE = async () => {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  localStorage.setItem('pkce_verifier', codeVerifier);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: wso2Config.clientId,
    redirect_uri: wso2Config.redirectUri,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    scope: wso2Config.scopes
  });

  window.location.href = `${wso2Config.authorizationEndpoint}?${params.toString()}`;
}

ServicesAuthOIDC.exchangeCodeForToken = async (code) => {
  const codeVerifier = localStorage.getItem("pkce_verifier");
  const data = {
    code: code,
    code_verifier: codeVerifier,
    redirect_uri: wso2Config.redirectUri,
    client_id: wso2Config.clientId
  };
  try {
    const res = await apiServices.post('/auth/oauth/token', data);
    return res.data
  } catch (err) {
    console.log("Error al obtener los tokens")
    console.log(error)
    return false
  }
}

export default ServicesAuthOIDC;