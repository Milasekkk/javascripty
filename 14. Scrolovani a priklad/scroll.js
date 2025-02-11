
//načtení scrollování v okně
window.addEventListener("scroll", function(){
    //proměnná obshauje konec scrolování
    let scrolled = window.scrollY
    //celková delka dokumentu až dolu, a odečteme od toho to, co nemusíme scrolovat a dostaneme vyšku, kterou můžeme scrolovat
    let scrollable = document.documentElement.scrollHeight - window.innerHeight

    if(Math.ceil(scrolled) > 300){
        let toTop = document.querySelector(".top-page")
        toTop.style.display = "block"

        toTop.addEventListener("click", function(){
            toTop.style.display = "none"
        })
    }

})