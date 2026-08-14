/*=========================================
 KHAIR ALLAH MEDICAL TOURISM
 Premium JavaScript
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      Navbar Scroll Effect
    ==============================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /*==============================
      Mobile Menu
    ==============================*/

    const toggle = document.querySelector(".mobile-toggle");

    const menu = document.querySelector(".nav-menu");

    if (toggle) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("active");

            const icon = toggle.querySelector("i");

            icon.classList.toggle("fa-bars");

            icon.classList.toggle("fa-xmark");

        });

    }

    /*==============================
      Smooth Scroll
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*==============================
      Counter Animation
    ==============================*/

    const counters = document.querySelectorAll("[data-count]");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: .4

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    function animateCounter(counter) {

        const target = +counter.dataset.count;

        const suffix = counter.dataset.suffix || "";

        let current = 0;

        const increment = target / 120;

        function update() {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current) + suffix;

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + suffix;

            }

        }

        update();

    }

    /*==============================
      Reveal Animation
    ==============================*/

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    reveals.forEach(item => {

        revealObserver.observe(item);

    });

});

/* ==========================
   PAGE LOADER
========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1500);

});