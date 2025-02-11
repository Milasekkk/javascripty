// databáze kriminálníků

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
    firstName: "Anna",
    secondName: "Modrá",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]



let filters = {
    searchText: ""
}

//filtr - vytvoření nové proměnné, která obsahuje funkci, do které budeme posílat pole kriminálníků a filter, které se dosadí ta tryToFind
//musíme vytvořit pole, do kterého uložíme vysledky
//chceme vrátit hodnotu funkce zda licence.Plate 
// převedeno na málé znaky includes(obsahuje) to co máme 
// uloženo v searchText(a ten taky musíme převést na malé 
// znaky) aby se porovnávaly malé znaky
//v rámci funkce vložíme do div s id idCriminal

const renderCriminals = function(ourCriminals, tryToFind){  
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })
    //console.log(arrayResult)

    //vymazání divu, aby se nezobrazovaly předchozí výsledky
    document.querySelector("#idCriminal").innerHTML = ""

    document.querySelector("#idCriminal")
    arrayResult.forEach(function(oneSuspect){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Jméno: ${oneSuspect.firstName}<br> Příjmení: ${oneSuspect.secondName}<br>Narozeni: ${oneSuspect.birth}<br>Poznávací značka: ${oneSuspect.licencePlate}<br>Adresa: ${oneSuspect.address}<br>Město: ${oneSuspect.city}`
        
        document.querySelector("#idCriminal").appendChild(paragraph)
    })
}

// vytvoření proměnné, kde vložíme data z inputu přes id
//kontrolní výpis, zda to funguje
//console.log(licencePlate)
//kontrolní výpis
//console.log(event.target.value)
//musíme uložit data do nové proměnné, jelikož evet.target.
//value funguje pouze uvnitř závorek, ale chceme to dostat ven
//uložíme do výše vytvořené proměnné a do objektu searText
//kontrola funčnosti
// console.log(filters)
// zavoláme tu funkci,

let licencePlate = document.querySelector("#licencePlate")
licencePlate.addEventListener("input", function(event){
    filters.searchText = event.target.value
    renderCriminals(criminals, filters)
})


