let play = document.querySelector(".play");
let playerChoise = document.querySelector("#who-play");
let bo1 = document.querySelector("#how-many-round");
let bo3 = document.querySelector("#how-many-round3");
let bo5 = document.querySelector("#how-many-round5");

console.log(bo1.checked);

console.log(playerChoise.checked);



//--- RENVOYER VERS LE BON MORPION --//

play.addEventListener("click", function(){
    if (playerChoise.checked === true){
        window.location.replace("jcj.html");
    }
    else if (playerChoise.checked === false){
        window.location.replace("jco.html");
    }

//--- CHOISIR LE NOMBRE DE ROUND GAGNANT ---//    
    if (bo1.checked === true){
        localStorage.setItem("nbrround", 1);
    }
    else if (bo3.checked === true){
        localStorage.setItem("nbrround", 2);
    }
    else if (bo5.checked === true){
        localStorage.setItem("nbrround", 3);
    }
})


