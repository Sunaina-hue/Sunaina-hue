
document.addEventListener("DOMContentLoaded", () => {

  // REGISTER GSAP
  if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    // 1. SUNAINA SCATTER ANIMATION

    const letters = gsap.utils.toArray(".scatter-letter");

    const scatterDirections = [
      { x: -180, y: -150, rotation: -45 },
      { x: 130, y: -180, rotation: 35 },
      { x: -120, y: 170, rotation: -35 },
      { x: 180, y: -100, rotation: 45 },
      { x: -160, y: -120, rotation: -30 },
      { x: 120, y: 160, rotation: 35 },
      { x: 190, y: -150, rotation: 50 }
    ];

    gsap.set(letters, {
      opacity: 0,
      scale: 0.1,
      filter: "blur(15px)",
      transformOrigin: "center center"
    });

    letters.forEach((letter, index) => {
      gsap.set(letter, scatterDirections[index % scatterDirections.length]);
    });

    gsap.to(letters, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.7,
      stagger: 0.13,
      ease: "back.out(1.7)",
      delay: 0.4
    });

    // 2. HERO TEXT ENTRANCE

    gsap.from(
      [".availability", ".eyebrow", ".hero-subtitle",
       ".hero-description", ".hero-buttons", ".hero-social"],
      {
        opacity: 0,
        y: 45,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1.1
      }
    );

    // 3. FLOATING OBJECT ENTRANCE

    gsap.from(".floating-card", {
      opacity: 0,
      scale: 0.4,
      rotation: 25,
      duration: 1.2,
      stagger: 0.2,
      ease: "back.out(1.7)",
      delay: 1.3
    });

    gsap.from(".main-visual", {
      opacity: 0,
      scale: 0.5,
      rotation: -20,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.8
    });

    // 4. SCROLL REVEAL SECTIONS

    gsap.utils.toArray(".section-heading").forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          once: true
        },
        opacity: 0,
        y: 65,
        duration: 1,
        ease: "power3.out"
      });
    });

    // 5. ABOUT ANIMATION

    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-layout",
        start: "top 80%",
        once: true
      },
      opacity: 0,
      x: -100,
      rotation: -5,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-layout",
        start: "top 80%",
        once: true
      },
      opacity: 0,
      x: 100,
      duration: 1.2,
      delay: 0.15,
      ease: "power3.out"
    });

    // 6. SKILL CARDS ANIMATION

    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: ".skills-track",
        start: "top 85%",
        once: true
      },
      opacity: 0,
      y: 70,
      scale: 0.7,
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(1.5)"
    });

    // 7. PROJECT CARDS ANIMATION

    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".project-grid",
        start: "top 85%",
        once: true
      },
      opacity: 0,
      y: 100,
      rotation: 3,
      stagger: 0.25,
      duration: 1.2,
      ease: "power3.out"
    });

    // 8. CONTACT ANIMATION

    gsap.from(".contact > *", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        once: true
      },
      opacity: 0,
      y: 45,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out"
    });

  }

  // 9. MOUSE FOLLOWING CURSOR GLOW

  const cursorGlow = document.querySelector(".cursor-glow");

  if (cursorGlow) {
    window.addEventListener("mousemove", (event) => {
      cursorGlow.style.left = event.clientX + "px";
      cursorGlow.style.top = event.clientY + "px";
    });
  }

  // 10. FLOATING OBJECTS MOUSE MOVEMENT

  const visualStage = document.querySelector(".visual-stage");

  if (visualStage && window.matchMedia("(pointer: fine)").matches) {

    visualStage.addEventListener("mousemove", (event) => {

      const rect = visualStage.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      const cards = visualStage.querySelectorAll(".floating-card");

      cards.forEach((card, index) => {
        const strength = (index + 1) * 12;

        card.style.translate =
          `${x * strength}px ${y * strength}px`;
      });

    });

    visualStage.addEventListener("mouseleave", () => {
      visualStage.querySelectorAll(".floating-card").forEach((card) => {
        card.style.translate = "0px 0px";
      });
    });

  }

  // 11. IMAGE LOAD CHECK

  document.querySelectorAll("img").forEach((img) => {

    img.addEventListener("error", () => {
      console.warn("Image failed to load:", img.src);
    });

    img.addEventListener("load", () => {
      img.classList.add("image-loaded");
    });

    if (img.complete && img.naturalWidth > 0) {
      img.classList.add("image-loaded");
    }

  });

});

