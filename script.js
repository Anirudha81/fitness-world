let currentIndex = 0;
const plansContainer = document.querySelector(".plans-container");
const totalPlans = document.querySelectorAll(".plan").length;

// Function to update the slider position
const updateSlider = () => {
    const offset = currentIndex * -100; // Move to the selected plan
    plansContainer.style.transform = `translateX(${offset}%)`;
};


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});






const rows = document.querySelectorAll(".slider-row");

function resetAnimation() {
    rows.forEach((row) => {
        row.style.animation = "none";
        row.offsetHeight; // Trigger reflow to reset animation
        row.style.animation = row.classList.contains("reverse")
            ? "slide-right 15s linear infinite"
            : "slide-left 15s linear infinite";
    });
}

window.addEventListener("resize", resetAnimation);


// Toggle FAQ answer visibility
document.querySelectorAll(".faq-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const faqItem = toggle.parentElement;

        // Toggle the active class
        faqItem.classList.toggle("active");

        // Close other open FAQs
        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove("active");
            }
        });
    });
});




// Optional: Pause slider on hover
const sliderRows = document.querySelectorAll(".slider-row");

sliderRows.forEach(row => {
    row.addEventListener("mouseover", () => {
        row.style.animationPlayState = "paused";
    });

    row.addEventListener("mouseout", () => {
        row.style.animationPlayState = "running";
    });
});




// Register Form Validation
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration successful!");
    window.location.href = "login.html"; // Redirect to login page
});

// Login Form Validation
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Login successful!");
    // Implement actual login logic here
});




