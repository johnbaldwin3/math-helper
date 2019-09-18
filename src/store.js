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
    scoreRecords: [],
    timerLength: 0,
    timeLeft: 0,
    increment: 0
  },
  mutations: {
    SET_MAX_MULTIPLICAND: (state, payload) => {
      state.multiplicandMax = payload;
    },
    SET_MAX_MULTIPLIER: (state, payload) => {
      state.multiplierMax = payload;
    },
    SET_MULTIPLIER: state => {
      state.multiplier = Math.floor(Math.random() * Math.floor(state.multiplierMax + 1));
    },
    SET_MULTIPLICAND: state => {
      state.multiplicand = Math.floor(Math.random() * Math.floor(state.multiplicandMax + 1));
    },
    SET_TIMER: (state, payload) => {
      state.timeLimit = payload;
    },
    START_TIMER: state => {

    },
    END_TIMER: state => {

    },
    SAVE_SCORE: (state, payload) => {
      // eventually save score in DB with user name.
      
      // get user name

      // get score

      // add to list of scores
    },
    GET_PRODUCT: state => {
      state.product = state.multiplicand * state.multiplier;
    }

  },
  actions: {
    setMultiplicandMax: ({ commit }, payload) => {
      commit("SET_MAX_MULTIPLICAND", payload);
    },
    setMultiplierMax: ({ commit }, payload) => {
      commit("SET_MAX_MULTIPLIER", payload);
    },
    setTimerLength: ({ commit }, payload) => {
      commit("SET_TIMER", payload);
    },
    setMultiplicand: ({ commit }) => {
      commit("SET_MULTIPLICAND");
    },
    setMultiplier: ({ commit }) => {
      commit("SET_MULTIPLIER");
    },
    getProduct: ({ commit }) => {
      commit("GET_PRODUCT");
    },
    createNewProblem: ({commit}) => {
      commit("SET_MULTIPLIER");
      commit("SET_MULTIPLICAND");
      commit("GET_PRODUCT");
    }
  },
  getters: {
    timeLimit: state => state.timeLimit,
    multiplicand: state => state.multiplicand,
    multiplier: state => state.multiplier,
    product: state => state.product,
    score: state => state.score,
    scoreRecords: state => state.stateRecords,
    timer: state => state.timer,
    timeLeft: state => state.timeLeft,
  }
});
