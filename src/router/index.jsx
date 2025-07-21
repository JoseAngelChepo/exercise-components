import { Suspense , lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
const Login = lazy(() => import ('../pages/Login'));
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div><p>Cargando...</p></div>}>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='analytics' element={<Analytics />}/>
              <Route path='settings' element={<Settings />}/>
            </Route>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router;