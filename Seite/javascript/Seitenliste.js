
function toggleSidebar() {
  var Seitenliste = document.getElementById('Seitenliste');
  Seitenliste.classList.toggle('hidden');
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


document.addEventListener("DOMContentLoaded", function() {
  var currentPage = window.location.pathname.split("/").pop(); // holt den Namen der aktuellen Seite
  var links = document.querySelectorAll(".links a");

  links.forEach(function(link) {
    var linkHref = link.getAttribute("href").split("/").pop();
    if (currentPage === linkHref) {
      link.classList.add("active");
    }
  });
});
