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

 
  // Récupérez toutes les sections de la page
const sections = document.querySelectorAll('section');

// Ajoutez un gestionnaire d'événements au défilement de la page
window.addEventListener('scroll', () => {
  let currentSectionId = null;

  // Parcourez les sections pour déterminer la section actuellement visible
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      currentSectionId = section.id;
    }
  });

  // Supprimez la classe "active" de tous les liens de navigation
  navLinks.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
  });

  // Ajoutez la classe "active" au lien correspondant à la section actuellement visible
  const activeLink = document.querySelector(`.nav-links ul li a[href="#${currentSectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
});
