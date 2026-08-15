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
   SMOOTH PAGE TRANSITIONS
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const pageTransition =
        document.querySelector(".page-transition");

    if (!pageTransition) {
        return;
    }

    document.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            /*
             * Ignore links that should not trigger
             * a page transition.
             */

            if (!href) {
                return;
            }

            if (
                href.startsWith("#") ||
                href.startsWith("http://") ||
                href.startsWith("https://") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                this.target === "_blank"
            ) {
                return;
            }

            /*
             * Ignore modified clicks
             * such as Ctrl + Click.
             */

            if (
                e.ctrlKey ||
                e.shiftKey ||
                e.metaKey ||
                e.altKey
            ) {
                return;
            }

            e.preventDefault();

            pageTransition.classList.add("active");

            setTimeout(() => {

                window.location.href = href;

            }, 450);

        });

    });

});

/* ==========================
   PAGE LOADER
========================== */

/* ==========================
   PAGE LOADER + TRANSITIONS
========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (!loader) {
        return;
    }

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1500);

});


/* ==========================
   INTERNAL PAGE TRANSITION
========================== */

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");

    if (!loader) {
        return;
    }

    document.querySelectorAll("a[href]").forEach(function (link) {

        link.addEventListener("click", function (event) {

            const href = link.getAttribute("href");

            if (!href) {
                return;
            }

            /*
             * Don't interfere with:
             * - same-page anchors
             * - WhatsApp
             * - external websites
             * - email
             * - telephone links
             * - new tabs
             */

            if (
                href.startsWith("#") ||
                href.startsWith("http://") ||
                href.startsWith("https://") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                link.target === "_blank"
            ) {
                return;
            }

            /*
             * Don't interfere with modified clicks.
             */

            if (
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                event.metaKey
            ) {
                return;
            }

            event.preventDefault();

            /*
             * Show your EXISTING loader.
             */

            loader.classList.add("page-exit");

            /*
             * Give the loader time to appear
             * before changing the page.
             */

            setTimeout(function () {

                window.location.href = href;

            }, 500);

        });

    });

});