/* =========================================
   OTANSA PORTFOLIO FILTER
========================================= */

const portfolioFilters =
    document.querySelectorAll(".portfolio-filter");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");


portfolioFilters.forEach(filter => {

    filter.addEventListener("click", () => {

        const category =
            filter.getAttribute("data-filter");


        /* Active button */

        portfolioFilters.forEach(button => {

            button.classList.remove("active");

        });

        filter.classList.add("active");


        /* Filter projects */

        portfolioItems.forEach(item => {

            const itemCategory =
                item.getAttribute("data-category");


            if (
                category === "all" ||
                category === itemCategory
            ) {

                item.style.display = "";

                requestAnimationFrame(() => {

                    item.style.opacity = "1";

                    item.style.transform =
                        "translateY(0)";

                });

            } else {

                item.style.opacity = "0";

                item.style.transform =
                    "translateY(10px)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 180);

            }

        });

    });

});/* =========================================
   PROJECT ENQUIRY → WHATSAPP
========================================= */

const projectForm =
    document.getElementById("projectForm");


if (projectForm) {

    projectForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        const whatsappMessage =
`Hello OTANSA DIGITAL CREATIONS 👋🏾

I would like to start a project.

Name: ${name}
Phone/WhatsApp: ${phone}
Email: ${email || "Not provided"}
Service: ${service}

Project details:
${message}

Thank you.`;


        const whatsappURL =
            "https://wa.me/233541393132?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("active");

        menuToggle.classList.toggle(
            "active",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after clicking a link */

    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}