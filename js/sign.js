document.addEventListener("DOMContentLoaded", () => {
  // SIDENAV
  const sideNav = document.querySelector(".sidenav");
  M.Sidenav.init(sideNav, {
    edge: "right",
  });

  //   NAV BAR
  const navBar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 32) {
      navBar.className = "grey lighten-5 z-depth-0";
      return;
    }

    navBar.className = "transparent z-depth-0";
  });

  //   SIGN FORM FOR MEDIUM AND UP
  const signUpBtn = document.getElementById("signUp");
  const signInBtn = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  //   SIGN FORM FOR SMALL AND BELOW
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const signUpWrapper = document.getElementById("sign-up-wrapper");

  registerBtn.addEventListener("click", () => {
    signUpWrapper.style.display = "flex";
  });

  loginBtn.addEventListener("click", () => {
    signUpWrapper.style.display = "none";
  });
});
