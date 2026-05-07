


function DodajZad(){
let temat = document.getElementById("temat-zad").value;
let tresc = document.getElementById("tresc-zad").value;
let data = document.getElementById("data-zad").value;
let middle = document.getElementById("sec-mid");

let datanow = newDate();

let zad1 = document.createElement("h2");
zad1.classList.add("teamt");
let zad2 = document.createElement("p");
let zad3 = document.createElement("span");
let lista1 = document.createElement("ul");
lista1.classList.add("ulmid");
let karteczka = document.createElement("li");
karteczka.classList.add("kart");



if( temat && tresc && data != ""){
zad1.textContent = temat;
zad2.textContent = tresc;
zad3.textContent = data;
karteczka.appendChild(zad1);
karteczka.appendChild(zad2);
karteczka.appendChild(zad3);
lista1.appendChild(karteczka);
middle.appendChild(lista1);
}
else{
   
}
if(datanow == zad3){
karteczka.style.backgroundColor="red";
}

}
function zadanieZrobione(){
    
document.addEventListener('dblclick', function(e) {
    
    if(e.target.tagName === "LI"){
        let kontent = e.target.textContent;
        let down = document.getElementById("sec-down");
        let lista2 = document.createElement("ul");
        down.appendChild(lista2);
        
        let li2 = document.createElement("li");
        li2.classList.add("li2");
        lista2.appendChild(li2);
        li2.textContent = kontent;
        
        e.target.remove();
    
        
    }


})

}

zadanieZrobione();

