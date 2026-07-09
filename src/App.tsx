import { Route, Routes, Navigate } from 'react-router';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppLayout from './components/layout/AppLayout';

// NOTE: Depending on what the contributor named their folder, 
// you may need to change this path to './components/auth/ProtectedRoute'
import ProtectedRoute from './components/layout/ProtectedRoute'; 

import AppManagerPage from './pages/AppManagerPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import OnboardingPage from './pages/OnboardingPage';
import ResourcesPage from './pages/ResourcesPage';
import SuperAdminPage from './pages/SuperAdminPage';
import TaskDetailPage from './pages/TaskDetailPage';
import AuthPage from './pages/AuthPage';

// Helper component to prevent logged-in users from seeing the login page
const RedirectIfAuthenticated = ({ children }: { children: React.ReactNode }) => {
  const { session, isLoading } = useAuth();
  if (isLoading) return null;
  if (session) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <Routes>
          {/* Public Routes (Full Screen, No Sidebar) */}
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/auth" 
            element={
              <RedirectIfAuthenticated>
                <AuthPage />
              </RedirectIfAuthenticated>
            } 
          />

          {/* Protected Routes (Requires Login) */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/tasks/:taskId" element={<TaskDetailPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              
              {/* Contributor's Role-Protected Routes */}
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

              {/* 404 Catch-all */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;