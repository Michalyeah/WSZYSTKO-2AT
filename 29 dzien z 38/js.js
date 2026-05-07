
function zegar(){
   // let zegar = document.getElementById("zegar")
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

   
let secp =  sec * 6;
let minp =  min * 6;
let hourp =  hour * 30;

document.getElementById("sec").style.transform = `translateX(-50%) rotate(${secp}deg)`;
document.getElementById("min").style.transform = `translateX(-50%) rotate(${minp}deg)`;
document.getElementById("godz").style.transform =`translateX(-50%) rotate(${hourp}deg)`;


setTimeout("zegar()",1000)
}
zegar();






