function Wyswietl(){

   
    
    let link = document.getElementById("link").files[0];
    
    
    let poleWyswietl = document.getElementById("left");
    
    
    let zdjecie = document.createElement("img");
    zdjecie.setAttribute("id","img");
    zdjecie.src=link.name;
    poleWyswietl.appendChild(zdjecie);

    let filtry = document.getElementById("right");
    filtry.style.display="flex";
    
}


function usun(){
    let usune = document.querySelector("img");
    console.log(usune);
    usune.remove();
}
function wywolaj(){
    usun();
    Wyswietl();
}



function Okrag(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus").value;
    zdjecie.style.borderRadius=radius+"%";
}



function Okra1(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus1").value;
    zdjecie.style.filter = "opacity("+ radius + "%)";
}



function Okra2(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus2").value;
    zdjecie.style.filter = "sepia("+ radius + "%)";
}
function Okra3(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus3").value;
   zdjecie.style.filter = "blur("+ radius + "px)";
}
function Okra4(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus4").value;
    zdjecie.style.filter = "contrast("+ radius + "%)";
}
function Okra5(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus5").value;
    zdjecie.style.filter = "brightness("+ radius + "%)";
}
function Okra6(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus6").value;
    zdjecie.style.filter = "invert("+ radius + "%)";
}
function Okra7(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus7").value;
    zdjecie.style.filter = "saturate("+ radius + "%)";
    
}
function Okra8(){
    let zdjecie =  document.getElementById("img");
    let radius = document.getElementById("raidus8").value;
    zdjecie.style.filter = "hue-rotate("+ radius + "deg)";
}


function apsectratio(x){
     let zdjecie =  document.getElementById("img");
     zdjecie.style.aspectRatio=x;
}












































/*function Szyfruj(){

let textDoZmiany = document.getElementById("szyfr").value;
let oIle = document.getElementById("ilosc").value;

let textdozmiany = textDoZmiany.toLowerCase().split(" ");
let alfabet = "abcdefghijklmnopqrstuwxyz";



console.log(textdozmiany)
for(oIle % alfabet.length == 0){

textdozmiany.forEach(i => {
    i
        
    });
}

}*/





