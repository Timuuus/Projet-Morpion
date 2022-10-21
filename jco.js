let cases = document.querySelectorAll(".box");
let newGame = document.querySelector(".new-game");
let mainMenu = document.querySelector(".main-menu");
let annonce = document.querySelector(".annonce");
let coups = document.querySelector(".coups");
let result = [0,0,0,0,0,0,0,0,0];
let playerOne = 0;
let playerTwo = 1;
let playerTurn = playerOne;
let point1 = document.querySelector(".number1");
let point2 = document.querySelector(".number2");
let x = localStorage.getItem(point1);
let y = localStorage.getItem(point2);
let win = false;
let pointMax = localStorage.getItem("nbrround");
let coupsRestant = localStorage.getItem("cps-restant");



for (let i = 0; i < cases.length; i++){
cases[i].addEventListener("click",function(){

let random = Math.floor(Math.random()*9);

    if (playerTurn === 0 && cases[i].innerHTML === "" && win === false){
        cases[i].innerHTML = "X";
        playerTurn = playerTurn + 1;
        annonce.innerHTML = "Au tour de l'ordinateur"
        coups.innerText = "Il reste " + coupsRestant + " coups";
        result.splice(i,1,1);
        localStorage.setItem("cps-restant", 8);
        coupsRestant = coupsRestant - 1;
        if (coupsRestant >= 1){
            setTimeout(()=> {
            cases[i].click();    
            }, 700)
        };
    }
    else if (playerTurn === 1 && win === false){
        while (result[random] != 0){
            random = Math.floor(Math.random()*9);
        }
        result.splice(random,1,10);
        cases[random].innerHTML = "O";
        playerTurn = playerTurn - 1;
        annonce.innerHTML = "Au tour du joueur 1"
        coups.innerText = "Il reste " + coupsRestant + " coups"
        localStorage.setItem("cps-restant", 8);
        coupsRestant = coupsRestant - 1;
    }  


if (result[0] + result[3] + result[6] === 3){
    cases[0].style.color = "green"; cases[3].style.color = "green"; cases[6].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
}
else if (result[0] + result[3] + result[6] === 30){
    cases[0].style.color = "red"; cases[3].style.color = "red"; cases[6].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
}
else if (result[0] + result[1] + result[2] === 3){
    cases[0].style.color = "green"; cases[1].style.color = "green"; cases[2].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
} 
else if (result[0] + result[1] + result[2] === 30){
    cases[0].style.color = "red"; cases[1].style.color = "red"; cases[2].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
} 
else if (result[6] + result[7] + result[8] === 3){
    cases[6].style.color = "green"; cases[7].style.color = "green"; cases[8].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
} 
else if (result[6] + result[7] + result[8] === 30){
    cases[6].style.color = "red"; cases[7].style.color = "red"; cases[8].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
} 
else if (result[3] + result[4] + result[5] === 3){
    cases[3].style.color = "green"; cases[4].style.color = "green"; cases[5].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
} 
else if (result[3] + result[4] + result[5] === 30){
    cases[3].style.color = "red"; cases[4].style.color = "red"; cases[5].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
} 
else if (result[2] + result[5] + result[8] === 3){
    cases[2].style.color = "green"; cases[5].style.color = "green"; cases[8].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
} 
else if (result[2] + result[5] + result[8] === 30){
    cases[2].style.color = "red"; cases[5].style.color = "red"; cases[8].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
} 
else if (result[2] + result[4] + result[6] === 3){
    cases[2].style.color = "green"; cases[4].style.color = "green"; cases[6].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
} 
else if (result[2] + result[4] + result[6] === 30){
    cases[2].style.color = "red"; cases[4].style.color = "red"; cases[6].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
} 
else if (result[0] + result[4] + result[8] === 3){
    cases[0].style.color = "green"; cases[4].style.color = "green"; cases[8].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
} 
else if (result[0] + result[4] + result[8] === 30){
    cases[0].style.color = "red"; cases[4].style.color = "red"; cases[8].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
} 
else if (result[1] + result[4] + result[7] === 3){
    cases[1].style.color = "green"; cases[4].style.color = "green"; cases[7].style.color = "green";
    annonce.innerText = "Le joueur 1 à gagné la manche !!!";
    win = true;
    x = x + 1; point1.innerText = x;
} 
else if (result[1] + result[4] + result[7] === 30){
    cases[1].style.color = "red"; cases[4].style.color = "red"; cases[7].style.color = "red";
    annonce.innerText = "L'ordinateur à gagné la manche !!!";
    win = true;
    y = y + 1; point2.innerText = y;
} 

//--- MATCH NUL ---//
else if (result[0] + result[1] + result[2] + result[3] + result[4] + result[5] + result[6] + result[7] + result[8] === 45 && win === false){
    annonce.innerText = "MATCH NUL !!";
    cases[0].style.background = "red"; cases[1].style.background = "red"; cases[2].style.background = "red"; cases[3].style.background = "red"; cases[4].style.background = "red"; cases[5].style.background = "red"; cases[6].style.background = "red"; cases[7].style.background = "red"; cases[8].style.background = "red";
}

if (win === true){
    cases[0].disabled = true;
    cases[1].disabled = true;
    cases[2].disabled = true;
    cases[3].disabled = true;
    cases[4].disabled = true;
    cases[5].disabled = true;
    cases[6].disabled = true;
    cases[7].disabled = true;
    cases[8].disabled = true;
    coups.style.display = "none"
}

//--- NOMBRE DE ROUND ---//

if (pointMax === point1.innerText){
    annonce.innerText = "Félicitation, joueur 1 à gagné !";
    newGame.style.display = "none";
    mainMenu.style.display = "block";
}
else if (pointMax === point2.innerText){
    annonce.innerText = "Vous avez perdu contre l'ordinateur :(";
    newGame.style.display = "none";
    mainMenu.style.display = "block";
}

})     
}

//--- RETOUR MENU PRINCIPAL ---//
mainMenu.addEventListener("click", function(){
    window.location.replace("index.html");
})

for (let a = 0; a < cases.length; a++) {
    

//--- BOUTON NOUVELLE MANCHE ---//
newGame.addEventListener("click", function(){
    cases[a].innerHTML = "";
    result = [0,0,0,0,0,0,0,0,0];
    cases[a].style.color = "white";
    cases[a].style.background = "none";
    playerTurn = playerOne;
    annonce.innerText = "Au tour du joueur 1";
    win = false;
    cases[0].disabled = false;
    cases[1].disabled = false;
    cases[2].disabled = false;
    cases[3].disabled = false;
    cases[4].disabled = false;
    cases[5].disabled = false;
    cases[6].disabled = false;
    cases[7].disabled = false;
    cases[8].disabled = false;
    coupsRestant = 8;
    coups.style.display = "block";
    coups.innerText = "Il reste 9 coups";
})}