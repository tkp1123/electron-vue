import store from '@/store/index'
class Plc_Parameter {
    getBasic() {
        if (store.state.mqtt.plc_parameter != '') {
            return eval('(' + store.state.mqtt.plc_parameter + ')').basic
        } else {
            return 0
        }
    }
    getControl() {
        if (store.state.mqtt.plc_parameter != '') {
            return eval('(' + store.state.mqtt.plc_parameter + ')').control
        } else {
            return 0
        }
    }
    getCurrent() {
        if (store.state.mqtt.plc_parameter != '') {
            return eval('(' + store.state.mqtt.plc_parameter + ')').current
        } else {
            return 0
        }
    }
    getElectricMachinery() {
        if (store.state.mqtt.plc_parameter != '') {
            return eval('(' + store.state.mqtt.plc_parameter + ')').electricmachinery
        } else {
            return 0
        }
    }
    getFactory() {
        if (store.state.mqtt.plc_parameter != '') {
            return eval('(' + store.state.mqtt.plc_parameter + ')').factory
        } else {
            return 0
        }
    }
    getFrequencyConversion() {
        if (store.state.mqtt.plc_parameter != '') {
            return eval('(' + store.state.mqtt.plc_parameter + ')').frequencyconversion
        } else {
            return 0
        }
    }
    getFunction() {
        if (store.state.mqtt.plc_parameter != '') {
            console.log(eval('(' + store.state.mqtt.plc_parameter + ')').function)
            return eval('(' + store.state.mqtt.plc_parameter + ')').function
        } else {
            return 0
        }
    }
    getTiming() {
        if (store.state.mqtt.plc_parameter != '') {
            return eval('(' + store.state.mqtt.plc_parameter + ')').timing
        } else {
            return 0
        }
    }
}
export let plc_parameter = new Plc_Parameter()