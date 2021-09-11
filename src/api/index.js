import axios from "axios"
const baseAxios = axios.create({ baseURL: "https://api.github.com/search/repositories?q=" })

export const githubAPI = {
	getRepo: term => baseAxios.get(`${term}`),
}
