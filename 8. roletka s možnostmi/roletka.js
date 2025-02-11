
//přířazení selctu( výberu možností) do proměnné mySelect
let mySelect = document.querySelector("#my-select")

//console.log(mySelect)
mySelect.addEventListener("change", function(event){
    console.log(event.target.value)
})
