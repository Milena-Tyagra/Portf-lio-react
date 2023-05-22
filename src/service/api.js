import instanciaAxios from "./axiosInstance"

export async function listarCertificacoes() {
  const response = await instanciaAxios.get("/certificacoes/")
  return response.data
}

export async function listarExperiencias() {
  const response = await instanciaAxios.get("/experiencias/") 
  return response.data
}

export async function buscarInformacoes() {
  const response = await instanciaAxios.get("/informacoes/1")
  return response.data
}

export async function listarProjetos() {
  const response = await instanciaAxios.get("/projetos/")
  return response.data
}