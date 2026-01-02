import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import VerifyAgent from './pages/VerifyAgent'
import ProjectBangaloreEastVillas from './pages/ProjectBangaloreEastVillas'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/verify-agent" element={<VerifyAgent />} />
        <Route
          path="/projects/bangalore-east-villas"
          element={<ProjectBangaloreEastVillas />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
