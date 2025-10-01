import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import ProtectedRoute from './ProtectedRoute';

import App from '@/App';
import Login from '@/views/login/Login';

const Control = lazy(() => import('@/views/Control'));
const Menu = lazy(() => import('@/views/Menu'));
const Role = lazy(() => import('@/views/Role'));
const User = lazy(() => import('@/views/User'));
const Intendant = lazy(() => import('@/views/User/intendant'));
const NormalUser = lazy(() => import('@/views/User/NormalUser'));

// 受保护的路由配置
const createProtectedRoute = (Component: React.ComponentType) => {
  return (
    <ProtectedRoute>
      <Component />
    </ProtectedRoute>
  );
};

const protectedRoutes = [
  {
    path: '/control',
    component: Control,
  },
  { path: '/menu', component: Menu },
  { path: '/role', component: Role },
  {
    path: '/user',
    component: User,
    children: [
      { path: 'intendant', component: Intendant },
      { path: 'normalUser', component: NormalUser },
    ],
  },
];
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/control" replace /> },
      ...protectedRoutes.map(({ path, component, children }) => ({
        path,
        element: createProtectedRoute(component),
        children: children?.map((child) => ({
          path: child.path,
          element: createProtectedRoute(child.component),
        })),
      })),
    ],
  },
]);

export default router;
