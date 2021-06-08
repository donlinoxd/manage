document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".anim-down",
    {
      opacity: 0,
      y: -50,
    },
    {
      duration: 2,
      opacity: 2,
      y: 0,
      stagger: 0.2,
      ease: "back",
    }
  );

  gsap.fromTo(
    ".anim-up",
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      duration: 2,
      delay: 1,
      y: 0,
      stagger: 0.4,
      ease: "back",
    }
  );

  gsap.fromTo(
    ".anim-right",
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      delay: 2,
      duration: 2,
      ease: "back",
    }
  );

  gsap.fromTo(
    ".scroll-anim-right",
    {
      x: 500,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".scroll-anim-right",
        start: "top center",
        end: "+=500",
        once: true,
      },
      opacity: 1,
      stagger: 0.5,
      x: 0,
      ease: "power2",
    }
  );

  gsap.fromTo(
    ".scroll-anim-left",
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".scroll-anim-left",
        start: "top center",
        end: "+=500",
        once: true,
      },
      opacity: 1,
      stagger: 0.7,
      x: 0,
      ease: "back",
    }
  );
});
