let heading = document.querySelector("h1")
//console.log(heading)
heading.addEventListener("mouseenter", function(event){
    heading.style.color = "blue"
    heading.style.fontSize = "50px"
})

heading.addEventListener("mouseleave", function(event){
    heading.style.color = "green"
    heading.style.display = "none"
    heading.style.fontWeight = "bold"
})

/*
//přiřazení barvy textu do heading
heading.style.color = "blue"
*/
