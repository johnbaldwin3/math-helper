import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeLimit: 0,
    multiplicand: 0,
    multiplier: 0,
    multiplicandMax: 0,
    multiplierMax: 0,
    product: 0,
    score: 0,
    timer: 0,
    increment: 0
  },
  mutations: {},
  actions: {}
});
