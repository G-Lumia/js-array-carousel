/* 
    ` <div class="slide active">
        <img  src="./img/01.webp" alt="img1">
    </div> ` 
*/

// creazione del vettore di immagini
const slider = document.querySelector(".slides");
const thumber = document.querySelector(".thumbs");

const images = [
{
    img : "./img/01.webp",
    text : "Spiderman"
},
{
    img : "./img/02.webp",
    text : "Ratchet & Clank"
},
{
    img : "./img/03.webp",
    text : "Fortinite"
},
{
    img : "./img/04.webp",
    text : "Stray"
},
{
    img : "./img/05.webp",
    text : "Marvel"
}];

let currentIndex = 0;

function createCarousel()
{
    images.forEach((game) =>
    {
        const slide = document.createElement("img");
        const text = document.createElement("h2");
        text.innerText = game.text;
        slide.src = game.img;
        slide.classList.add("slide");
        text.classList.add("caption" , "bg-light" , "text-dark" , "p-3");

        const thumb = document.createElement("img");
        thumb.src = game.img;
        thumb.classList.add("thumb");
        slider.appendChild(slide);
        slider.appendChild(text);
        thumber.appendChild(thumb);

        if(images.indexOf(game) === 0)
        {
            slide.classList.add("d-block");
            text.classList.add("d-block");
        }
    });
}

const up = document.querySelector(".up");
const down = document.querySelector(".down");
up.addEventListener("click" , goDown);

// funzione per scorrere avanti il vettore di immagini

function goUp() {
    const slides = document.querySelectorAll(".slide");
    const texts = document.querySelectorAll("h2");
    const thumbs =  document.querySelectorAll(".thumb");

    slides[currentIndex].classList.remove("d-block");
    texts[currentIndex].classList.remove("d-block");
    thumbs[currentIndex].classList.remove("active");

    if(currentIndex == images.length - 1)
    {
        currentIndex = 0;
    }
    else
    {
        currentIndex++;
    }
    slides[currentIndex].classList.add("d-block");
    texts[currentIndex].classList.add("d-block");
    thumbs[currentIndex].classList.add("active");
}

down.addEventListener("click" , goUp);

// funzione per scorrere indietro il vettore di immagini

function goDown() {
    const slides = document.querySelectorAll(".slide");
    const texts = document.querySelectorAll("h2");
    const thumbs =  document.querySelectorAll(".thumb");

    slides[currentIndex].classList.remove("d-block");
    texts[currentIndex].classList.remove("d-block");
    thumbs[currentIndex].classList.remove("active");
    if(currentIndex == 0)
    {
        currentIndex = images.length - 1;
    }
    else
    {
        currentIndex--;
    }
    slides[currentIndex].classList.add("d-block");
    texts[currentIndex].classList.add("d-block");
    thumbs[currentIndex].classList.add("active");
}


// MILESTONE 1
// Per prima cosa, proviamo ad aggiungere al nostro carosello un autoplay. quindi il carosello deve cominciare a girare non appena carico la pagina.
// Si deve fermare se vado col mouse sopra il div che contiene tutto lo slider e
// ripartire quando vado col mouse fuori del div con lo slider.
//MILESTONE 2
// convertiamo l'array delle immagini in un array di oggetti. Ogni oggetto deve contenere una immagine e un titolo (da visualizzare sopra l'immagine del carosello)MILESTONE 3
// Cicliamo quindi sull'array di oggetti possibilmente usando un forEach

createCarousel();

let autoplay = setInterval(goUp , 1000);

slider.addEventListener("mouseover", stop);
slider.addEventListener("mouseout" , play);

function play()
{
    autoplay = setInterval(goUp , 1000);
}

function stop()
{
    clearInterval(autoplay);
}