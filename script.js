"use strict"

let imgs = document.querySelectorAll(".cantante");

let difficulty = 1;

let tempo_singola_img;
let tempo_risposta;
let qty;
let tempo_tot;

let in_difficulty = document.getElementById("range-difficulty");
let btn_gioca = document.getElementById("div-btn");
let div_fotos = document.querySelector(".fotos");

function hideAllImgs() {
    imgs.forEach(img => {
        img.setAttribute("style", "visibility: hidden; opacity: 0;");
    });
}
function showAllImgs() {
    imgs.forEach(img => {
        img.removeAttribute("style");
    })
}
function showRndImg(tempo) {
    let num = Math.floor(Math.random() * 9);

    imgs[num].removeAttribute("style");
    setTimeout(() => {
        imgs[num].setAttribute("style", "visibility: hidden; opacity: 0;");
    }, tempo)
}

let playing = false;

btn_gioca.addEventListener("click", () => {
    if (!playing) {
        playing = true;
        switch (in_difficulty.value) {
            case '1':
                tempo_singola_img = 900 + 400;
                tempo_risposta = 5000;
                qty = 14;
                tempo_tot = tempo_singola_img * qty + tempo_risposta + 3000;
                break;
            case '2':
                tempo_singola_img = 700 + 400;
                tempo_risposta = 4000;
                qty = 15;
                tempo_tot = tempo_singola_img * qty + tempo_risposta + 3000;
                break;
            case '3':
                tempo_singola_img = 500 + 400;
                tempo_risposta = 3500;
                qty = 16;
                tempo_tot = tempo_singola_img * qty + tempo_risposta + 3000;
                break;
            case '4':
                tempo_singola_img = 400 + 400;
                tempo_risposta = 3000;
                qty = 17;
                tempo_tot = tempo_singola_img * qty + tempo_risposta + 3000;
                break;
            case '5':
                tempo_singola_img = 300 + 400;
                tempo_risposta = 2500;
                qty = 19;
                tempo_tot = tempo_singola_img * qty + tempo_risposta + 3000;
                break;
        }

        hideAllImgs();

        setTimeout(() => {
            let i=1;
            let round = setInterval(() => {
                i++;
                if (i <= qty) {
                    showRndImg(tempo_singola_img);
                } else {
                    clearInterval(round);
                    setTimeout(() => {
                        showRndImg(tempo_risposta);
                    }, 1000);
                }
            }, tempo_singola_img + 250);
        }, 3000);

        setTimeout(() => {
            showAllImgs();
        }, tempo_tot + 250 * qty + 1500);
    }
})

