


document.querySelector("#formular").addEventListener("submit", function(event){

    //vypnutí výchozí chování formuláře
    event.preventDefault()

    //načtení dat z formuláře
    let firstName = event.target.elements.firstName.value
    let secondName = event.target.elements.secondName.value
    let thirdName = event.target.elements.thirdName.value

    //vytvoříme odstavec a přidáme do něho text
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `Jméno: ${firstName},<br> Příjmení: ${secondName},<br> Email: ${thirdName}`

    //přiřadit do divu
    document.querySelector("#from-form").appendChild(paragraph)

    //smažeme odeslaný text
    event.target.elements.firstName.value = ""
    event.target.elements.secondName.value = ""
    event.target.elements.thirdName.value = ""
})