import { createStore } from "vuex";
import { UserModule } from "../store/User";
export default createStore({
  state: {},
  // functions that effect the state
  mutations: {},

  //  functions that you call run from app that call mutations
  actions: {},
  modules: {
    User: UserModule,
  },
});
