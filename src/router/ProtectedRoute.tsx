import { Suspense } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default ProtectedRoute
