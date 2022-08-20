
import { CrossFrameApi } from "./cross_frame_api.js";

console.log('child_main.js loaded')

let target_window = window.parent
if (target_window) {
    
    let apiService = new CrossFrameApi('child_api', window.parent)
    let data = {
        "key2": "value2"
    }

    setTimeout(() => {
        apiService.post(data) 
    }, 4000);
}

