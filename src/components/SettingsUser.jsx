import { FaRegEdit } from "react-icons/fa";
import RoleGate from "./RoleGate";

const SettingsUser = (props) => {
  const { user } = props;
  return (
    <>
      <div className="container-settings-user">
        <img className="image-user" src="/angellopez.jpeg" alt="user_image" />
        <div>
          <p>Nombre: {user.name}</p>
          <p>Apellido(s): {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
        <RoleGate allowedRoles={['admin', 'user']}>
          <div>
            <button className="flex gap-2 items-center rounded bg-blue-200 py-2 px-4">
              <FaRegEdit />
              Editar
            </button>
          </div>
        </RoleGate>
      </div>
      <style jsx>
        {`
          .container-settings-user {
            display: flex;
            gap: 20px;
            padding: 50px;
          }
          .image-user {
            width: 100px;
            border-radius: 50%;
            object-fit: contain;
          }
        `}
      </style>
    </>
  )
}

export default SettingsUser;