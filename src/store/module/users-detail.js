// import { APIPATH_MASTEROFFICE } from "../../api/api-paths";
// import { fnGET } from "../../api/api-methods";

const getDefaultState = () => {
  return {
    userDetail: false,
  };
};

const state = getDefaultState();

const mutations = {
  showDetail(state) {
    state.userDetail = !state.userDetail;
  },
};

const actions = {
  toggleDetail({ commit }, id) {
    commit("showDetail", id);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
