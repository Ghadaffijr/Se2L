import { useState } from 'react'
import { settlementResources } from '../data/resources'

const resourceCategories = [
  'All',
  ...Array.from(
    new Set(settlementResources.map((resource) => resource.category)),
  ),
]

function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredResources = settlementResources.filter((resource) => {
    const searchValue = searchTerm.toLowerCase()

    const matchesSearch =
      resource.title.toLowerCase().includes(searchValue) ||
      resource.description.toLowerCase().includes(searchValue) ||
      resource.category.toLowerCase().includes(searchValue) ||
      resource.source.toLowerCase().includes(searchValue)

    const matchesCategory =
      selectedCategory === 'All' || resource.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Resource library
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Trusted settlement guidance.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Browse trusted links and practical guidance for healthcare, work, money, and family setup in the UK.
          </p>
        </div>

        <div className="mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <label
              htmlFor="resourceSearch"
              className="block text-sm font-semibold text-slate-700"
            >
              Search resources
            </label>

            <input
              id="resourceSearch"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search GP, bank, school, tax..."
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label
              htmlFor="resourceCategory"
              className="block text-sm font-semibold text-slate-700"
            >
              Filter by category
            </label>

            <select
              id="resourceCategory"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            >
              {resourceCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredResources.map((resource) => (
              <article
                key={resource.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                  {resource.category}
                </p>

                <h2 className="text-xl font-bold text-slate-950">
                  {resource.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {resource.description}
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-semibold text-slate-500">
                    Source: {resource.source}
                    {resource.isOfficial ? ' · Official' : ''}
                  </p>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    Open guidance →
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              No resources found
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Try a different search word or category.
            </p>
          </div>
        )}
      </section>
    </>
  )
}

export default ResourcesPage