const BMI = document.getElementById("BMI");
const PPM = document.getElementById("PPM");



function oblicz(){
    let masa = document.getElementById("masa").value;
    let wzrost = document.getElementById("wzrost").value;
    let wiek = document.getElementById("wiek").value;
    let aktywnosc = document.getElementById("aktywnosc").value;
    let man = document.getElementById("man").checked;
    let woman = document.getElementById("woman").checked;
    let linia = document.getElementById("linia");
   let wynikBMI = parseInt(masa)/(parseFloat(wzrost**2));
    BMI.textContent= wynikBMI.toFixed(2);





let oIle = (wynikBMI - 16)*4 ;

linia.style.left=oIle+"%";

if(wynikBMI >= 40){
    linia.style.left="100%"
}
else if(wynikBMI <= 16){
    linia.style.left="0%"
}
else{
    let oIle = (wynikBMI - 16)*4 ;

    linia.style.left=oIle+"%";
}



/*
    if(wynikBMI <= 16){
        linia.style.left="0%";
    }

    else if(wynikBMI <= 18.5 && wynikBMI >= 16.1){
        linia.style.left="12%";
    }
    else if(wynikBMI > 18.6 && wynikBMI <= 24.9){
        linia.style.left="29%";
    }
    else if(wynikBMI > 25 && wynikBMI <= 29.9){
        linia.style.left="49%";
    }
    else if(wynikBMI > 30 && wynikBMI <= 34.9){
        linia.style.left="69%";
    }
     else if(wynikBMI > 35 && wynikBMI < 40 ){
        linia.style.left="89%";
    }
    else if(wynikBMI >= 40){
        linia.style.left="100%";
    }*/
    

    if(man == true){
        let wynikPPM = 66.5 + (13.75 * parseInt(masa) + (5.003 * parseFloat(wzrost*100)) - (6.775 * parseInt(wiek)));
        
        PPM.textContent = wynikPPM.toFixed(0);
        
    }
    else if(woman == true){
        let wynikPPM = 665.1 + (9.563 * parseInt(masa) + (1.85 * parseFloat(wzrost*100)) - (4.676 * parseInt(wiek)));
        PPM.textContent = wynikPPM.toFixed(0);
    }

   
   
}