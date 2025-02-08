/*
Vytvořte proměnnou vladniNarizeni. Přiřaďte do ní
hodnotu true nebo false. tru znamená, že vládní nařízení platí.
False, že vládní nařízení neplatí

Vytvořte objekt school s type, street, city, capacity a dvěma
metodami open a closed. open bude vypisovat 
"Škola gymázium Tábor je otevřená"
Closed bude vypisovat "Škola gymnázium Tábor je zavřená"

Vytvořte podmínku, že pokud jsou nařízení true, tak se zavolá
funkce closed. a pokud False, zavolá se funkce open
*/

let vladniNarizeni = true

let school = {
    type: "Gymnázium",
    street: "Žižkova 313",
    city: "Husinec",
    capacity: 500,
    open: function(){
        console.log(`Škola ${this.type} ${this.city} je otevřená`)
    },
    closed: function(){
        console.log(`Škola ${this.type} ${this.city} je zavřená`)
    }
}

if(vladniNarizeni === true){
    school.closed()
} else{
    school.open()
}




