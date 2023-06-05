import axios from "axios"

const instanciaAxios = axios.create({
  baseURL: "https://site-pessoal-api-cuhk.onrender.com",
})

export default instanciaAxios
