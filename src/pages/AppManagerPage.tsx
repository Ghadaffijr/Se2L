// src/pages/AppManagerPage.tsx

import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

type JourneyPhaseCount = {
  journey_type: string
  phase_key: string
  active_user_count: number
}

function formatLabel(value: string) {
  return value
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function AppManagerPage() {
  const [counts, setCounts] = useState<JourneyPhaseCount[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function loadJourneyPhaseCounts() {
      setLoading(true)
      setErrorMessage(null)

      const { data, error } = await supabase
        .from('app_manager_journey_phase_counts')
        .select('journey_type, phase_key, active_user_count')
        .order('journey_type', { ascending: true })
        .order('phase_key', { ascending: true })

      if (error) {
        console.error('Failed to load journey phase counts:', error.message)
        setErrorMessage(error.message)
        setCounts([])
        setLoading(false)
        return
      }

      setCounts((data ?? []) as JourneyPhaseCount[])
      setLoading(false)
    }

    loadJourneyPhaseCounts()
  }, [])

  const totalActiveUsers = useMemo(
    () =>
      counts.reduce(
        (total, currentRow) => total + currentRow.active_user_count,
        0,
      ),
    [counts],
  )

  const totalJourneys = useMemo(
    () => new Set(counts.map((currentRow) => currentRow.journey_type)).size,
    [counts],
  )

  const totalActivePhases = useMemo(
    () => new Set(counts.map((currentRow) => currentRow.phase_key)).size,
    [counts],
  )

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
          App Manager Analytics
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
          Journey phase activity.
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Review active newcomer counts grouped by journey type and current
          settlement phase.
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Active newcomers
          </p>

          <p className="mt-2 text-4xl font-extrabold text-slate-950">
            {loading ? '...' : totalActiveUsers}
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Total active users currently included in the analytics view.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Active journey types
          </p>

          <p className="mt-2 text-4xl font-extrabold text-slate-950">
            {loading ? '...' : totalJourneys}
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Journey types with at least one active newcomer row.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Active phases
          </p>

          <p className="mt-2 text-4xl font-extrabold text-slate-950">
            {loading ? '...' : totalActivePhases}
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Settlement phases currently represented in live newcomer data.
          </p>
        </article>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-950">
            Active users by journey and phase
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use this overview to understand where newcomers currently are across
            settlement journeys and phases.
          </p>
        </div>

        {loading && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm font-semibold text-slate-600">
            Loading journey phase analytics...
          </div>
        )}

        {!loading && errorMessage && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="text-sm font-bold text-red-700">
              Could not load analytics
            </p>

            <p className="mt-2 text-sm leading-6 text-red-700">
              {errorMessage}
            </p>
          </div>
        )}

        {!loading && !errorMessage && counts.length === 0 && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-bold text-amber-800">
              No active journey data yet
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-700">
              Active newcomer counts will appear here once users complete onboarding
              and are assigned to a journey and settlement phase.
            </p>
          </div>
        )}

        {!loading && !errorMessage && counts.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 font-bold text-slate-600">
                    Journey type
                  </th>

                  <th className="px-5 py-4 font-bold text-slate-600">
                    Current phase
                  </th>

                  <th className="px-5 py-4 text-right font-bold text-slate-600">
                    Active users
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white">
                {counts.map((row) => (
                  <tr key={`${row.journey_type}-${row.phase_key}`}>
                    <td className="px-5 py-4 font-semibold text-slate-950">
                      {formatLabel(row.journey_type)}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {formatLabel(row.phase_key)}
                    </td>

                    <td className="px-5 py-4 text-right text-xl font-extrabold text-slate-950">
                      {row.active_user_count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </section>
  )
}

export default AppManagerPage