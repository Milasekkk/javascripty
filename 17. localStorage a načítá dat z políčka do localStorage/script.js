
//pokud je localStorage null(prázdné), tak vytvoř pole ale nebude let ale var,aby nám to fungovalo i mimo scope a pokud neni prázdné tak do myArray přiřad users
if(localStorage.getItem("users") === null){
    //vytvoření nového prádného pole
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("users"))
}



//do prměné uložíme ten formulář
let myForm = document.querySelector("#test-form")


//naslouchací událost na formuláři s uložením přes JSON do local storage
myForm.addEventListener("submit", function(event){
    //vypnutí výchozího nastavení formuláře
    event.preventDefault()
    //do prázdného pole mi přiřaď hodnotu inputu
    myArray.push(event.target.elements.firstName.value)
    
    //do proměné ulož pole a dej přes vrátnici
    myArrayToLS = JSON.stringify(myArray)

    //do localStorage ulož pole, prošlé přes vrátnici
    localStorage.setItem("users", myArrayToLS)

    event.target.elements.firstName.value = ""

    //načtení hodnot z local storage
    let myArrayFromLS = localStorage.getItem("users")

    //protáhnout přes vrátnici JSON
    let myArrayFromLJS = JSON.parse(myArrayFromLS)

    //vytvoření odstavce
    let paragraph = document.createElement("p")

    //vem mi poslední přidaný prvek v poli
    paragraph.textContent = myArrayFromLJS[myArrayFromLJS.length-1]

    //vyber div v html přes id a appednchildni ten paragraph
    document.querySelector("#my-users").appendChild(paragraph)


})


//chceme vypsat users z localStorage a ulož do proměnné
let myPresentArray = localStorage.getItem("users")

//vem to přes vrátnici a ulož do proměnné
let myPresentArrayJ = JSON.parse(myPresentArray)

if(myPresentArrayJ !== null){
    //procházmí pole, takže přes forEach cyklus
    myPresentArrayJ.forEach(function(oneUser){
    //vytvoříme nový paragraph
    let paragraph = document.createElement("p")
    //do oneUser uložíme každého, kdo proje cyklem
    paragraph.textContent = oneUser
    document.querySelector("#my-users").appendChild
    (paragraph)
})

}











