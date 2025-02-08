/*
Vytvořte pole toDo s úkoly:
sestříhat video
uklidit pokoj
vyluxovat

vypište pole ve tvaru:¨
1. sestříhat video
2. uklidit pokoj
3. vyluxovat

vytvořte prázdné pole s pomocí cyklu ho 
naplňte čísly od 0 do 4, pole vypište do konzole
*/

let toDo = ["Sestříhat video", "Uklidit pokoj", "Vyluxovat"]

for(let i = 0; i < 3; i++){
    console.log(`${i+1}. ${toDo[i]}`)
}

let pole = [0, 1, 2, , 4]
let nove = []
for(let j = 0; j < pole.length; j++){
    nove.push(j)
    console.log(nove[j])
}


