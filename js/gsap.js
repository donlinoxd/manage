document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".anim-down", {
    opacity: 0,
    y: -50,
    duration: 2,
    stagger: 0.2,
    ease: "back",
  });

  gsap.from(".anim-up", {
    opacity: 0,
    y: 100,
    duration: 2,
    delay: 1,
    stagger: 0.4,
    ease: "power2",
  });

  gsap.from(".anim-scale-out", {
    opacity: 0,
    duration: 1.5,
    delay: 2,
    scale: 0.2,
    transformOrigin: "center",
    ease: "back",
  });

  gsap.from(".anim-scale-y-top", {
    opacity: 0,
    duration: 1,
    delay: 3.5,
    stagger: 0.5,
    scaleY: 0.2,
    transformOrigin: "top",
    ease: "power2",
  });

  gsap.from(".anim-scale-y-bot", {
    opacity: 0,
    duration: 1,
    delay: 4.5,
    scaleY: 0.2,
    stagger: 0.3,
    transformOrigin: "bottom",
    ease: "back",
  });

  gsap.from(".anim-slide-up", {
    opacity: 0,
    delay: 4.75,
    stagger: 0.25,
    duration: 2,
    ease: "power2",
    translateY: 100,
  });

  gsap.from(".anim-rotation", {
    opacity: 0,
    duration: 3.5,
    delay: 5,
    ease: "slow",
    rotation: 360,
    transformOrigin: "center",
  });
});
