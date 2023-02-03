// export default function authHeader() {
//     let user = JSON.parse(localStorage.getItem('user'));

//     if (user && user.accessToken) {
//       return { Authorization: 'Bearer ' + user.accessToken };
//     } else {
//       return {};
//     }
//   }

import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8289",
});

export default Axios;
