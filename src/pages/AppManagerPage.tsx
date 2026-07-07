import { dashboardTasks } from '../data/settlementTasks'
import { settlementResources } from '../data/resources'
import { journeyPhases } from '../data/journeyPhases'

function getPhaseTitle(phaseId: string) {
  return (
    journeyPhases.find((phase) => phase.id === phaseId)?.title ??
    'Unassigned phase'
  )
}

function formatVisaTypes(visaTypes: string[]) {
  return visaTypes
    .map((visaType) =>
      visaType
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    )
    .join(', ')
}

function formatRegions(regions: string[]) {
  return regions
    .map((region) =>
      region
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    )
    .join(', ')
}

function formatLanguage(language: string) {
  if (language === 'en') {
    return 'English'
  }

  return language
}

function formatUrgencyLabel(urgency: string) {
  if (urgency === 'critical') {
    return 'Critical'
  }

  if (urgency === 'important') {
    return 'Important'
  }

  return 'Optional'
}

function getTaskUrgencyClass(urgency: string) {
  if (urgency === 'critical') {
    return 'bg-red-100 text-red-700'
  }

  if (urgency === 'important') {
    return 'bg-amber-100 text-amber-700'
  }

  return 'bg-slate-100 text-slate-600'
}

function getTaskReadiness(task: (typeof dashboardTasks)[number]) {
  const officialLinkCount = task.officialLinks?.length ?? 0

  if (officialLinkCount === 0 && task.urgency !== 'optional') {
    return {
      label: 'Needs links',
      className: 'bg-red-100 text-red-700',
    }
  }

  if (officialLinkCount === 0) {
    return {
      label: 'Review optional links',
      className: 'bg-amber-100 text-amber-700',
    }
  }

  return {
    label: 'Ready',
    className: 'bg-emerald-100 text-emerald-700',
  }
}

function AppManagerPage() {
  const readyTaskCount = dashboardTasks.filter(
    (task) => getTaskReadiness(task).label === 'Ready',
  ).length

  const needsLinksTaskCount = dashboardTasks.filter(
    (task) => getTaskReadiness(task).label === 'Needs links',
  ).length

  const optionalReviewTaskCount = dashboardTasks.filter(
    (task) => getTaskReadiness(task).label === 'Review optional links',
  ).length

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            App Manager Preview
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Review settlement content.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Review the tasks, official links, and resources currently configured for newcomer journeys.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Settlement tasks
            </p>

            <p className="mt-2 text-4xl font-extrabold text-slate-950">
              {dashboardTasks.length}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Tasks currently available in the newcomer dashboard.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Resource articles
            </p>

            <p className="mt-2 text-4xl font-extrabold text-slate-950">
              {settlementResources.length}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Resources currently available in the library.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Content readiness
            </p>

            <p className="mt-2 text-4xl font-extrabold text-slate-950">
              {readyTaskCount}/{dashboardTasks.length}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              {needsLinksTaskCount} need links. {optionalReviewTaskCount} optional task
              review pending.
            </p>
          </article>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-slate-950">
                Task content
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                These are the tasks currently shown to newcomers.
              </p>
            </div>

            <div className="max-h-[620px] space-y-4 overflow-y-auto pr-2">
              {dashboardTasks.map((task) => (
                <article
                  key={task.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {task.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getTaskUrgencyClass(
                        task.urgency,
                      )}`}
                    >
                      {formatUrgencyLabel(task.urgency)}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getTaskReadiness(task).className
                        }`}
                    >
                      {getTaskReadiness(task).label}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-950">{task.title}</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {task.description}
                  </p>

                  <div className="mt-3 space-y-2 text-xs font-semibold text-slate-500">
                    <p>Phase: {getPhaseTitle(task.phaseId)}</p>

                    <p>Language: {formatLanguage(task.language)}</p>

                    <p>Visa types: {formatVisaTypes(task.visaTypes)}</p>

                    <p>UK regions: {formatRegions(task.ukRegions)}</p>

                    <p>Official links: {task.officialLinks?.length ?? 0}</p>

                    <p>Video: {task.youtubeVideoUrl ? 'Available' : 'Not added'}</p>

                    <p>Estimated time: {task.estimatedTime}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-slate-950">
                Resource content
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                These are the support resources currently shown in the library.
              </p>
            </div>

            <div className="max-h-[620px] space-y-4 overflow-y-auto pr-2">
              {settlementResources.map((resource) => (
                <article
                  key={resource.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="mb-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                    {resource.category}
                  </p>

                  <h3 className="font-bold text-slate-950">
                    {resource.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>

                  <div className="mt-3 space-y-2 text-xs font-semibold text-slate-500">
                    <p>Language: {formatLanguage(resource.language)}</p>

                    <p>
                      Source: {resource.source}
                      {resource.isOfficial ? ' · Official' : ''}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default AppManagerPage