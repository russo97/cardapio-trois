
export default {
  GET_SERVICES (state, payload) {
    state.services = payload;
  },

  ADD_SELECTED_SERVICE (state, payload) {
    state.selectedServices = payload;
  }
}
