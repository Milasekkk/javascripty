/*
Definujte 3 objkety, které budou představovat
konkrétní 3 lidi s názvy person1, person 2 a person3
Každá objekt (člověk) ude mít jméno, věk a město, ve
kterém žije. Údaje jsou zcela na vás, ale person1
budete vy.
Do konsole vypičtě 3 věty
*/

let person1 = {
    jmeno: "Jaroslav Vrána",
    vek: 33,
    mesto: "Husinec",
    gender: "male"
}

let person2 = {
    jmeno: "Michaela Vránová",
    vek: 33,
    mesto: "Husinec",
    gender: "female"
}

let person3 = {
    jmeno: "Viktorie Vránová",
    vek: 2,
    mesto: "Husinec",
    gender: "female",
    greet: function(){
        console.log("Ahoj")}
}

person3.greet()

console.log(`Jmenuji se ${person1.jmeno}, je mi ${person1.vek} a bydlím v ${person1.mesto}`)
console.log(`Jmenuji se ${person2.jmeno}, je mi ${person2.vek} a bydlím v ${person2.mesto}`)
console.log(`Jmenuji se ${person3.jmeno}, je mi ${person3.vek} a bydlím v ${person3.mesto}`)

//vypsání objektu pomocí funkce

let resultPerson = function(person){
    if(person.gender === "male"){
        console.log(`Jmenuje se ${person.jmeno}, je mu ${person.vek} a bydlí v ${person.mesto}`)
    } else{
        console.log(`Jmenuji se ${person.jmeno}, je jí ${person.vek} a bydlí v ${person.mesto}`)
    }
    
}

resultPerson(person1)
resultPerson(person2)
resultPerson(person3)