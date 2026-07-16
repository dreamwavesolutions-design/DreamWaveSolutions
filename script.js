const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        let target = link.dataset.section;

        if (target === current) {

            link.classList.add("active");

        }

    });

});



const revealElements = document.querySelectorAll(
    "section, .card, .project-card, .process-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const children = entry.target.querySelectorAll(
                ".card, .project-card, .process-card"
            );

            children.forEach((child, index) => {

                child.style.transitionDelay = `${index*120}ms`;

                child.classList.add("active");

            });

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: .15
});


revealElements.forEach(el => {

    el.classList.add("reveal");

    revealObserver.observe(el);

});


const counters = document.querySelectorAll('.count');

const startCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const speed = target / 60;

    const update = () => {
        count += speed;

        if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };

    update();
};


document.querySelectorAll("a,.btn,.card").forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.style.width = "24px";
        cursor.style.height = "24px";

    });

    el.addEventListener("mouseleave", () => {

        cursor.style.width = "10px";
        cursor.style.height = "10px";

    });

});
document.querySelectorAll("a, .btn, .card, .project-card").forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.style.width = "24px";
        cursor.style.height = "24px";

        glow.style.width = "650px";
        glow.style.height = "650px";
        glow.style.opacity = ".35";

    });

    el.addEventListener("mouseleave", () => {

        cursor.style.width = "10px";
        cursor.style.height = "10px";

        glow.style.width = "450px";
        glow.style.height = "450px";
        glow.style.opacity = ".18";

    });

});
const glow = document.querySelector(".cursor-glow");
const cursor = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    // Small cursor
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    // Big glow
    glow.style.left = x + "px";
    glow.style.top = y + "px";

});

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent = (scrollTop / docHeight) * 100;

    progress.style.width = percent + "%";

});

card.addEventListener("mouseleave", () => {

    card.style.transition = "transform .4s ease";

    card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    setTimeout(() => {

        card.style.transition = "";

    }, 400);

});

const magneticButtons = document.querySelectorAll(".btn");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.18;

        const moveY = (y - rect.height / 2) * 0.18;

        button.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    nav.classList.toggle("scrolled", window.scrollY > 40);

});

const counterobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCount(entry.target);
            counterobserver.unobserve(entry.target);
        }
    });
});

counters.forEach(counter => counterobserver.observe(counter));
