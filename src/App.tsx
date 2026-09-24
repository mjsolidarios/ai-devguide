import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import Demo from './pages/Demo'
import Home from './pages/Home'
import ResponsibleAI from './pages/ResponsibleAI'
import Setup from './pages/Setup'
import Talks from './pages/Talks'
import Tools from './pages/Tools'

const AgenticCoding = lazy(() => import('./decks/AgenticCoding'))
const AiForStudents = lazy(() => import('./decks/AiForStudents'))
const EfficientProgramming = lazy(() => import('./decks/EfficientProgramming'))

function DeckFallback() {
  return <div className="deck-shell" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/responsible-ai" element={<ResponsibleAI />} />
        </Route>
        <Route
          path="/talks/agentic-coding"
          element={
            <Suspense fallback={<DeckFallback />}>
              <AgenticCoding />
            </Suspense>
          }
        />
        <Route
          path="/talks/ai-for-students"
          element={
            <Suspense fallback={<DeckFallback />}>
              <AiForStudents />
            </Suspense>
          }
        />
        <Route
          path="/talks/efficient-programming"
          element={
            <Suspense fallback={<DeckFallback />}>
              <EfficientProgramming />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
