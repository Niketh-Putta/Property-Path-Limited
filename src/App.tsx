import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import AuthCallback from './pages/AuthCallback'
import VerifyAgent from './pages/VerifyAgent'
import ProjectBangaloreEastVillas from './pages/ProjectBangaloreEastVillas'
import ProjectSkhEchium from './pages/ProjectSkhEchium'
import ProjectVanam from './pages/ProjectVanam'
import Consultation from './pages/Consultation'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/verify-agent" element={<VerifyAgent />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/Vanam" element={<ProjectVanam />} />
        <Route path="/vanam" element={<Navigate to="/Vanam" replace />} />
        <Route
          path="/projects/bangalore-east-villas"
          element={<ProjectBangaloreEastVillas />}
        />
        <Route path="/projects/skh-echium" element={<ProjectSkhEchium />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
