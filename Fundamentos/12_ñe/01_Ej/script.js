console.log("page loaded...");

function playVideo(secondaryVideo) {
var mainVideo = document.getElementById("mainVideo"); // Selecciona el video principal
var videoTitle = secondaryVideo.parentElement.querySelector(".video-title").textContent; // Selecciona el título del video secundario
var principalTitle = document.getElementById("title-principal"); // Selecciona el título principal

// Guarda temporalmente el src del video principal
var tempVideoSrc = mainVideo.src;
var tempTitle = principalTitle.textContent; // Guarda el título principal temporalmente

// Cambia el src del video principal al del video secundario
mainVideo.src = secondaryVideo.src;
mainVideo.play(); // Reproduce el nuevo video en el video principal

// Cambia el src del video secundario al que tenía el video principal
secondaryVideo.src = tempVideoSrc;

// Intercambia los títulos
principalTitle.textContent = videoTitle;
secondaryVideo.parentElement.querySelector(".video-title").textContent = tempTitle;
}


function pauseVideo() {
var mainVideo = document.getElementById("mainVideo");

// Guarda temporalmente el src del video secundario
var tempSrc = secondaryVideo.src;

// Cambia el src del video secundario al del video principal
secondaryVideo.src = mainVideo.src;

// Cambia el src del video principal al original del video secundario
mainVideo.src = tempSrc;
mainVideo.play(); // Reproduce el video original en el video principal
}