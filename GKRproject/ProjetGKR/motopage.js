const images = document.querySelectorAll(".photo-block img, .photo-square img");

// Fonction pour afficher la fenêtre modale avec l'image cliquée
function openModal(index) {
    document.getElementById("modal-" + (index + 1)).style.display = "block";
}

// Ajoutez un écouteur d'événement pour chaque image
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        openModal(index);
    });
}
);

// Ajoutez un écouteur d'événement pour fermer les fenêtres modales lorsque l'utilisateur clique à l'extérieur de l'image agrandie
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}
);