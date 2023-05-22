import React, { useState, useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import {
  buscarInformacoes,
  listarCertificacoes,
  listarExperiencias,
  listarProjetos,
} from "./service/api"
 
import Header from "./components/layout/Header"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Resume from "./screens/resume"
import Projects from "./screens/projects"
import Contacts from "./screens/contacts"
import { Spin } from "antd"

function App() {
  const [headInformations, setHeadInformations] = useState({})
  const [certifications, setCertifications] = useState([])
  const [experiences, setExperiences] = useState([])
  const [about, setAbout] = useState('')
  const [projects, setProjects] = useState([])
  const [carregando, setCarregando] = useState(false)

  const getData = async () => {
    setCarregando(true)
    try {

      const informations = await buscarInformacoes()
      const certificationsArray = await listarCertificacoes()
      const experiencesArray = await listarExperiencias()
      const projectsArray = await listarProjetos()
  
      setHeadInformations({
        name: informations.nome,
        occupation: informations.cargo,
        photo: informations.foto
      })
      setAbout(informations.resumo)
      setCertifications(certificationsArray.map(item => {
        return {
          place: item.instituicao,
          title: item.titulo,
          code: item.id,
        }
      }))
      setExperiences(experiencesArray.map(item => {
        return {
        company: item.empresa,
        period: item.periodo,
        code: item.id,
        info: item.descricao,
      }
      }))
      setProjects(projectsArray.map(item => {
        return {
          code: item.id,
          title: item.titulo,
          description: item.descricao,
          tecnologies: item.tecnologias,
          repository_link: item.link_repositorio,
          aplication_link: item.link_aplicacao,
        }
      }))
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <Spin
        spinning={carregando}
        size="large"
        className=""
        tip="Carregando..."
      >
        <Header informations={headInformations} />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              index
              element={
                <Resume
                  about={about}
                  certifications={certifications}
                  experiences={experiences}
                />
              }
            />
            <Route path="projects" element={<Projects projects={projects} />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Spin>
      {/* <Header informations={headInformations} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            index
            element={
              <Resume
                about={about}
                certifications={certifications}
                experiences={experiences}
              />
            }
          />
          <Route path="projects" element={<Projects projects={projects} />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer /> */}
    </div>
  )
}

export default App
