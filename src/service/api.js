import instanciaAxios from "./axiosInstance"

export async function listarCertificacoes() {
  const response = await instanciaAxios.get("/api/certificacoes/")
  return response.data
}

export async function listarExperiencias() {
  const response = await instanciaAxios.get("api/experiencias/") 
  return response.data
}

export async function buscarInformacoes() {
  const response = await instanciaAxios.get("/api/informacoes")
  return response.data
}

export async function listarProjetos() {
  const response = await instanciaAxios.get("api/portfolio/")
  return response.data
}