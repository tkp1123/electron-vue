const getters = {
    isCollapse: state => state.collapse.isCollapse,
    parameterName: state => state.parameterName.parameterName,
    plc_parameter: state => state.mqtt.plc_parameter,
    plc_io: state => state.mqtt.plc_io,
}
export default getters