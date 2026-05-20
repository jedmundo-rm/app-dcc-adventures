const playerContainer = document.getElementById('videoPlayerContainer');
const videoElement = document.getElementById('mainVideo');

function playVideo(url) {
    // Asignar la URL (local o remota)
    videoElement.src = url;
    
    // Mostrar el contenedor
    playerContainer.classList.remove('hidden');
    
    // Iniciar reproducción
    videoElement.play();
}

function closeVideo() {
    // Pausar y ocultar
    videoElement.pause();
    videoElement.src = ""; // Limpiar para liberar memoria
    playerContainer.classList.add('hidden');
}

// Opcional: Bloquear el scroll de fondo cuando el video está abierto
videoElement.onplay = () => document.body.style.overflow = 'hidden';
videoElement.onpause = () => document.body.style.overflow = 'auto';