

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sunaina | Creative Web Developer</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<style>
:root {
  --pink: #ec4899;
  --dark-pink: #b10f59;
  --light-pink: #fff0f7;
  --soft-pink: #ffe0ef;
  --white: #ffffff;
  --black: #24151d;
  --muted: #806b77;
  --border: #f4d6e5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--white);
  color: var(--black);
  font-family: "DM Sans", sans-serif;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.container {
  width: min(1160px, 90%);
  margin: auto;
}

section {
  padding: 105px 0;
}

.section-label {
  color: var(--dark-pink);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.section-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 600;
  margin-bottom: 18px;
}

.section-description {
  color: var(--muted);
  line-height: 1.8;
  max-width: 570px;
}

.center-heading {
  text-align: center;
  margin-bottom: 55px;
}

.pink-text {
  color: var(--dark-pink);
}

/* NAVIGATION */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(236,72,153,.12);
}

.nav-inner {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: "Playfair Display", serif;
  font-size: 27px;
  font-weight: 700;
  color: var(--dark-pink);
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-size: 13px;
  font-weight: 700;
  transition: .3s;
}

.nav-links a:hover {
  color: var(--pink);
}

.nav-contact {
  background: var(--dark-pink);
  color: white !important;
  padding: 12px 21px;
  border-radius: 30px;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: var(--dark-pink);
  font-size: 28px;
  cursor: pointer;
}

/* HERO */

.hero {
  min-height: 100vh;
  padding: 125px 0 70px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 25%, #fff0f7 0, transparent 27%),
    radial-gradient(circle at 90% 70%, #fff0f7 0, transparent 30%),
    white;
}

.hero-content {
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-tag {
  display: inline-block;
  padding: 10px 19px;
  background: var(--light-pink);
  border: 1px solid var(--border);
  color: var(--dark-pink);
  border-radius: 30px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 800;
  margin-bottom: 28px;
}

.hero-name-wrap {
  width: min(100%, 950px);
  margin: auto;
  position: relative;
  padding: 55px 0;
}

.hero-name {
  position: relative;
  z-index: 2;
  font-family: "Playfair Display", serif;
  font-size: clamp(65px, 13vw, 155px);
  line-height: 1;
  letter-spacing: 5px;
  color: var(--dark-pink);
  text-shadow: 0 8px 35px rgba(177,15,89,.10);
}

.orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px solid rgba(236,72,153,.45);
  border-radius: 50%;
  transform: translate(-50%,-50%);
  pointer-events: none;
}

.orbit-one {
  width: 310px;
  height: 145px;
  transform: translate(-50%,-50%) rotate(-18deg);
}

.orbit-two {
  width: 520px;
  height: 210px;
  transform: translate(-50%,-50%) rotate(17deg);
}

.orbit-three {
  width: 740px;
  height: 285px;
  border-color: rgba(177,15,89,.19);
  transform: translate(-50%,-50%) rotate(-12deg);
}

.orbit-four {
  width: 890px;
  height: 350px;
  border-color: rgba(236,72,153,.15);
  transform: translate(-50%,-50%) rotate(10deg);
}

.orbit-dot {
  position: absolute;
  z-index: 3;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 18px rgba(236,72,153,.5);
}

.dot-one { top: 13%; left: 20%; }
.dot-two { top: 75%; right: 16%; width: 9px; height: 9px; }
.dot-three { top: 28%; right: 11%; width: 7px; height: 7px; }

.hero-subtitle {
  margin-top: 22px;
  font-size: clamp(17px, 3vw, 25px);
  letter-spacing: 8px;
  font-weight: 800;
}

.hero-description {
  max-width: 540px;
  margin: 22px auto 30px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 15px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 27px;
  border-radius: 35px;
  font-size: 13px;
  font-weight: 800;
  transition: .3s;
}

.btn-primary {
  background: var(--dark-pink);
  color: white;
  box-shadow: 0 10px 25px rgba(177,15,89,.18);
}

.btn-outline {
  border: 1px solid var(--dark-pink);
  color: var(--dark-pink);
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 13px 30px rgba(177,15,89,.18);
}

.scroll-hint {
  margin-top: 55px;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 3px;
}

/* COMMON CARDS */

.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 25px;
  box-shadow: 0 12px 40px rgba(177,15,89,.055);
  transition: transform .35s, box-shadow .35s, border-color .35s;
}

