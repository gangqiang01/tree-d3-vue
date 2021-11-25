const mutations = {

    showLoading(state, status) {
        state.globalLoading = status
    },
    onlineDeviceCount(state, status){
        state.onlineDeviceCount = status;
    },
    systemImg(state, status){
        state.systemImg = status;
    }
}

export default mutations
