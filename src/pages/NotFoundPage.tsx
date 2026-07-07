import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <>
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <p className="mb-3 inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Page not found
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            This page does not exist.
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            The link may be incorrect, or the page may not have been created
            yet. You can return to the home page and continue your Se2L journey.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Go home
            </Link>

            <Link
              to="/resources"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              View resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage