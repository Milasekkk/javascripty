let myDiv = document.querySelector(".square")

let newLeft = null
let newTop = null

document.querySelector("body").addEventListener("keydown", function(event){
    if(event.key === "a"){
        newLeft = newLeft - 10
        myDiv.style.left = newLeft + "px"
    } else if (event.key === "d"){
        newLeft = newLeft + 10
        myDiv.style.left = newLeft + "px"
    } else if(event.key === "s"){
        newTop = newTop + 10
        myDiv.style.top = newTop + "px"    
    }else if(event.key === "w"){
        newTop = newTop - 10
        myDiv.style.top = newTop + "px"
    }
}) 

let heading = document.querySelector("h1")
let style = getComputedStyle(heading)
console.log(style.backgroundColor)

let najeti = document.querySelector("h1").addEventListener("mouseenter", function(event){
    heading.style.backgroundColor = "purple"
    heading.addEventListener("mouseleave", function(event){
        heading.style.backgroundColor = "white"
    })
})
heading.style.backgroundColor = "yellow"