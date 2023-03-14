/* 
    ` <div class="slide active">
        <img  src="./img/01.webp" alt="img1">
    </div> ` 
*/

// creazione del vettore di immagini

const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const slider = document.querySelector(".slides");
const thumber = document.querySelector(".thumbs");

let currentIndex = 0;
let slides = " ";
let thumbs = " ";
for ( let i=0; i<images.length; i++)
{
    slides += ` <div class="slide">
                    <img src="${images[i]}" alt="img${i + 1}">
               </div> ` ;

    thumbs +=  ` <div class="thumb">
                     <img src="${images[i]}" alt="img${i + 1}">
                </div> ` ;
}

slider.innerHTML += slides;
thumber.innerHTML += thumbs;

document.querySelectorAll(".slide")[currentIndex].classList.add("active");
document.querySelectorAll(".thumb")[currentIndex].classList.add("active");

const up = document.querySelector(".up");
const down = document.querySelector(".down");

up.addEventListener("click" , goDown);

// funzione per scorrere avanti il vettore di immagini

function goUp() {
    document.querySelectorAll(".slide")[currentIndex].classList.remove("active");
    document.querySelectorAll(".thumb")[currentIndex].classList.remove("active");
    if(currentIndex == images.length - 1)
    {
        currentIndex = 0;
    }
    else
    {
        currentIndex++;
    }
    document.querySelectorAll(".slide")[currentIndex].classList.add("active");
    document.querySelectorAll(".thumb")[currentIndex].classList.add("active");
}

down.addEventListener("click" , goUp);

// funzione per scorrere indietro il vettore di immagini

function goDown() {
    document.querySelectorAll(".slide")[currentIndex].classList.remove("active");
    document.querySelectorAll(".thumb")[currentIndex].classList.remove("active");
    if(currentIndex == 0)
    {
        currentIndex = images.length - 1;
    }
    else
    {
        currentIndex--;
    }
    document.querySelectorAll(".slide")[currentIndex].classList.add("active");
    document.querySelectorAll(".thumb")[currentIndex].classList.add("active");
}