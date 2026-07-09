// src/components/auth/ProtectedRoute.tsx

import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth, type UserRole } from '../../context/AuthContext'

type ProtectedRouteProps = {
  children: ReactNode
  allowedRoles?: UserRole[]
}

function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Checking access
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950">
            Loading your Se2L workspace
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Please wait while we confirm your account permissions.
          </p>
        </section>
      </main>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (allowedRoles && (!profile || !allowedRoles.includes(profile.role))) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <section className="max-w-lg rounded-3xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
            Access denied
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950">
            You do not have permission to view this page
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This area is restricted to approved Se2L App Managers and Super
            Admins.
          </p>
        </section>
      </main>
    )
  }

  return children
}

export default ProtectedRoute
