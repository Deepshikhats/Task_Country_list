import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import Routes from '@/routes/index';
function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
