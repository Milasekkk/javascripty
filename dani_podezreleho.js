/*
Pomoc prompt() zadáte křestní jméno podezželého a do konzole se vypíší všechny
jeho údaje. Každý údaj přehledně na jeden řádek.
Jměno: Jana
Příjmení: Růžová
atd...

Budete tedy muset najít podle jména daná objekt
a ten vypíete. K nalezení prvku použijete findIndex

z učebnice si můžete zkopírovat níže uvedené pole obketů nebo
si ho opište.
*/

let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    address: "U Sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    address: "Malská 29",
    city: "Ceské Budějovice"
},{
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    address: "Stevardská 38",
    city: "Ceské  Budějovice"
}]

//vytvoříme prommpt, do kterého napíšeme hledané jméno
let hledany = prompt("Zadejte křestní jméno hledaného")
//zjistíme index objektu v poli pokud se tam hledany nachazi
let hled = criminals.findIndex(function(podezrely){
        return podezrely.firstName === hledany
})

// vypíšeme křestní jméno z objektu, kde se nachází to křestí jméno
console.log(`křestní jméno: ${criminals[hled].firstName}`)
console.log(`příjmení :${criminals[hled].secondName}`)
console.log(`datum narození: ${criminals[hled].birth}`)
console.log(`adresa: ${criminals[hled].address}`)
console.log(`město: ${criminals[hled].city}`)




