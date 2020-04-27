import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePath: "",
    title: "",
    subTitle: "",
    user: JSON.parse(localStorage.getItem("user")) || {},
    fangchengId:''
  },
  mutations: {
    setActivePath(state, payload) {
      state.activePath = payload.path;
      state.title = payload.title;
      state.subTitle = payload.subTitle;
    },
    saveFangChengId(state,payload){
      state.fangchengId=payload.fangchengId
    },
    saveUser(state, payload) {
      console.log("payload: ", payload.user);
      localStorage.setItem("user", JSON.stringify(payload.user));
      state.user = payload.user;
    }
  },
  actions: {},
  modules: {}
});
