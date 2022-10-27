const slide = () => {
  const burger = document.querySelector(".burger");
  const naviga = document.querySelector(".nav-links");
  const navlink = document.querySelectorAll(".nav-links li");
  //togle nav
  burger.addEventListener("click", () => {
    naviga.classList.toggle("active");

    navlinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 2}s`;
    });
    // animate link
  });
};

slide();
