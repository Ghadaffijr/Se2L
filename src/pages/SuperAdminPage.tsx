
const platformStats = [
  {
    id: 'app-managers',
    label: 'App Managers',
    value: '2',
    description: 'People who can review and manage settlement content.',
  },
  {
    id: 'visa-journeys',
    label: 'Visa journeys',
    value: '4',
    description: 'Visa types currently prepared for the platform.',
  },
  {
    id: 'uk-regions',
    label: 'UK regions',
    value: '4',
    description: 'England, Wales, Scotland, and Northern Ireland.',
  },
  {
    id: 'content-status',
    label: 'Content status',
    value: 'Draft',
    description: 'Content workflow is currently in draft mode.',
  },
]

const platformChecks = [
  {
    id: 'task-content',
    title: 'Task content configured',
    status: 'Ready',
  },
  {
    id: 'resource-library',
    title: 'Resource library configured',
    status: 'Ready',
  },
  {
    id: 'onboarding-flow',
    title: 'Newcomer onboarding flow',
    status: 'Ready',
  },
  {
    id: 'backend-connection',
    title: 'Backend connection',
    status: 'Pending',
  },
  {
    id: 'authentication',
    title: 'Authentication and roles',
    status: 'Pending',
  },
]

function SuperAdminPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Super Admin
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Manage the Se2L platform.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Review platform readiness, supported journeys, regions, admin
            access, and content status.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {platformStats.map((stat) => (
            <article
              key={stat.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-500">
                {stat.label}
              </p>

              <p className="mt-2 text-4xl font-extrabold text-slate-950">
                {stat.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stat.description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Platform readiness
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              These checks show what is ready in the prototype and what still
              needs backend implementation.
            </p>

            <div className="mt-6 space-y-4">
              {platformChecks.map((check) => (
                <article
                  key={check.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="font-bold text-slate-950">{check.title}</h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      check.status === 'Ready'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {check.status}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Admin responsibilities
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              The Super Admin will later control platform-level settings that
              should not be managed by normal App Managers.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                Manage App Manager access and permissions.
              </li>

              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                Manage supported visa types and UK regions.
              </li>

              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                Review content quality, publishing status, and platform
                readiness.
              </li>

              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                Monitor future analytics for onboarding, task completion, and
                resource engagement.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  )
}

export default SuperAdminPage