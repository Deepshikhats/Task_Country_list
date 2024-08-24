import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PublicRoute from './publicRoutes/index.tsx';
import PATH from './routePaths';
import Layout from '@/components/layout/layout.tsx';
import PrivateRoute from './privateRoutes.tsx/index.tsx';
import Home from '@/pages/home/home.tsx';

const Auth = lazy(() => import('@/pages/auth'));

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: PATH.auth,
            element: <Auth />,
          },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: PATH.home,
        element: <Home />,
      },
    ],
  },
]);
export default Router;
