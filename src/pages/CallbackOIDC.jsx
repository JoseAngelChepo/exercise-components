import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useServices } from "../data/providers/ServicesProvider";

const CallbackOIDC = () => {
  const navigate = useNavigate();
  const { exchangeCodeForToken } = useServices();

  useEffect(() => {
    console.log("Cargando callback page")
    const code = new URLSearchParams(window.location.search).get("code")
    console.log(code)
    if (code) {
      exchangeCodeForToken(code)
        .then(tokens => {
          if (tokens) {
            navigate("/dashboard")
          }
        })
    }
  }, [])
  return (
    <div className="container-center" style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <h1>Autenticando...</h1>
    </div>
  )
}

export default CallbackOIDC;