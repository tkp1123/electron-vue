const state = {
    identifier: '',//标识符
    snr: '',//部件序列号SNR
    materiel_code: '',//物料编码
    order: '',//销售订单号
    sap_batch: '',//SAP批次号
    tray_code: '',//托盘号
}
const mutations = {
    SET_IDENTIFIER: (state, data) => {
        state.identifier = data
    },
    SET_SNR: (state, data) => {
        state.snr = data
    },
    SET_MATERIEL_CODE: (state, data) => {
        state.materiel_code = data
    },
    SET_ORDER: (state, data) => {
        state.order = data
    },
    SET_SAP_BATCH: (state, data) => {
        state.sap_batch = data
    },
    SET_TRAY_CODE: (state, data) => {
        state.tray_code = data
    }
}
export default {
    namespaced: true,
    state,
    mutations
}
