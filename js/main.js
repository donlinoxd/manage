document.addEventListener("DOMContentLoaded", () => {
  // SIDENAV
  const sideNav = document.querySelector(".sidenav");
  M.Sidenav.init(sideNav, {
    edge: "right",
  });

  //   CAROUSEL
  const carousel = document.querySelector(".carousel");
  M.Carousel.init(carousel, {
    dist: -50,
    shift: 50,
  });

  //   NAVBAR
  const navBar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 32) {
      navBar.className = "grey lighten-5 z-depth-0";
      return;
    }

    navBar.className = "transparent z-depth-0";
  });
});
