import * as types from '@/store/types'

// Initial State
const initialState = []

// Actions
const actions = {

}

// Getters
const getters = {
  [types.GET_ALL_RULES] (state) {
    return state
  },

  [types.GET_RULE_BY_ID] (state, id) {
    return state.find(r => r.id === id)
  }
}

// Mutations
const mutations = {
  [types.ADD_RULE] (state, rule) {
    state.push(rule)
  },

  [types.UPDATE_RULE] (state, rule) {
    const index = state.findIndex(r => r.id === rule.id)
    state[index] = rule
  }
}

export default {
  state: initialState,
  actions,
  getters,
  mutations
}