
console.log('parent_main.js loaded')

let result = document.querySelector("#index_1");
if (result) {
    // console.log(result);
    result.src = './child.html';
}

