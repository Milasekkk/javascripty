
//uložíme si prví tlačítko do proměnné
let firstItemMenu = document.querySelector(".first-item-menu")

// do proměnné si uložíme h2 kam chceme scrolovat a offsetTop nám řekne pozici našeho h2
let scrollGoal = document.querySelector(".scroll-goal").offsetTop
console.log(scrollGoal)

firstItemMenu.addEventListener("click", function(){
    window.scrollTo({
        top: scrollGoal,
        behavior: "smooth"
    })
})




