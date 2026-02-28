// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurTeam from './pages/OurTeam'
import Partnerships from './pages/Partnerships'
import KirdarAI from './pages/KirdarAI'
import DataGazeAI from './pages/DataGazeAI'
import Accelerators from './pages/Accelerators'
import AdvisoryConsulting from './pages/AdvisoryConsulting'
import ArtOfPossibleLabs from './pages/ArtOfPossibleLabs'
import SetupDesignWorkshops from './pages/SetupDesignWorkshops'
import BecomeAPartner from './pages/BecomeAPartner'
import LetsBeInTouch from './pages/LetsBeInTouch'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/kirdar-ai" element={<KirdarAI />} />
          <Route path="/datagaze-ai" element={<DataGazeAI />} />
          <Route path="/accelerators" element={<Accelerators />} />
          <Route path="/advisory-consulting" element={<AdvisoryConsulting />} />
          <Route path="/art-of-possible-labs" element={<ArtOfPossibleLabs />} />
          <Route path="/setup-design-workshops" element={<SetupDesignWorkshops />} />
          <Route path="/become-a-partner" element={<BecomeAPartner />} />
          <Route path="/lets-be-in-touch" element={<LetsBeInTouch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
