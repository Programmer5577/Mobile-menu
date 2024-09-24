var knopka = document.querySelector(".button");
var knopka2 = document.querySelector(".menu-container");

knopka.onclick = function() {
    knopka.classList.toggle("active");
    knopka2.classList.toggle("active"); 
}