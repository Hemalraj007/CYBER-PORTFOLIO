/* =========================
   MATRIX RAIN ANIMATION
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "01アイウエオカキクケコサシスセソ";

const fontSize = 15;

let columns;
let drops;

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);

    drops = Array(columns).fill(1);

}

resizeCanvas();

function drawMatrix() {

    ctx.fillStyle = "rgba(3, 6, 5, 0.08)";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff66";

    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text = letters[
            Math.floor(Math.random() * letters.length)
        ];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }

        drops[i]++;

    }

}

setInterval(drawMatrix, 45);

window.addEventListener("resize", resizeCanvas);


/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const words = [

    "Aspiring Cybersecurity Professional",

    "Ethical Hacking Enthusiast",

    "Offensive Security Researcher",

    "Linux Explorer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    if (!deleting) {

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1300);

            return;

        }

    } else {

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            charIndex = 0;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );

}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

document.querySelectorAll(".reveal").forEach((element) => {

    observer.observe(element);

});


/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});