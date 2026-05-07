let wynikiM = 0;
let wynikiC = 0;

function losowanie(przycisk){
let wynik = document.getElementById("wynik");
let wyborMojSlowo = document.getElementById("wyborMoj");
let wyborMoj = przycisk;
let wyborKomp = document.getElementById("wyborKomp");
let kompWybor = " ";
let wylosowano = Math.floor(Math.random() * 3) + 1;
let win = document.getElementById("win");
let lose = document.getElementById("lose");
let audio = new Audio('sicname69-yippee-147032.mp3');
let loseAudio = new Audio('u_l5xum8z250-losing-horn-313723.mp3');
wyborMojSlowo.innerHTML = wyborMoj;
let body = document.getElementById("body");
let audioMeh = new Audio('mario-yeet-yapping-mario-323239.mp3');


if(wylosowano == 1){
    kompWybor = "papier";
    wyborKomp.innerHTML = kompWybor;
}
else if(wylosowano == 2){
    kompWybor = "kamien"
    wyborKomp.innerHTML = kompWybor;
}
else if(wylosowano == 3){
    kompWybor = "nozyce"
    wyborKomp.innerHTML = kompWybor;
}

if(kompWybor == wyborMoj){
    wynik.innerHTML ="Remis";
    body.style.backgroundColor="gray";
    audioMeh.play();

}
else if(wyborMoj == "kamien" && kompWybor == "nozyce" || wyborMoj == "papier" && kompWybor == "kamien" || wyborMoj == "nozyce" && kompWybor == "papier"){
    wynik.innerHTML = "Wygrałeś! YIPPPEEEEEEEE!!";
    wynikiC+=1;
    win.innerHTML=wynikiC; 
    audio.play()
    body.style.backgroundColor="lightgreen";
}
else{
    wynik.innerHTML = "Przegrałeś. BUUU LOSEEEER!";
    wynikiM+=1 ;
    lose.innerHTML=wynikiM;
    loseAudio.play();
    body.style.backgroundColor="red";
}



}
