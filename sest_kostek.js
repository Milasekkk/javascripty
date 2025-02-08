let min = 1
let max = 6

let num1 = Math.floor(Math.random() * (max - min + 1)) + min
let num2 = Math.floor(Math.random() * (max - min + 1)) + min
let num3 = Math.floor(Math.random() * (max - min + 1)) + min
let num4 = Math.floor(Math.random() * (max - min + 1)) + min
let num5 = Math.floor(Math.random() * (max - min + 1)) + min
let num6 = Math.floor(Math.random() * (max - min + 1)) + min

let sum = num1 + num2 + num3 + num4 + num5 + num6
if(sum > 25){
    console.log(`Součet je: ${sum}. Vyhrál jsi`)
}else {
    console.log(`Součet je: ${sum}. Prohrál jsi`)
}

console.log("%c tento text v konzoli bude modrý", "color: blue")
console.log("%c tento text v konzoli bude červený", "color: red")