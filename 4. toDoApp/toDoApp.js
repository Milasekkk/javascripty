//ToDO list apka
//vytvoření pole objektů

let myTodos = [{
    text: "Vynést koš",
    completion: false
},{
    text: "Dojít nakoupit",
    completion: false
},{
    text: "Uklidit",
    completion: false
},{
    text: "Nakrmit psa",
    completion: true
},{
    text: "Nakrmit kočku",
    completion: true
}]

//potřebujeme aby to v html vypsalo pošet zbývajících úkolů hned pod h1
// to === true nemusíme psát, protože filter vrací 
//  automaticky pouze hodnoty s true ale my chceme úkoly, které 
//  ještě nebyl splněny takže napíšeme false
// //nebo můžeme zaspat jako !oneToDo.completion
//chceme vypsat že zbývají splnit 3 úkoly
// vytvoříme nový paragraf
//do paragrafu přiřadíme výpis s výsledkem přes superstring
//paragraf přiřadíme do header jako appendChild


// let toDoLeft = myTodos.filter(function(oneToDo){
    // return oneToDo.completion === false
// })
// console.log()
// const paragraph = document.createElement("p")
// // paragraph.textContent = `Zbývají splnit ${toDoLeft.length} úkoly`
// document.querySelector("main").appendChild(paragraph)

//vypsání všech úkolů pomocí for cyklu
for(let i = 0;i < myTodos.length; i++){
    let pparagraph = document.createElement("p")
    pparagraph.textContent = myTodos[i].text
    document.querySelector("#results-todos").appendChild(pparagraph)
}

//vypsání jenom těch úkolů co zbývají
// stačí přidat podmínku if(myToDos[i].completion === false) tak teprve pak přidej do výpisu seznamu úkolů


//zachycení kliknutí na element a
document.querySelector(".myBtn").addEventListener("click", function(even){
    console.log("Kliknuti bylo provedeno")
})


/*
filtrování
*/

//pro ukládání textu z vyhledávacího políčka
const filters = {
    searchingText : ""
}

//obecná filtrovací funkce
let renderToDos = function(ourToDos, weSearching){
    let ourResults = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
    })

//kolik úkolů zbývá udělat
    document.querySelector("#toDosLeft").innerHTML = ""

    let leftTodos = ourResults.filter(function(oneToDo){
        return oneToDo.completion === false
    })

    console.log(leftTodos)

    let paragraph = document.createElement("p")
    paragraph.textContent = `Ještě zbývá udělat úkolů: ${leftTodos.length}`
    document.querySelector("#toDosLeft").appendChild(paragraph)

    //vypisování úkolů do stránky
    document.querySelector("#results-todos").innerHTML = ""
    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
        document.querySelector("#results-todos").appendChild(paragraph)
    })
}

//načítáme text z input
let searchText = document.querySelector("#search-text")
// console.log(searchText) - kontrolní
searchText.addEventListener("input", function(event){
    //hodnota z toho políčka se nám uložé do searchingtext
    filters.searchingText = event.target.value
    
    //voláme fultrovací funkci
    renderToDos(myTodos, filters)
})



