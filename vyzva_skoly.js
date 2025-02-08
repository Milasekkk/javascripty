/*
Vytvořte objket s názvem school. ta bude mít vlastnosti:
type: gymnazium, ochodni akademie atd...
street: ulice
city: mesto
capacity: nejake cislo
-vypište type a city do konzole
-bude mít 2 metody s názvem open a closed.
open bude vypisovat "Skola je otevřená
closed bude vypisovat "Škola je zavřená" a to uložíze do libovolné
proměnné a vypíšete do konzole
*/

let school = {
    type: "gymnázium",
    street: "Žižkova 313",
    city: "Husinec",
    capacity: 500,
    open: function(){
        return "Škola je otevřená"
    },
    closed: function(){
        return "Škola je zavřená"
    }
}

let otevreno = school.open()
let zavreno = school.closed()
console.log(school.type)
console.log(school.city)
console.log(otevreno)
console.log(zavreno)

