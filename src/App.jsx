import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
 
import Header from "./components/layout/Header"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Resume from "./screens/resume"
import Projects from "./screens/projects"
import Contacts from "./screens/contacts"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
