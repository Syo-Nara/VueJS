import { defineStore } from "pinia";
import Axios from "../services/callerService";

const useStore = defineStore({

  id: "user",
  state: () => ({
    admin: false,
    loggedIn: false,
    user:  null,
  }),


  actions: {
    async login(login, password) {
      try {
        const response = await Axios.post("/api/users/login",
        {
          login,
          password
        }, 
        {
          headers : {"Content-Type": "application/json"}
        });
        console.log(response);
        this.user = response.data;
        // router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async register(user){
      try {
        const response = await Axios.post("/api/users/register",
        {
          login: user.login,
          pseudo: user.pseudo,
          email: user.email,
          password: user.password
        }, 
        {
          headers : {"Content-Type": "application/json"}
        });
        console.log(response);
        // router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    setAdmin(state, value) {
      this.Admin = value;
    },
    setLoggedIn(state) {
      this.loggedIn = !this.loggedIn;
    },

    setUser(state, value) {
      this.user.login = value.login;
      this.user.pseudo = value.pseudo;
      this.user.mail = value.mail;
      this.user.password = value.password;
    },
  },
});

export default useStore;
