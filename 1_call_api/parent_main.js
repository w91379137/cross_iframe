
import { CrossFrameApi } from "./cross_frame_api.js";

console.log('parent_main.js loaded')

let result = document.querySelector("#index_1");
if (result) {
    // console.log(result);
    result.src = './child.html';

    let apiService = new CrossFrameApi('parent_api', result.contentWindow)
    let data = {
        "key1": "value1"
    }

    setTimeout(() => {
        apiService.post(data) 
    }, 2000);
}

