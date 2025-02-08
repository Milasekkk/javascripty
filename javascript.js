/*
Nad věřích do kanceláře je tlařtkový display. Aby se
dveře otevřeli, tak musíte zadat správný třímístný 
kód. Tento kód jste i navolili, když jste do práce nastupovali.
Uložte vámi zadaný kód do tří proměnných. Poté vytvořtě funkci, 
která bude přijímat tři parametry. Pokud se budou shodovat se zvoleným
kódem, tak se do concole vypíše "Můžete vstoupit", pokud ne, vypíše se
"Špatně zadaný kéod. Zkuste to znovu prosím"
*/

let kod = function(a, b, c){
    let d = 1
    let e = 2
    let f = 3
    if (d === a){
        if(e === b){
            if(f === c){
                console.log("Můžete vstoupit")
            }
        }
    }else{
        console.log("Špatně zadadný kód. Zkuste to prosím znovu")
    }
}

kod(2, 3, 6)
kod(1, 2, 3)
kod(2, 3, 4)
kod(1, 2, 3)