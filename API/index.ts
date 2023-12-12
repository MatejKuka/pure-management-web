import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://localhost:7158/api/",
});

export default myAxios;