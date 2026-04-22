
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import NotFound from './pages/NotFound'
import SkillsPage from './pages/SkillsPage'
import Index from './pages/Index'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import AccessibilityDemo from './pages/AccessibilityDemo'

function App() {


  return (
    <>
      <ThemeProvider>
        <BrowserRouter basename='/portfolio/'>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Index />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/accessibility" element={<AccessibilityDemo />} />
            <Route path="/project/:slug" element={<ProjectDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
