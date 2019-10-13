import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
    favourite: []
  },
  mutations: {
    SET_SAVERESULTS(state, payload) {
      state.searchResult.push(...payload);
    },

    SET_SAVEONFAVOURITE(state, payload) {
      let itemAlreadyInList = state.favourite.find(item => {
        return item.name === payload.name;
      });
      // if the item is not in the list
      if (!itemAlreadyInList) {
        state.favourite.push(payload);
      }
    }
  },
  actions: {
    saveResults({ commit, state }, dataCollection) {
      const payload = dataCollection;
      commit("SET_SAVERESULTS", payload);
    }
  }
});
