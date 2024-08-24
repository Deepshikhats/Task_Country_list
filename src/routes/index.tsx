import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './privateRoutes.tsx/index.tsx';
import PublicRoute from './publicRoutes/index.tsx';
import PATH from './routePaths';
import Auth from '@/pages/auth';

const Home = lazy(() => import('@/pages/home'));

const Router = createBrowserRouter([
  {
    element: <PublicRoute />,
    ErrorBoundary: () => <div>Loading...</div>,
    children: [
      {
        index: true,
        path: PATH.auth,
        element: <Auth />,
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
