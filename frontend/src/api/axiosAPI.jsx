import axios from "axios"

const apiSettings = axios.create({
   baseURL: 'https://swapi.dev/api/',
});

export default apiSettings;