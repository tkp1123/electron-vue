
class webSocket {
    wsurl = 'ws://127.0.0.1:8080'
    websock = new WebSocket(this.wsurl)
    //打开
    open() {
        this.websock.onopen = (data) => {

        }
    }
    //错误
    error() {
        this.websock.onerror = (data) => {

        }
    }
    //接收消息
    getMessage(msg) {
        this.websock.onmessage = (data) => {

        }
    }
    //发送消息
    send() {
        this.websock.send = (data) => {

        }
    }
    //关闭
    close() {
        this.websock.onclose = (data) => {

        }
    }
}
export const webSoc = new webSocket()