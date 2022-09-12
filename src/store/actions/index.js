
import fetcher from "@/utils/fetcher";

export default {
  async getServices ({ commit, state }) {
    fetcher(state.APIRoute)
      .then(data => {
        commit('GET_SERVICES', data.values);
      });
  },

  selectService ({ commit, state }, payload) {
    commit('ADD_SELECTED_SERVICE', [
      ...state.selectedServices, payload
    ]);
  },

  removeService ({ commit, state }, payload) {
    commit('REMOVE_SELECTED_SERVICE', state.selectedServices.filter(({ id }) => id !== payload));
  }
}
