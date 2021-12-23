// Seçim İşlemleri
const oyuncu_skor = document.getElementsByClassName("oyuncu_skor")[0];
const bilgisayar_skor = document.getElementsByClassName("bilgisayar_skor")[0];
const tas = document.getElementById("tas");
const kagit = document.getElementById("kagit");
const makas = document.getElementById("makas");
const oyuncu_secimi = document.getElementById("oyuncu_secimi");
const bilgisayar_secimi =document.getElementById("bilgisayar_secimi");
const mesaj = document.getElementsByClassName("mesaj")[0];
// Seçim İşlemleri

let oyuncu = 0;
let bilgisayar = 0; 

function bilgisayarSecim(){
    const secim = ["tas", "kagit","makas"];
    const rasgelesayi= Math.floor(Math.random()*3);
    bilgisayar_secimi.setAttribute("src", `pic/${secim[rasgelesayi]}.png`);
    return secim[rasgelesayi];
}
//bilgisayarSecim();

function eventListeners(){
    tas.addEventListener("click", function(){
        oyuncu_secimi.setAttribute("src", `pic/tas.png`);
        let bilg_secim = bilgisayarSecim();
        sonuc("tas", bilg_secim);
    });
    kagit.addEventListener("click", function(){
        oyuncu_secimi.setAttribute("src", `pic/kagit.png`);
        let bilg_secim = bilgisayarSecim();
        sonuc("kagit", bilg_secim);
    });
    makas.addEventListener("click", function(){
        oyuncu_secimi.setAttribute("src", `pic/makas.png`);
        let bilg_secim = bilgisayarSecim();
        sonuc("makas", bilg_secim);
    });
}
eventListeners();

// SONUC
function sonuc(oyuncu, bilgisayar){
    switch (oyuncu+bilgisayar) {

        case "tasmakas":kazan(); 
        break;
        case "kagittas":kazan();
        break;
        case "makaskagit":kazan();
        break;

        case "taskagit":kaybet();
        break;
        case "kagitmakas":kaybet();
        break;
        case "makastas":kaybet();
        break;


        case "tastas": berabere();
        break;
        case "kagitkagit": berabere();
        break;
        case "makasmakas": berabere();
        break;
    
        default: "HATA";
        break;
    }
}
sonuc();

function kazan(){
    oyuncu = oyuncu+1;
    mesaj.innerHTML = "Tebrikler Kazandın.";
    oyuncu_skor.innerHTML=oyuncu.toString();
}

function kaybet(){
    bilgisayar = bilgisayar+1;
    mesaj.innerHTML = "Bilgisayar Kazandı.";
    bilgisayar_skor.innerHTML=bilgisayar.toString();
}

function berabere(){
    mesaj.innerHTML = "Berabere.";
}