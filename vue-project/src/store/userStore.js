import { defineStore } from "pinia";
import Axios from "../services/callerService";

const useStore = defineStore("userStore", {
  state: () => ({
    Admin: false,
    loggedIn: false,
    user: localStorage.getItem("user") || null,
  }),

  getters: {
    isAdmin(state) {
      return state.Admin;
    },
    getUser(state) {
      return state.user;
    },
  },

  actions: {
    async login(credentials) {
      try {
        const user = Axios.post("/auth/login", credentials);
        this.user = user.data;
        localStorage.setItem("user", user);
        console.log(localStorage.getItem("user"));
        router.push("/");
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
