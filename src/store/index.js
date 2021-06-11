import { createStore } from "vuex";
import usersdetail from "./module/users-detail";

const store = createStore({
  modules: {
    usersdetail,
  },
});

export default store;
