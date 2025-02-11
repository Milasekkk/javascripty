
//tlačítko načteme do proměnné jako všechno ostatní
let button = document.querySelector("button")
console.log(button)

//přidáme událost při najetí myši na tlašítko
button.addEventListener("mouseenter", function(event){
    console.log("test")
})

//při odjetí myši  "mouseleave"
//klávesnícové
//keydown - mačkání klávesy směrem dolu
//keyup - když mam stisknutou klávesu tak nic ale jak minule jí pustím, tak se provede
// keypress - při stištění klávesnice yhodí jakou klávesu zmáčknul uživ

//nedává se na button, al espíš na celé body
document.querySelector("body").addEventListener("keypress", function(event){
    console.log(event.key)
})

