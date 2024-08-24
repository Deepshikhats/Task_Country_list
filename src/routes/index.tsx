import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PublicRoute from './publicRoutes/index.tsx';
import PATH from './routePaths';
import Layout from '@/components/layout/layout.tsx';
import PrivateRoute from './privateRoutes.tsx/index.tsx';

const Auth = lazy(() => import('@/pages/auth'));
const Home = lazy(() => import('@/pages/home'));

const Router = createBrowserRouter([
  {
    element: <Layout />,
    ErrorBoundary: () => <div>Loading</div>,
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
