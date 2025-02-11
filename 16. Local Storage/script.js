/*
//přidání položky
localStorage.setItem("location", "České Budějovice")
localStorage.setItem("firstName", "David")

//update položky
localStorage.setItem("location", "Praha")

localStorage.setItem("firstName", "Harry")


//získání položky


console.log(localStorage.getItem("location"))
console.log(localStorage.getItem("firstName"))

//smazání položky
// localStorage.removeItem("location")
// // localStorage.removeItem("firstName")


//smazání celého localStorage
localStorage.clear()
*/

//použití json
let user = {
    firstName: "Jarda",
    age: 27
}



let userJSON = JSON.stringify(user)
localStorage.setItem("user", userJSON)

let userFromLS = localStorage.getItem("user")
let myUser = JSON.parse(userFromLS)

console.log(`Ahoj, já jsem ${myUser.firstName} a je mi ${myUser.age}`)
