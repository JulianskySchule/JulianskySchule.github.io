function toggleSidebar() {
  var Seitenliste = document.getElementById('Seitenliste');
  Seitenliste.classList.toggle('hidden');
}

function autoShiftNav() {
  var navBar = document.getElementById("Seitenliste");
  if (window.innerWidth <= 768) { 
    navBar.style.left = "-120px";
  } else {
    navBar.style.left = "0px";
  }
}

// funktion um seitenliste nach links und wieder zurück zu verschieben
function toggleNav() {
  var navBar = document.getElementById("Seitenliste");
  if (navBar.style.left === "0px") {
    navBar.style.left = "-120px"; //hier kann man eingeben, wie sehr es nach links verschieben soll
  } else {
    navBar.style.left = "0px";
  }
}

document.addEventListener("DOMContentLoaded", function() { // holt den Namen der aktuellen Seite
  autoShiftNav(); 

  var currentPage = window.location.pathname.split("/").pop();
  var links = document.querySelectorAll(".links a");

  links.forEach(function(link) {
    var linkHref = link.getAttribute("href").split("/").pop();
    if (currentPage === linkHref) {
      link.classList.add("active");
    }
  });
});

window.addEventListener("resize", autoShiftNav);

