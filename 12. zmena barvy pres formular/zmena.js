
let myForm = document.querySelector("#my-form")
console.log(myForm)

let myBody = document.querySelector("body")

myForm.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event)
    let color = event.target.elements.color.value
    myBody.style.backgroundColor = color
})