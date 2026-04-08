
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import SkillsPage from './pages/SkillsPage'
import Index from './pages/Index'
import ProjectDetailsPage from './pages/ProjectDetailsPage'

function App() {


  return (
    <>
      <BrowserRouter basename='/portfolio/'>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Index />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/project/:slug" element={<ProjectDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
