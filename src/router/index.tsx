import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import ProtectedRoute from './ProtectedRoute'

import App from '@/App'
import Login from '@/views/login/Login'

const Control = lazy(() => import('@/views/Control'))
const Menu = lazy(() => import('@/views/Menu'))
const Role = lazy(() => import('@/views/Role'))
const User = lazy(() => import('@/views/User'))

// 受保护的路由配置
const createProtectedRoute = (Component: React.ComponentType) => {
  return (
    <ProtectedRoute>
      <Component />
    </ProtectedRoute>
  )
}

const protectedRoutes = [
  {
    path: '/control',
    component: Control,
  },
  { path: '/menu', component: Menu },
  { path: '/role', component: Role },
  { path: '/user', component: User },
]
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      ...protectedRoutes.map(({ path, component }) => ({
        path,
        element: createProtectedRoute(component),
      })),
    ],
  },
])

export default router
