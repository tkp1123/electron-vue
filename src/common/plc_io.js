import store from '@/store/index'
class Plc_Io {
    getIoData() {
        if (store.state.mqtt.plc_io != '') {
            return eval('(' + store.state.mqtt.plc_io + ')')
        } else {
            return 0
        }
    }
}
export let plc_io = new Plc_Io()