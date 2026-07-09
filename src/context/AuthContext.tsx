// src/context/AuthContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'

export type UserRole = 'newcomer' | 'app_manager' | 'super_admin'

export type AuthProfile = {
  id: string
  email: string | null
  full_name: string | null
  role: UserRole
}

type AuthContextValue = {
  session: Session | null
  user: User | null
  profile: AuthProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

async function getProfile(userId: string): Promise<AuthProfile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, full_name, role')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('Failed to load auth profile:', error.message)
    return null
  }

  return data as AuthProfile
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<AuthProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshProfile = async () => {
    if (!user) {
      setProfile(null)
      return
    }

    const profileRecord = await getProfile(user.id)
    setProfile(profileRecord)
  }

  useEffect(() => {
    let isMounted = true

    async function initialiseAuth() {
      setLoading(true)

      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error('Failed to get Supabase session:', error.message)
      }

      if (!isMounted) return

      const currentSession = data.session
      const currentUser = currentSession?.user ?? null

      setSession(currentSession)
      setUser(currentUser)

      if (currentUser) {
        const profileRecord = await getProfile(currentUser.id)

        if (isMounted) {
          setProfile(profileRecord)
        }
      }

      if (isMounted) {
        setLoading(false)
      }
    }

    initialiseAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      const nextUser = nextSession?.user ?? null

      setSession(nextSession)
      setUser(nextUser)

      if (nextUser) {
        const profileRecord = await getProfile(nextUser.id)
        setProfile(profileRecord)
      } else {
        setProfile(null)
      }

      setLoading(false)
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      throw new Error(error.message)
    }
  }

  const signOut = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signOut()

    setLoading(false)

    if (error) {
      throw new Error(error.message)
    }
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user,
      profile,
      loading,
      signIn,
      signOut,
      refreshProfile,
    }),
    [session, user, profile, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
