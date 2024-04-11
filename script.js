const service = document.getElementById("ser");
const apropos = document.getElementById("propo");
const section = document.querySelector(".etranger");
const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  // pour modifier la couleur de la dive au scroll
  var sectionTop = section.getBoundingClientRect().top;
  var footerTop = footer.getBoundingClientRect().top;
  if (sectionTop <= 0 && footerTop > 0) {
    service.classList.add("scroll");
    apropos.classList.add("scroll");
  } else {
    service.classList.remove("scroll");
    apropos.classList.remove("scroll");
  }
});
