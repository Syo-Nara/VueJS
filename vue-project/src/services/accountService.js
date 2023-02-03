import Axios from './callerService'

let login = (credentials) => {
    return Axios.post('/auth/login', credentials)
}

let logout = () => {
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

export const accountService = {
    login,
    logout,
    saveToken,
    getToken,
    isLogged
}

// const API_URL = 'http://localhost:8289/api/auth/';

// class AuthService {
//   async login(user) {
//     const response = await axios
//           .post(API_URL + 'signin', {
//               login: user.login,
//               password: user.password
//           });
//       if (response.data.accessToken) {
//           localStorage.setItem('user', JSON.stringify(response.data));
//       }
//       return response.data;
//   }

//   logout() {
//     localStorage.removeItem('user');
//   }

//   register(user) {
//     return axios.post(API_URL + 'signup', {
//       login: user.login,
//       pseudo: user.pseudo,
//       password: user.password
//     });
//   }
// }

// export default new AuthService();