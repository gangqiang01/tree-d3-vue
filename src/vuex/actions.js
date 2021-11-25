const actions = {
    showLoading ({ commit }, status) {
        commit('showLoading', status);
    },
    onlineDeviceCount({commit}, status){
        commit('onlineDeviceCount', status);
    },
    systemImg({commit}, status){
        commit('systemImg', status);
    }
}

export default actions
