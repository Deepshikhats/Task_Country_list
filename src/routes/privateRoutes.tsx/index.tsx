import PageLoader from '@/components/pageLoader';
import { useAppSelector } from '@/hooks/index';
import { RootState } from '@/store/store';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isValidUser } = useAppSelector((state: RootState) => state.authSlice);
  if (isValidUser === null) {
    return <PageLoader />;
  } else if (!(isValidUser || localStorage.getItem('isValidUser'))) {
    return <Navigate to={'/auth'} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