.card:hover {
  transform: translateY(-9px);
  border-color: #ee9fc4;
  box-shadow: 0 22px 48px rgba(177,15,89,.12);
}

/* ABOUT */

.about-grid {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 28px;
  align-items: stretch;
}

.about-card {
  padding: 42px;
}

.about-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 31px;
  margin-bottom: 18px;
}

.about-card p {
  color: var(--muted);
  line-height: 1.9;
  font-size: 14px;
}

.about-points {
  margin-top: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.about-point {
  background: var(--light-pink);
  border-radius: 13px;
  padding: 13px;
  font-size: 12px;
  font-weight: 700;
  color: var(--dark-pink);
}

.about-visual {
  background: linear-gradient(145deg,#fff0f7,#ffe1ef);
  min-height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  position: relative;
  overflow: hidden;
}

.about-visual img {
  width: min(100%,260px);
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 15px 20px rgba(177,15,89,.10));
}

.about-visual h3 {
  color: var(--dark-pink);
  font-family: "Playfair Display", serif;
  font-size: 27px;
  margin-top: 12px;
}

.about-visual p {
  font-size: 12px;
  color: var(--muted);
  margin-top: 8px;
  letter-spacing: 2px;
}

/* SKILLS */

.skills-section {
  background: #fff9fc;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
}

.skill-card {
  padding: 27px 18px;
  text-align: center;
}

.skill-icon {
  font-size: 37px;
  margin-bottom: 15px;
}

.skill-card h3 {
  font-size: 15px;
  margin-bottom: 8px;
}

.skill-card p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
}

.skill-level {
  height: 5px;
  background: #f8e1ec;
  border-radius: 10px;
  margin-top: 18px;
  overflow: hidden;
}

.skill-level span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg,var(--pink),var(--dark-pink));
  border-radius: 10px;
}

/* MARQUEE */

.marquee {
  padding: 25px 0;
  overflow: hidden;
  background: var(--dark-pink);
  color: white;
  white-space: nowrap;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 24s linear infinite;
}

.marquee-track span {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 3px;
  padding: 0 28px;
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

/* PROJECTS */

.projects-grid {
  display: grid;
  grid-template-columns: 1.3fr .7fr;
  gap: 25px;
}

.project-main {
  overflow: hidden;
}

.project-preview {
  min-height: 270px;
  padding: 28px;
  background: linear-gradient(135deg,#fff0f7,#fbd3e6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.browser-window {
  width: 100%;
  max-width: 470px;
  background: white;
  border-radius: 13px;
  box-shadow: 0 18px 45px rgba(177,15,89,.16);
  overflow: hidden;
}

.browser-top {
  height: 28px;
  background: #f8edf3;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
}

.browser-top i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #e88ab7;
}

.browser-body {
  padding: 28px 15px;
  text-align: center;
}

.browser-body h3 {
  font-family: "Playfair Display",serif;
  color: var(--dark-pink);
  font-size: 30px;
}

.browser-body p {
  font-size: 10px;
  color: var(--muted);
  margin-top: 7px;
}

.fake-foods {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 22px;
}

.fake-foods span {
  background: #fff0f7;
  border-radius: 12px;
  padding: 13px;
  font-size: 28px;
}

.project-content {
  padding: 30px;
}

.project-content h3 {
  font-family: "Playfair Display",serif;
  font-size: 29px;
  margin-bottom: 12px;
}

.project-content p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 20px 0;
}

.project-tags span {
  background: var(--light-pink);
  color: var(--dark-pink);
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
}

.project-side {
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff8fc;
}

.project-side .big-icon {
  font-size: 55px;
  margin-bottom: 20px;
}

