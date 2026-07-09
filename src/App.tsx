import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AppLayout from './components/layout/AppLayout'
import AppManagerPage from './pages/AppManagerPage'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import OnboardingPage from './pages/OnboardingPage'
import ResourcesPage from './pages/ResourcesPage'
import SuperAdminPage from './pages/SuperAdminPage'
import TaskDetailPage from './pages/TaskDetailPage'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/tasks/:taskId" element={<TaskDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />

          <Route
            path="/app-manager"
            element={
              <ProtectedRoute allowedRoles={['app_manager', 'super_admin']}>
                <AppManagerPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/super-admin"
            element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
