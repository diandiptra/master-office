import { createStore } from "vuex";
// import axios from "axios";

import productsModule from "./module/users.js";

const store = createStore({
  modules: {
    prods: productsModule,
  },
  // state() {
  //   return {
  //     users: [],
  //   };
  // },
  // actions: {
  //   getUsers({ commit }) {
  //     axios
  //       .get("http://localhost:8000/userview/masteroffice/")
  //       .then((response) => {
  //         commit("SET_POSTS", response.data);
  //       });
  //   },
  // },
  // mutations: {
  //   SET_POSTS(state, user) {
  //     state.users = user;
  //   },
  // },
});

export default store;
