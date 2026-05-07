const ceny = {
  panel: {
    "3mm": 70,
    "4mm": 90,
    "5mm": 110
  },
  kolor: {
    "zielony plot.png": 100,
    "plot.png": 110,
    "grafit.png": 120,
    "ocynk.png": 0
  },
  podmur: {
    "brak": 0,
    "betonowa": 60 // za metr
  },
  slupek: 50,
  naroznik: 70,
  furtka: 800,
  brama: {
    "brama-skrzydlowa.png": 2500,
    "brama-przesuwna.png": 4000,
    "brama-przesuwna-aut.png": 6500,
    "brama-skrzydlowa-aut.png": 5500
  }
};


let kolor = document.getElementById("color");
let imgPlot = document.getElementById("imgPlot");
let imgBram = document.getElementById("imgBrama");
let rodzaj = document.getElementById("rodzaj");

rodzaj.addEventListener('change',function(){
  const srcb = this.value;
  imgBram.src = srcb;
})
kolor.addEventListener('change',function(){

  const srca = this.value;
  imgPlot.src = srca;


});


function Oblicz(){
  const dlugosc = Number(document.getElementById("metr").value);
  const narozniki = Number(document.getElementById("naroz").value);
  const panel = document.getElementById("panel").value;
  const kolor = document.getElementById("color").value;
  const podmur = document.getElementById("podm").value;
  const furtka = Number(document.getElementById("furtka").value) || 0;
  const brama = document.getElementById("bram").value;
  const ileBram = document.getElementById("bram-il").value;
  const rodzajBram = document.getElementById("rodzaj").value;

  cenaPanelu = ceny.panel[panel] + ceny.kolor[kolor] + (2 *ceny.podmur[podmur] );
  cenaBramy = ceny.brama[rodzajBram] * ileBram;
  cenaFurtki = ceny.furtka * furtka;
  cenaPlotu = (ceny.podmur[podmur] * 2) * dlugosc;
  cenaNaroznik = ceny.naroznik * narozniki;
  if(dlugosc % 2 == 0){
    panelIlosc = dlugosc / 2;
  }
  else{
    panelIlosc = (dlugosc + 1) /2;
  }
  iloscSlupkow = panelIlosc  - narozniki;
  
  cenaSlupkow = ceny.slupek * (iloscSlupkow);
  
  


   const produkty = [];

   produkty.push({
      nazwa: "Panel ogrodowy",
      ilosc: dlugosc ,
      cena: cenaPanelu
   });
   produkty.push({
      nazwa: "Słupek ogrodowy",
      ilosc: iloscSlupkow ,
      cena: cenaSlupkow
   });
   produkty.push({
      nazwa: "Narożnik ogrodowy",
      ilosc: narozniki ,
      cena: cenaNaroznik
   });
   produkty.push({
      nazwa: "Furtka ogrodowa",
      ilosc: furtka ,
      cena: cenaFurtki
   });
   produkty.push({
      nazwa: "Brama ogrodowa",
      ilosc: ileBram ,
      cena: cenaBramy
   });
  if(podmur == "betonowa"){
    produkty.push({
      nazwa: "Podmurówka",
      ilosc: dlugosc ,
      cena: cenaPlotu
   });
  }
  else{
    cenaPodm = 0;
  }

  tbody.innerHTML="";
  tfoot.innerHTML="";
   tabela(produkty);

    let table = document.getElementById("table");
    table.style.display="flex";
    let bak = document.getElementById("back");
    bak.style.display="flex";
    let mid = document.getElementById("mid");
    mid.style.opacity="0";
};

function tabela(produkty){
  let tabel = document.getElementById("tbody");
  
  tbody.innerHTML+=`
  <tr>
  <td>Lp</td>
  <td>Nazwa</td>
  <td>Ilość</td>
  <td>Netto</td>
  <td>Brutto</td>
  </tr>`;
 
  
  
  produkty.forEach((p,i)=>{
    const netto = p.cena;
    const brutto = netto * 1.23;
    
    tbody.innerHTML +=`
    <tr>
        <td>${i +1}</td>
        <td>${p.nazwa}</td> 
        <td>${p.ilosc}</td> 
        <td>${netto.toFixed(2)}</td> 
        <td>${brutto.toFixed(2)}</td>     
    </tr>
    
    
    `
    
  
  
  
  });
  let sumaNet = 0;
  let sumaBrut = 0;
  sumaNet += netto;
  sumaBrut += brutto;
  
  tfoot.innerHTML +=`
    <tr>
    <td>Wycena</td>
    <td>${sumaNet} zł</td>
    <td>${sumaBrut} zł</td>
    </tr>`;
};

function back(){

  let table = document.getElementById("table");
    table.style.display="none";
    let bak = document.getElementById("back");
    bak.style.display="none";
    let mid = document.getElementById("mid");
    mid.style.opacity="1";
}


  




