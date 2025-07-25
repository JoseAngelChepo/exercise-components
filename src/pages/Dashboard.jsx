import { Link, Outlet } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useServices } from '../data/providers/ServicesProvider';

const Dashboard = () => {
  const { logout } = useServices();
  
  const closeSession = () => {
    logout();
  }
  return (
    <>
      <div className='container-dashboard'> 
        <div className='container-header'>
          <h2 className='link-header'>Dashboard</h2>
          <div className='container-links'>
            <Link to='/dashboard/analytics' className='link-header'>
              Analytics
            </Link>
            <Link to='/dashboard/settings' className='link-header'>
              Settings
            </Link>
            <button className='button-logout' onClick={() => closeSession()}>
              <RiLogoutCircleRLine />
              Cerrar sesión
            </button>
          </div>
        </div>
        <Outlet />
      </div>
      <style jsx>
        {`
          .container-dashboard {
            width: 100%;
            height: 100vh;
          }
          .container-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f2f2f2;
          }
          .container-links {
            display: flex;
            gap: 10px;
          }
          .link-header {
            border-radius: 9px;
            color: #000;
            padding: 10px 10px;
            margin: 10px;
            font-weight: 600;
            cursor: pointer;
          }
          .button-logout {
            display: flex;
            align-items: center;
            padding: 10px 10px;
            margin: 10px;
            font-weight: 600;
            gap: 10px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}

export default Dashboard;