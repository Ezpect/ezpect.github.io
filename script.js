import Stack from './stacks.js';

let stack = new Stack

let insertButton = document.getElementById('insert')
let removeButton = document.getElementById('remove')
let emptyButton = document.getElementById('empty')
let input = document.getElementById('input')

function makeNotification(notification){
    let message = document.getElementById("message")

    message.innerHTML = notification;

    setTimeout(() => {
        message.innerHTML =""
    }, 1500);
}

document.getElementById('refresh').addEventListener("click", () =>{
    window.location = "/"
})
function addArray(){
    let array = document.createElement("div");
    array.className = 'array';
    document.getElementById('middle').appendChild(array);

    for(let index = 0; index < stack.size; index++){

        let box = document.createElement("div");
        box.className = 'box'
        box.innerHTML = stack.getStack()[index] == undefined ? "  " : stack.getStack()[index]
        array.appendChild(box)

    }
   array.children[stack.current].style.backgroundColor = 'green'
}

insertButton.addEventListener("click", () => {
    let insertValue = stack.insert(input.value)

    if (insertValue == "Stack Overflow!") {
        makeNotification(insertValue)
    } else {
        addArray()
    }
})
removeButton.addEventListener("click", () => {
    let removeValue = stack.remove(input.value)

    if (removeValue == "Stack Underflow!") {
        makeNotification(removeValue)
    } else {
        addArray()
    }
    
})
emptyButton.addEventListener("click", () => {
    makeNotification(stack.empty())
})       