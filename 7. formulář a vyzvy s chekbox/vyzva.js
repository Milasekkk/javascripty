
//společná výzva formuláč a checkbox
let myForm = document.querySelector("#my-form")
let count = 0
//console.log(myForm)

myForm.addEventListener("submit", function(event){
    //vypnutí výchozího nastavení formuláře
    event.preventDefault()

    //přístup k obsahu
    console.log(event.target.elements.task.value)

    //count zvyčujeme o jedna
    count += 1

    let input = document.createElement("input")
    //console.log(input)

    //přiřazení inputu type = ""checkbox
    input.type = "checkbox"
    //console.log(input)

    //vytvoření id inputu se zvyšovacím count přes superstring
    input.id = `testovaci-${count}`
    console.log(input)

    //přiřadit input do divu s id = ""results
    document.querySelector("#results").appendChild(input)

    //vytvoření label
    let label = document.createElement("label")

    //dosazení toho našeho textu v políčku do label
    label.textContent = event.target.elements.task.value

    //přiřazení názvy label do for="" - to nefunguje, použijeme setAttribute("for", `testovaci-${count}`)
    label.setAttribute("for", `testovaci-${count}`)

    //zobrazit na stránce
    document.querySelector("#results").appendChild(label)

    //smazat text po odeslání
    event.target.elements.task.value = ""

    console.log(label)

})
