import { useState } from "react";

const UserCard = (props) => {
  const { user } = props;
  return (
    <>
      <div className="card-container">
        <img className="photo" src={user.photo} alt="user photo" />
        <div className="text-container">
          <h3 className="card-text">{user.nombre}</h3>
          <h5 className="card-text" style={{ fontSize: '16px' }}>{user.profesion}</h5>
          <p className="card-text" style={{ fontSize: '14px' }}>{user.descripcion}</p>
        </div>
      </div>
      <style jsx>
        {`
          .card-container {
            width: 330px;
            height: 200px;
            overflow-y: scroll;
            background-color: #d2ffe5;
            display: flex;
            align-items: start;
            border-radius: 14px;
            border: 2px solid #000;
            padding: 20px;
          }
          .photo {
            width: 100px;
            object-fit: contain;
            border-radius: 50px;
            margin-top: 20px;
          }
          .text-container {
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: start;
            margin: 10px;
          }
          .card-text {
            color: #000;
            margin: 5px;
            text-align: left;
          }
        `}
      </style>
    </>
  )
}

export default UserCard;