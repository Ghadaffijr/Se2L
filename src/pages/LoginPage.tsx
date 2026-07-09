// src/pages/LoginPage.tsx

import { useState, type FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

type LocationState = {
  from?: {
    pathname?: string
  }
}

function LoginPage() {
  const { user, profile, signIn, loading } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const locationState = location.state as LocationState | null
  const redirectPath = locationState?.from?.pathname ?? '/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  if (user && profile) {
    return <Navigate to={redirectPath} replace />
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')

    try {
      await signIn(email.trim(), password)
      navigate(redirectPath, { replace: true })
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to sign in. Please try again.'

      setErrorMessage(message)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-950">
      <section className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 p-8 text-white sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-lg font-extrabold shadow-lg">
            Se
          </div>

          <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sign in to Se2L
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Access the protected App Manager workspace to review settlement
            content, readiness, and platform analytics.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
            <p className="text-sm font-bold text-white">Protected access</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              App Manager pages require an approved role before access is
              granted.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            App Manager login
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
            Welcome back
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use the account created in Supabase Auth.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-slate-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                placeholder="Enter your password"
              />
            </div>

            {errorMessage ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                {errorMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-sky-700 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
