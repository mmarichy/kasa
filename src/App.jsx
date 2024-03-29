import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Logement from './pages/Logement/Logement'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/kasa" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default App
