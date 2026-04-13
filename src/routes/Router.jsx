import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import AddItem from '@/pages/AddItem';
import Boards from '@/pages/Boards';
import Home from '@/pages/Home';
import Items from '@/pages/Items';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    element: <MainLayout />,
    children: [
      { path: '/items', element: <Items /> },
      { path: '/boards', element: <Boards /> },
      { path: '/additem', element: <AddItem /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
