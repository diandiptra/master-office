import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      users: [],
    };
  },
  actions: {
    getUsers({ commit }) {
      axios
        .get("http://localhost:8000/userview/masteroffice/")
        .then((response) => {
          commit("SET_POSTS", response.data);
        });
    },
  },
  mutations: {
    SET_POSTS(state, user) {
      state.users = user;
    },
  },
};

// Vue.use(Vuex);

// const state = {
//   users: [],
// };

// const getters = {};

// const actions = {
//   getUsers({ commit }) {
//     axios
//       .get("http://localhost:8000/userview/masteroffice/")
//       .then((response) => {
//         commit("SET_POSTS", response.data);
//       });
//   },
// };

// const mutations = {
//   SET_POSTS(state, user) {
//     state.users = user;
//   },
// };

// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations,
// });

// export default {
//   namespaced: true,
//   state() {
//     return {
//       users: [
//         {
//           id: 1,
//           code: "10929",
//           name: "Hardian Permana Putra",
//           desc: "Web Developer - BBI",
//         },
//       ],
//     };
//   },
//   getters: {
//     users(state) {
//       return state.users;
//     },
//   },
// };
