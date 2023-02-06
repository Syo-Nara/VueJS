import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8289",
});

export default Axios;
