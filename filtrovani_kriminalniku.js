/*
Svědek viděl z místa vraždy odjíždět auto. Ví jen to, že poznávací značka obsahovala 22.
Vaším úkolem je v níže uvedené databázi kriminálníků najít ty, kteří mají v poznávací značce
22. Jejich veškeré údaje následně vypište do konzole. Např. takto:
Jméno: Martin
Příjmení: Zelený
Rok narození: 1985
atd.
To, co hledáte (v našem případě 22), bude zadáno pomocí promptu. Použijete tedy:
prompt(). Do něj zadáte 22.
*/

let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
    }, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
    }, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
    }]

//vytvořní promptu n zadání hledaného řetězce SPZ
let zadani = prompt("Zadejte část poznávací znač/ky")

//hledání přes filter kus řetězce v spztkách
let array = criminals.filter(function(oneNum){
    //hledáme v spztkách, převedeme na malé znaky. heldáme prvky, které obsahují co to uživatel zadal
    let najit = oneNum.licencePlate.toLowerCase().includes(zadani)
    return najit
})

//forEach funkce na projetí každého prvku v poli objektu a vypsání jednotlivých informací o všech osobách
array.forEach(function(oneNum){
    console.log(`Jméno: ${oneNum.firstName}`)
    console.log(`Příjmení: ${oneNum.secondName}`)
    console.log(`Narození: ${oneNum.birth}`)
    console.log(`SPZ: ${oneNum.licencePlate}`)
    console.log(`Adresa: ${oneNum.address}`)
    console.log(`Město: ${oneNum.city}`)
    console.log("__________________________")
})