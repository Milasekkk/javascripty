let password = ["Míša", "Jarda", 1234, "Vikinka"]
let min = 0
let max = password.length-1
let nahoda = Math.floor(Math.random()*(max-min+1)+min)
    console.log(`Náhodné heslo je ${password[nahoda]}`)