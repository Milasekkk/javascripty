/*
Vytvořte pole s názvem toDo a uložte do něj čtyři úkoly, které 
máte provést
-vyvenčit psa
-koupit kečup
-udělat is svačinu

Poté položky pole toDo vypíšete do toho tvaru:
1. Vyvenčit psa
2.koupit kečup
3.vymalovat pokoj
4. udělat si svačinu
*/

let toDo = ["Vyvenčit psa", "Koupit kečup", "Vymalovat pokoj", "Udělat si svačinu"]
toDo.forEach(function(job, index){
    console.log(`${index+1}. ${job}`)
})

