const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}


window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

const menuhamburger = document.querySelector (".menu-hamburger")
const navLinks = document.querySelector (".nav-links")

menuhamburger.addEventListener('click', (event) => {
  event.preventDefault();
  navLinks.classList.toggle('mobile-menu')
  })

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  $(document).ready(function(){
    console.log("Carrousel initialisé");
    $(".owl-carousel").owlCarousel({
      items: 3, // Le nombre d'éléments visibles à la fois
      loop: true, // Pour activer la lecture en boucle
      autoplay: true, // Pour activer la lecture automatique
      autoplayTimeout: 3000, // Durée de l'intervalle d'autoplay en millisecondes
      responsive: {
        0: {
          items: 1 // Nombre d'éléments visibles à l'écran pour les écrans étroits
        },
        768: {
          items: 2 // Nombre d'éléments visibles à l'écran pour les écrans plus larges
        },
        992: {
          items: 3 // Nombre d'éléments visibles à l'écran pour les écrans plus larges encore
        }
      }
    });
  });
  

  