import { Link } from 'react-router'

type DashboardTaskCardProps = {
  id: string
  category: string
  urgencyLabel: string
  urgencyClass: string
  title: string
  description: string
  phaseTitle: string
  taskTimingLabel: string
  taskTimingClass: string
  isComplete: boolean
  onToggle: (taskId: string) => void
}

function DashboardTaskCard({
  id,
  category,
  urgencyLabel,
  urgencyClass,
  title,
  description,
  phaseTitle,
  taskTimingLabel,
  taskTimingClass,
  isComplete,
  onToggle,
}: DashboardTaskCardProps) {
  const displayedTimingLabel = isComplete ? 'Completed' : taskTimingLabel
  const displayedTimingClass = isComplete
    ? 'bg-emerald-100 text-emerald-700'
    : taskTimingClass

  return (
    <article className="rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-slate-50">
      <div className="flex items-start gap-4">
        <input
          id={id}
          type="checkbox"
          checked={isComplete}
          onChange={() => onToggle(id)}
          onClick={(event) => event.stopPropagation()}
          className="mt-1 h-5 w-5 rounded border-slate-300 text-indigo-600"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
              {category}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-xs font-bold ${urgencyClass}`}
            >
              {urgencyLabel}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-xs font-bold ${displayedTimingClass}`}
            >
              {displayedTimingLabel}
            </span>
          </div>

          <Link
            to={`/dashboard/tasks/${id}`}
            className={`mt-2 block font-bold hover:text-indigo-600 ${
              isComplete ? 'text-slate-400 line-through' : 'text-slate-950'
            }`}
          >
            {title}
          </Link>

          <p className="mt-1 text-sm text-slate-600">{description}</p>

          <p className="mt-2 text-xs font-semibold text-slate-500">
            Phase: {phaseTitle}
          </p>

          <Link
            to={`/dashboard/tasks/${id}`}
            className="mt-3 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View task details →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default DashboardTaskCard