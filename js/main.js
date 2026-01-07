/* =====================================================
   Kuachi Blog - Main JavaScript
   Author : Albert Natagama
   Version: Final (Stable)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    // Pastikan elemen ada (anti error)
    if (menuToggle && navMenu) {

        // Toggle menu
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        // Tutup menu saat link diklik (mobile UX)
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        // Tutup menu saat resize ke desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* =====================================================
       ACTIVE NAV LINK (AUTO DETECT)
    ====================================================== */
    const currentPath = window.location.pathname.split("/").pop();

    const allNavLinks = document.querySelectorAll(".nav-links a");
    allNavLinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    /* =====================================================
       SMOOTH SCROLL FOR ANCHOR LINKS
    ====================================================== */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            const targetId = anchor.getAttribute("href");

            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

});
