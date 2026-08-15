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

    const target = Number(counter.dataset.count);
    const suffix = counter.dataset.suffix || "";

    const duration = 1800;
    const startTime = performance.now();

    function update(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(
            elapsed / duration,
            1
        );

        /* Smooth ease-out */
        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        const currentValue =
            Math.floor(
                target * easedProgress
            );

        counter.innerText =
            currentValue.toLocaleString("en-US") +
            suffix;

        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            counter.innerText =
                target.toLocaleString("en-US") +
                suffix;
        }
    }

    requestAnimationFrame(update);
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