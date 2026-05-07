function zmiana(sekcja){
    let body = document.getElementById("body");
    let naglowek = document.getElementById("naglowek")
    let text = document.getElementById("text");
    let img_left = document.getElementById("kotl");
    let img_right = document.getElementById("kotr");
    
    


    switch(sekcja){
    case 1:
        naglowek.style.fontSize="xx-large";
        text.style.fontSize="xx-large";
        img_left.style.width="440px";
        img_left.style.height="400px";
         img_right.style.width="440px";
        img_right.style.height="400px";

        break;
        case 2:
        body.style.backgroundColor="black";
        body.style.color="white";

        break;
        case 3:
       body.style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

        break;
        case 4:
       img_left.style.borderRadius="50%";
       img_right.style.borderRadius="50%";
        break;
        case 5:
        body.style.backgroundColor="white";
        body.style.color="black";
        naglowek.style.fontSize="medium";
        text.style.fontSize="medium";
        img_left.style.width="340px";
        img_left.style.height="300px";
         img_right.style.width="340px";
        img_right.style.height="300px";
        img_left.style.borderRadius="0";
       img_right.style.borderRadius="0";
       body.style.fontFamily="Times New Roman";


        break;
    
    
}
}