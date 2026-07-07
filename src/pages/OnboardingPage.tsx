import { type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import { saveJourneyDetails } from '../utils/journeyStorage'

function OnboardingPage() {
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const journeyDetails = {
      visaType: String(formData.get('visaType') ?? ''),
      arrivalDate: String(formData.get('arrivalDate') ?? ''),
      region: String(formData.get('region') ?? ''),
      language: String(formData.get('language') ?? ''),
      dependants: String(formData.get('dependants') ?? ''),
    }

    saveJourneyDetails(journeyDetails)

    navigate('/dashboard', {
      state: journeyDetails,
    })
  }

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Start your settlement journey
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Tell us about your move to the UK.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Se2L uses your visa type, actual or planned UK arrival date, region,
            language, and family needs to create your personalised settlement
            journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="visaType"
                className="block text-sm font-semibold text-slate-700"
              >
                Visa type
              </label>

              <select
                id="visaType"
                name="visaType"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="">Select visa type</option>
                <option value="skilled-worker">Skilled Worker</option>
                <option value="student">Student</option>
                <option value="spouse-family">Spouse / Family</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="arrivalDate"
                className="block text-sm font-semibold text-slate-700"
              >
                UK arrival date
              </label>

              <input
                id="arrivalDate"
                name="arrivalDate"
                type="date"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
              />

            </div>

            <div>
              <label
                htmlFor="region"
                className="block text-sm font-semibold text-slate-700"
              >
                UK region
              </label>

              <select
                id="region"
                name="region"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="">Select region</option>
                <option value="england">England</option>
                <option value="wales">Wales</option>
                <option value="scotland">Scotland</option>
                <option value="northern-ireland">Northern Ireland</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="language"
                className="block text-sm font-semibold text-slate-700"
              >
                Preferred language
              </label>

              <select
                id="language"
                name="language"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="arabic">Arabic</option>
                <option value="yoruba">Yoruba</option>
                <option value="igbo">Igbo</option>
                <option value="hausa">Hausa</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="dependants"
                className="block text-sm font-semibold text-slate-700"
              >
                Are you settling with dependants?
              </label>

              <select
                id="dependants"
                name="dependants"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="">Select an option</option>
                <option value="none">No dependants</option>
                <option value="adult">Yes, adult dependant</option>
                <option value="children">Yes, child dependant</option>
                <option value="both">Yes, adult and child dependants</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
            <Link
              to="/"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Back
            </Link>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Create my journey
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default OnboardingPage