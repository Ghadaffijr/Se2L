import { journeyPhases } from '../../data/journeyPhases'

type JourneyPhaseTimelineProps = {
  currentPhaseId: string
}

function getPhaseStatus(phaseIndex: number, currentPhaseIndex: number) {
  if (phaseIndex < currentPhaseIndex) {
    return 'complete'
  }

  if (phaseIndex === currentPhaseIndex) {
    return 'current'
  }

  return 'upcoming'
}

function getStatusLabel(status: 'complete' | 'current' | 'upcoming') {
  if (status === 'complete') {
    return 'Past'
  }

  if (status === 'current') {
    return 'Current'
  }

  return 'Upcoming'
}

function getStatusClasses(status: 'complete' | 'current' | 'upcoming') {
  if (status === 'complete') {
    return {
      badge: 'bg-emerald-100 text-emerald-700',
      dot: 'bg-emerald-500',
    }
  }

  if (status === 'current') {
    return {
      badge: 'bg-indigo-100 text-indigo-700',
      dot: 'bg-indigo-600',
    }
  }

  return {
    badge: 'bg-slate-100 text-slate-600',
    dot: 'bg-slate-300',
  }
}

function JourneyPhaseTimeline({ currentPhaseId }: JourneyPhaseTimelineProps) {
  const currentPhaseIndex = journeyPhases.findIndex(
    (phase) => phase.id === currentPhaseId,
  )

  return (
    <section
      className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      aria-labelledby="journey-phase-heading"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold text-slate-500">Journey roadmap</p>

        <h2
          id="journey-phase-heading"
          className="text-2xl font-bold text-slate-950"
        >
          Your settlement phases
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Follow your journey from preparation to everyday settlement.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {journeyPhases.map((phase, index) => {
          const phaseStatus = getPhaseStatus(index, currentPhaseIndex)
          const statusClasses = getStatusClasses(phaseStatus)

          return (
            <article
              key={phase.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span
                  className={`h-3 w-3 rounded-full ${statusClasses.dot}`}
                  aria-hidden="true"
                />

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${statusClasses.badge}`}
                >
                  {getStatusLabel(phaseStatus)}
                </span>
              </div>

              <h3 className="font-bold text-slate-950">{phase.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {phase.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default JourneyPhaseTimeline
