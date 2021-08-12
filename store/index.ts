export const state = () => ({
  appTheme: "dark-theme"
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  updateAppTheme: (state, payload) => {
    state.appTheme = payload;
  }
};

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   }
// }
