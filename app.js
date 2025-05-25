document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#box", {
      duration: 1.5,
      x: 200,
      rotation: 360,
      backgroundColor: "#f87171",
      ease: "power2.inOut"
    });
  });
  