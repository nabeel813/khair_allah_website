/* =========================================================
   KHAIR ALLAH — CINEMATIC HERO
   Phase 7 / Step 52
   ========================================================= */

(function () {
    "use strict";

    const initHero = () => {
        const hero = document.querySelector(".hero");

        if (!hero) {
            return;
        }

        const background = hero.querySelector(".hero-background-image");
        const content = hero.querySelector(".hero-content");
        const heading = hero.querySelector(".cinematic-heading");
        const lights = hero.querySelectorAll(".hero-light");

        if (!background || !content) {
            return;
        }

        /* -------------------------------------------------
           REDUCED MOTION
           ------------------------------------------------- */

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            hero.classList.add("reduced-motion");
            return;
        }


        /* -------------------------------------------------
           DEVICE DETECTION
           ------------------------------------------------- */

        const isMobile = window.matchMedia(
            "(max-width: 768px)"
        ).matches;


        /* -------------------------------------------------
           HERO ENTRANCE
           ------------------------------------------------- */

        requestAnimationFrame(() => {
            hero.classList.add("hero-ready");
        });


        /* -------------------------------------------------
           DESKTOP MOUSE DEPTH
           ------------------------------------------------- */

        if (!isMobile) {

            let mouseX = 0;
            let mouseY = 0;

            let currentX = 0;
            let currentY = 0;

            const updateMouse = (event) => {

                const rect = hero.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width;

                const y =
                    (event.clientY - rect.top) /
                    rect.height;

                mouseX = (x - 0.5) * 2;
                mouseY = (y - 0.5) * 2;
            };


            hero.addEventListener(
                "mousemove",
                updateMouse,
                { passive: true }
            );


            /* ---------------------------------------------
               SMOOTH PARALLAX LOOP
               --------------------------------------------- */

            const animateDepth = () => {

                currentX +=
                    (mouseX - currentX) * 0.035;

                currentY +=
                    (mouseY - currentY) * 0.035;


                /*
                 * Background movement
                 */

                background.style.transform =
                    `scale(1.08)
                     translate3d(
                        ${currentX * -10}px,
                        ${currentY * -7}px,
                        0
                     )`;


                /*
                 * Content movement
                 */

                if (heading) {

                    heading.style.transform =
                        `translate3d(
                            ${currentX * 3}px,
                            ${currentY * 2}px,
                            0
                        )`;
                }


                /*
                 * Decorative lights
                 */

                lights.forEach((light, index) => {

                    const multiplier =
                        index === 0 ? 10 : -7;

                    light.style.transform =
                        `translate3d(
                            ${currentX * multiplier}px,
                            ${currentY * multiplier}px,
                            0
                        )`;
                });


                requestAnimationFrame(
                    animateDepth
                );
            };


            animateDepth();
        }


        /* -------------------------------------------------
           MOBILE RESET
           ------------------------------------------------- */

        if (isMobile) {

            background.style.transform =
                "scale(1.08)";

        }


        /* -------------------------------------------------
           HERO EXIT ON SCROLL
           ------------------------------------------------- */

        let ticking = false;

        const handleScroll = () => {

            if (ticking) {
                return;
            }

            ticking = true;

            requestAnimationFrame(() => {

                const scrollY =
                    window.scrollY || 0;

                const heroHeight =
                    hero.offsetHeight;

                if (scrollY <= heroHeight) {

                    const progress =
                        Math.min(
                            scrollY /
                            heroHeight,
                            1
                        );


                    /*
                     * Background depth
                     */

                    if (isMobile) {

                        background.style.transform =
                            `scale(1.08)
                             translateY(
                                ${progress * 12}px
                             )`;

                    }


                    /*
                     * Content fades very slightly
                     */

                    const fade =
                        Math.max(
                            1 - progress * 1.4,
                            0
                        );

                    content.style.opacity =
                        fade;
                }

                ticking = false;
            });
        };


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        /* -------------------------------------------------
           CLEANUP WHEN PAGE IS LEFT
           ------------------------------------------------- */

        window.addEventListener(
            "pagehide",
            () => {

                if (background) {
                    background.style.transform = "";
                }

                if (heading) {
                    heading.style.transform = "";
                }

                content.style.opacity = "";
            }
        );
    };


    /* -----------------------------------------------------
       INITIALIZE
       ----------------------------------------------------- */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initHero
        );

    } else {

        initHero();

    }

    /* =========================================================
   IMAGE PARALLAX
   ========================================================= */



})();