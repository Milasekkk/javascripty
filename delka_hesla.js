/*
Do proměnné password uložte libovolné heslo

Pokud budete mít heslo vce jak 13 znaků, tak vypište 
"Velmi silné heslo". POkud bude mít mezi 8 až 13(včetně),
tak vypite"Silné heslo". Pokud méně než 8, tak vypište
"Slabé heslo.

Zjistěte, zda heslo obsahuje znaky 1234 v tomto pořadí.
Pokud ano, tka se vypíše do konzole "Heslo nesmí obsahovat 1234".
Jinak se vypíše. "Heslo je v pořádku"
*/

let password = "3452393493298"
let delka = password.length
let obsah = password.includes("1234")
if(delka > 13){
    console.log("Velmi silné heslo")
} else if(delka <= 13 && delka >= 8){
    console.log("Silné heslo")
    } else{
        console.log("Slabé heslo")
    }

if(obsah === true){
    console.log("Heslo nemsí obsahovat 1234")
}else {
    console.log("Heslo je v pořádku")
}