.project-side h3 {
  font-family: "Playfair Display",serif;
  font-size: 25px;
  margin-bottom: 12px;
}

.project-side p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 13px;
}

/* JOURNEY */

.journey {
  background: #fff9fc;
}

.timeline {
  max-width: 720px;
  margin: auto;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 17px;
  width: 2px;
  background: #f1b4d0;
}

.timeline-item {
  position: relative;
  padding: 0 0 35px 55px;
}

.timeline-dot {
  position: absolute;
  left: 8px;
  top: 8px;
  width: 20px;
  height: 20px;
  background: var(--dark-pink);
  border: 5px solid #fbd7e9;
  border-radius: 50%;
}

.timeline-card {
  padding: 25px;
}

.timeline-card h3 {
  font-size: 17px;
  margin-bottom: 8px;
}

.timeline-card p {
  font-size: 13px;
  line-height: 1.8;
  color: var(--muted);
}

/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
}

.stat-card {
  padding: 30px;
  text-align: center;
  background: linear-gradient(145deg,#fff,#fff2f8);
}

.stat-card .number {
  font-family: "Playfair Display",serif;
  font-size: 39px;
  color: var(--dark-pink);
  font-weight: 700;
}

.stat-card p {
  color: var(--muted);
  font-size: 12px;
  margin-top: 8px;
}

/* CONTACT */

.contact-section {
  background: #fff9fc;
}

.contact-card {
  max-width: 750px;
  margin: auto;
  padding: 50px 35px;
  text-align: center;
  background: linear-gradient(135deg,#fff0f7,#fff);
}

.contact-card h3 {
  font-family: "Playfair Display",serif;
  font-size: 35px;
  margin-bottom: 15px;
}

.contact-card p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.social-links a {
  padding: 13px 20px;
  border: 1px solid var(--border);
  background: white;
  color: var(--dark-pink);
  border-radius: 30px;
  font-weight: 800;
  font-size: 12px;
  transition: .3s;
}

.social-links a:hover {
  background: var(--dark-pink);
  color: white;
  transform: translateY(-4px);
}

/* FOOTER */

footer {
  padding: 35px 0;
  background: #24151d;
  color: white;
  text-align: center;
}

footer h2 {
  font-family: "Playfair Display",serif;
  font-size: 28px;
  color: #ffb5d6;
  letter-spacing: 3px;
}

footer p {
  color: #e8c8d8;
  font-size: 12px;
  margin-top: 12px;
  line-height: 1.8;
}

/* SCROLL REVEAL FALLBACK */

.reveal {
  opacity: 1;
  transform: none;
}

/* RESPONSIVE */

@media(max-width:850px) {
  .nav-links {
    position: absolute;
    top: 76px;
    right: 0;
    width: 100%;
    background: white;
    display: none;
    flex-direction: column;
    padding: 25px;
    border-bottom: 1px solid var(--border);
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .about-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .orbit-four { width: 100%; }
  .orbit-three { width: 90%; }
  .orbit-two { width: 75%; }
}

@media(max-width:520px) {
  section {
    padding: 75px 0;
  }

  .hero {
    min-height: 90vh;
  }

  .hero-name {
    letter-spacing: 1px;
  }

  .hero-name-wrap {
    padding: 45px 0;
  }

  .orbit-one { width: 230px; }
  .orbit-two { width: 95%; }
  .orbit-three { width: 110%; }
  .orbit-four { width: 120%; }

  .hero-subtitle {
    letter-spacing: 4px;
  }

  .about-card {
    padding: 27px;
  }

  .about-points {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .skill-card {
    padding: 20px 10px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 35px 20px;
  }
}

@media(prefers-reduced-motion:reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
</style>
</head>

<body>

<!-- NAVIGATION -->

<header class="navbar">
  <div class="container nav-inner">
    <a href="#home" class="logo">SUNAINA<span>♡</span></a>

    <button class="menu-toggle" id="menuToggle" aria-label="Open menu">☰</button>

    <ul class="nav-links" id="navLinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#journey">Journey</a></li>
      <li><a href="#contact" class="nav-contact">Contact Me ↗</a></li>
    </ul>
  </div>
</header>

<main>

<!-- HERO -->

<section class="hero" id="home">
  <div class="container hero-content">

    <div class="hero-tag hero-animate">✦ CREATIVE WEB DEVELOPER ✦</div>

    <div class="hero-name-wrap">
      <div class="orbit orbit-one"></div>
      <div class="orbit orbit-two"></div>
      <div class="orbit orbit-three"></div>
      <div class="orbit orbit-four"></div>

      <span class="orbit-dot dot-one"></span>
      <span class="orbit-dot dot-two"></span>
      <span class="orbit-dot dot-three"></span>

      <h1 class="hero-name" id="heroName">SUNAINA</h1>
    </div>

    <h2 class="hero-subtitle hero-animate">WEB DEVELOPER</h2>

    <p class="hero-description hero-animate">
      I turn creative ideas into beautiful digital experiences.
      Exploring code, design and animations to build something extraordinary.
    </p>

    <div class="hero-buttons hero-animate">
      <a href="#projects" class="btn btn-primary">Explore My Work ↗</a>
      <a href="#contact" class="btn btn-outline">Let's Connect ♡</a>
    </div>

    <div class="scroll-hint hero-animate">SCROLL TO EXPLORE ↓</div>

  </div>
</section>

<!-- ABOUT -->

<section id="about">
  <div class="container">

    <div class="center-heading reveal">
      <div class="section-label">A LITTLE INTRODUCTION</div>
      <h2 class="section-title">About <span class="pink-text">Me</span></h2>
      <p class="section-description" style="margin:auto">
        A little bit about who I am and what inspires me.
      </p>
    </div>

    <div class="about-grid">

      <div class="card about-card reveal">
        <div class="section-label">HELLO THERE ♡</div>
        <h3>I'm Sunaina, a creative developer.</h3>

        <p>
          I enjoy building websites that combine thoughtful design,
          clean code and delightful interactions. I love experimenting
          with new ideas and continuously improving my development skills.
        </p>

        <div class="about-points">
          <div class="about-point">✦ Frontend Development</div>
          <div class="about-point">✦ Creative Design</div>
          <div class="about-point">✦ Web Animations</div>
          <div class="about-point">✦ Responsive Layouts</div>
        </div>
      </div>

      <div class="card about-visual reveal">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Sunaina&backgroundColor=ffe4f1"
          alt="Illustrated developer avatar"
        >
        <h3>Dream. Create. Inspire.</h3>
        <p>CREATIVITY MEETS TECHNOLOGY</p>
      </div>

    </div>
  </div>
</section>

<!-- SKILLS -->

<div class="marquee">
  <div class="marquee-track">
    <span>HTML ✦ CSS ✦ JAVASCRIPT ✦ GSAP ✦ PHP ✦ MYSQL ✦ REACT ✦ NODE.JS ✦</span>
    <span>HTML ✦ CSS ✦ JAVASCRIPT ✦ GSAP ✦ PHP ✦ MYSQL ✦ REACT ✦ NODE.JS ✦</span>
  </div>
</div>

<section class="skills-section" id="skills">
  <div class="container">

    <div class="center-heading reveal">
      <div class="section-label">WHAT I WORK WITH</div>
      <h2 class="section-title">My <span class="pink-text">Skills</span></h2>
      <p class="section-description" style="margin:auto">
        Technologies and tools I use to bring my ideas to life.
      </p>
    </div>

    <div class="skills-grid">

      <div class="card skill-card reveal">
        <div class="skill-icon">🌐</div>
        <h3>HTML5</h3>
        <p>Semantic structure and accessible web pages.</p>
        <div class="skill-level"><span style="width:90%"></span></div>
      </div>

      <div class="card skill-card reveal">
        <div class="skill-icon">🎨</div>
        <h3>CSS3</h3>
        <p>Beautiful layouts, responsive design and effects.</p>
        <div class="skill-level"><span style="width:85%"></span></div>
      </div>

      <div class="card skill-card reveal">
        <div class="skill-icon">⚡</div>
        <h3>JavaScript</h3>
        <p>Interactive experiences and dynamic interfaces.</p>
        <div class="skill-level"><span style="width:75%"></span></div>
      </div>

      <div class="card skill-card reveal">
        <div class="skill-icon">🎬</div>
        <h3>GSAP</h3>
        <p>Motion design and scroll-based animations.</p>
        <div class="skill-level"><span style="width:65%"></span></div>
      </div>

      <div class="card skill-card reveal">
        <div class="skill-icon">🐘</div>
        <h3>PHP</h3>
        <p>Server-side development and backend logic.</p>
        <div class="skill-level"><span style="width:75%"></span></div>
      </div>

      <div class="card skill-card reveal">
        <div class="skill-icon">🗄️</div>
        <h3>MySQL</h3>
        <p>Database design and data management.</p>
        <div class="skill-level"><span style="width:75%"></span></div>
      </div>

      <div class="card skill-card reveal">
        <div class="skill-icon">⚛️</div>
        <h3>React</h3>
        <p>Component-based interface development.</p>
        <div class="skill-level"><span style="width:45%"></span></div>
      </div>

      <div class="card skill-card reveal">
        <div class="skill-icon">🔧</div>
        <h3>Git & GitHub</h3>
        <p>Version control and project collaboration.</p>
        <div class="skill-level"><span style="width:75%"></span></div>
      </div>

    </div>
  </div>
</section>

<!-- PROJECTS -->

<section id="projects">
  <div class="container">

    <div class="center-heading reveal">
      <div class="section-label">SELECTED WORK</div>
      <h2 class="section-title">Featured <span class="pink-text">Projects</span></h2>
      <p class="section-description" style="margin:auto">
        A look at the ideas I've turned into real projects.
      </p>
    </div>

    <div class="projects-grid">

      <article class="card project-main reveal">

        <div class="project-preview">
          <div class="browser-window">
            <div class="browser-top">
              <i></i><i></i><i></i>
            </div>
            <div class="browser-body">
              <h3>BITEORA</h3>
              <p>EXCEPTIONAL FOOD, BEAUTIFULLY SERVED</p>
              <div class="fake-foods">
                <span>🍔</span>
                <span>🍕</span>
                <span>🍰</span>
              </div>
            </div>
          </div>
        </div>

        <div class="project-content">
          <div class="section-label">01 / RESTAURANT & E-COMMERCE</div>
          <h3>BITEORA — Food Ordering Website</h3>

          <p>
            A restaurant website with a PHP and MySQL backend,
            food ordering, shopping cart, checkout and admin dashboard.
          </p>

          <div class="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>

          <a href="https://github.com/Sunaina-hue" target="_blank" rel="noopener" class="btn btn-primary">
            View GitHub ↗
          </a>
        </div>

      </article>

      <article class="card project-side reveal">
        <div class="big-icon">💡</div>
        <div class="section-label">MORE COMING SOON</div>
        <h3>More creative ideas are on the way.</h3>
        <p>
          I'm continuously learning, experimenting and building new
          projects. Stay tuned for more work!
        </p>
      </article>

    </div>
  </div>
</section>

<!-- JOURNEY -->

<section class="journey" id="journey">
  <div class="container">

    <div class="center-heading reveal">
      <div class="section-label">MY GROWTH</div>
      <h2 class="section-title">My <span class="pink-text">Journey</span></h2>
      <p class="section-description" style="margin:auto">
        Every project teaches me something new.
      </p>
    </div>

    <div class="timeline">

      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <div class="card timeline-card">
          <div class="section-label">THE BEGINNING</div>
          <h3>Started Learning Web Development</h3>
          <p>
            Began exploring HTML, CSS and JavaScript and discovered
            the joy of creating things for the web.
          </p>
        </div>
      </div>

      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <div class="card timeline-card">
          <div class="section-label">BUILDING SKILLS</div>
          <h3>Exploring Frontend & Backend</h3>
          <p>
            Worked with responsive layouts, JavaScript interactions,
            PHP and MySQL.
          </p>
        </div>
      </div>

      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <div class="card timeline-card">
          <div class="section-label">PROJECT MILESTONE</div>
          <h3>Built BITEORA</h3>
          <p>
            Developed a restaurant ordering project with a database,
            cart, checkout and admin functionality.
          </p>
        </div>
      </div>

      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <div class="card timeline-card">
          <div class="section-label">WHAT'S NEXT</div>
          <h3>Learning, Creating & Growing</h3>
          <p>
            Exploring advanced animations, modern frameworks
            and more ambitious web experiences.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- STATS -->

<section>
  <div class="container">

    <div class="center-heading reveal">
      <div class="section-label">MY DEVELOPER SPACE</div>
      <h2 class="section-title">GitHub <span class="pink-text">Activity</span></h2>
      <p class="section-description" style="margin:auto">
        Follow my code, repositories and development journey.
      </p>
    </div>

    <div class="stats-grid">

      <div class="card stat-card reveal">
        <div class="number">01</div>
        <p>Featured Project</p>
      </div>

      <div class="card stat-card reveal">
        <div class="number">08+</div>
        <p>Technologies & Tools</p>
      </div>

      <div class="card stat-card reveal">
        <div class="number">∞</div>
        <p>Ideas to Explore</p>
      </div>

    </div>

    <div style="text-align:center;margin-top:30px">
      <a href="https://github.com/Sunaina-hue" target="_blank" rel="noopener" class="btn btn-outline">
        Explore My GitHub ↗
      </a>
    </div>

  </div>
</section>

<!-- CONTACT -->

<section class="contact-section" id="contact">
  <div class="container">

    <div class="center-heading reveal">
      <div class="section-label">HAVE A PROJECT IN MIND?</div>
      <h2 class="section-title">Let's <span class="pink-text">Connect</span></h2>
    </div>

    <div class="card contact-card reveal">
      <h3>Let's create something beautiful!</h3>
      <p>
        Have an idea, a collaboration or just want to say hello?
        I'd love to connect and hear from you.
      </p>

      <div class="social-links">
        <a href="https://github.com/Sunaina-hue" target="_blank" rel="noopener">⌘ GitHub</a>
        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener">in LinkedIn</a>
        <a href="mailto:YOUR_EMAIL">✉ Email Me</a>
      </div>
    </div>

  </div>
</section>

</main>

<!-- FOOTER -->

<footer>
  <div class="container">
    <h2>SUNAINA ♡</h2>
    <p>Designed with creativity. Built with code.</p>
    <p>© 2026 Sunaina. All rights reserved.</p>
  </div>
</footer>

<script>
/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent =
    navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

/* GSAP ANIMATIONS */

if (window.gsap && window.ScrollTrigger) {

  gsap.registerPlugin(ScrollTrigger);

  const heroTimeline = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  heroTimeline
    .from(".hero-tag", {
      y: -35,
      opacity: 0,
      duration: .7
    })
    .from(".hero-name", {
      y: 90,
      opacity: 0,
      scale: .8,
      duration: 1.2
    }, "-=.25")
    .from(".hero-subtitle", {
      x: 70,
      opacity: 0,
      duration: .7
    }, "-=.55")
    .from(".hero-description", {
      y: 25,
      opacity: 0,
      duration: .7
    }, "-=.4")
    .from(".hero-buttons", {
      x: 60,
      opacity: 0,
      duration: .7
    }, "-=.4")
    .from(".scroll-hint", {
      opacity: 0,
      duration: .6
    }, "-=.2");

  gsap.to(".orbit-one", {
    rotation: 342,
    duration: 25,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".orbit-two", {
    rotation: 377,
    duration: 32,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".orbit-dot", {
    scale: 1.5,
    opacity: .55,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    stagger: .3
  });

  gsap.utils.toArray(".reveal").forEach(element => {
    gsap.from(element, {
      y: 55,
      opacity: 0,
      duration: .9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        once: true
      }
    });
  });
}
</script>

</body>
</html>
```

