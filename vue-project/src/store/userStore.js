import { defineStore } from "pinia";

console.log("Store Start");

const useStore = defineStore("userStore", {
  state: () => ({
    Admin: false,
  }),

  getters: {
    isAdmin(state) {
      return state.Admin;
    },
  },

  mutations: {
    setAdmin(state, value) {
      state.Admin = value;
    },
  },
});

console.log("Store End");

export default useStore;
