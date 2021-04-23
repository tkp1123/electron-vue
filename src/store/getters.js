const getters = {
    isCollapse: state => state.collapse.isCollapse,

    identifier: state => state.qrcode.identifier,
    snr: state => state.qrcode.snr,
    materiel_code: state => state.qrcode.materiel_code,
    order: state => state.qrcode.order,
    sap_batch: state => state.qrcode.sap_batch,
    tray_code: state => state.qrcode.tray_code,
}
export default getters