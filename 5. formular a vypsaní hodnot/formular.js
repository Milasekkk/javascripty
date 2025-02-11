

document.querySelector("#test-form").addEventListener("submit", function(event){
    //vypneme výchozí chování formuláře, jinak se při odeslání, znova načte stránka a všechno se smmaže
    event.preventDefault()
    //přístup k obsahu inputu
    console.log(event.target.elements.firstName.value)

    //vytvoříme odstavec a přidáme do ně text z políčka
    let paragraph = document.createElement("p")
    paragraph.textContent = event.target.elements.firstName.value

    document.querySelector("#from-form").appendChild(paragraph)

    //vymazání odeslaného textu
    event.target.elements.firstName.value = ""

})