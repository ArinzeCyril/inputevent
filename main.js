let inputField = document.getElementById("input-field");
let button = document.getElementById("button");
let list  = document.querySelector("ul");


inputField.addEventListener("keypress", function() {
    if (inputField.value.length > 0 && event.keyCode === 13) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value))
        list.appendChild(li)
        inputField.value = ""
    } 
})

button.addEventListener("click", function() {
    if (inputField.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value))
        list.appendChild(li)
        inputField.value = ""
    } 
})


//console.log(inputField.value)