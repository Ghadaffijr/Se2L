import { Route, Routes } from 'react-router'
import AppLayout from './components/layout/AppLayout'
import AppManagerPage from './pages/AppManagerPage'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import OnboardingPage from './pages/OnboardingPage'
import ResourcesPage from './pages/ResourcesPage'
import SuperAdminPage from './pages/SuperAdminPage'
import TaskDetailPage from './pages/TaskDetailPage'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/tasks/:taskId" element={<TaskDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/app-manager" element={<AppManagerPage />} />
          <Route path="/super-admin" element={<SuperAdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App