
export class CrossFrameApi {

    // 代號
    name = ''

    // 目標視窗
    _target_window = undefined;

    // 下一個要發送的 id
    _event_current_id = 0;


// ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

    constructor(name, target_window) {
        this.name = name
        this._target_window = target_window
        window.addEventListener('message', this.receive.bind(this));
    }

// ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

    post(message) {
        console.log(this.name, 'post', message);
        this._target_window.postMessage(JSON.stringify(message), '*');
    }

    receive(event) {
        if (event.source === this._target_window) {
            // console.log(event);
            console.log(this.name, 'receive', JSON.parse(event.data));
        }
    }
}
