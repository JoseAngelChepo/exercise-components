import UserCard from "./UserCard";
const users = [
  {
    "photo": "/angellopez.jpeg",
    "nombre": "Alejandra",
    "profesion": "Diseñadora UX/UI",
    "descripcion": "Apasionada por crear interfaces intuitivas que mejoran la experiencia del usuario en productos digitales."
  },
  {
    "photo": "/angellopez.jpeg",
    "nombre": "Roberto",
    "profesion": "Desarrollador Full Stack",
    "descripcion": "Especializado en construir aplicaciones web escalables con tecnologías modernas como React y Node.js."
  },
  {
    "photo": "/angellopez.jpeg",
    "nombre": "Camila",
    "profesion": "Científica de Datos",
    "descripcion": "Trabaja analizando grandes volúmenes de datos para encontrar patrones y construir modelos predictivos."
  }
]

const ContainerFlexbox = () => {
  return (
    <>
      <div className="container">
        {users.map(user => 
          <UserCard user={user} />
        )}
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
          }
        `}
      </style>
    </>
  )
}

export default ContainerFlexbox;