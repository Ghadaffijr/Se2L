import { useState } from 'react'
import { Link, NavLink } from 'react-router'

const navLinkBaseClass = 'rounded-lg px-3 py-2 transition'

function getNavLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? `${navLinkBaseClass} bg-indigo-100 text-indigo-700`
    : `${navLinkBaseClass} text-slate-600 hover:bg-slate-100 hover:text-indigo-600`
}

function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function handleMobileMenuToggle() {
    setIsMobileMenuOpen((currentValue) => !currentValue)
  }

  function handleMobileMenuClose() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        className="mx-auto max-w-7xl px-6 py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              S
            </div>

            <div>
              <p className="text-lg font-bold text-slate-950">Se2L</p>
              <p className="text-xs text-slate-500">
                Settle smarter, step by step
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 text-sm font-medium md:flex">
            <NavLink to="/" end className={getNavLinkClass}>
              Home
            </NavLink>

            <NavLink to="/dashboard" className={getNavLinkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/resources" className={getNavLinkClass}>
              Resources
            </NavLink>

            <NavLink to="/onboarding" className={getNavLinkClass}>
              Start journey
            </NavLink>
          </div>

          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div
            id="mobile-navigation"
            className="mt-4 grid gap-2 border-t border-slate-200 pt-4 text-sm font-medium md:hidden"
          >
            <NavLink
              to="/"
              end
              onClick={handleMobileMenuClose}
              className={getNavLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard"
              onClick={handleMobileMenuClose}
              className={getNavLinkClass}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/resources"
              onClick={handleMobileMenuClose}
              className={getNavLinkClass}
            >
              Resources
            </NavLink>

            <NavLink
              to="/onboarding"
              onClick={handleMobileMenuClose}
              className={getNavLinkClass}
            >
              Start journey
            </NavLink>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default AppHeader