
export default {
  async getServices ({ commit, state }) {
    const response = await fetch(state.APIRoute);

    const data = await response.json();

    commit('GET_SERVICES', data);
  }
}
