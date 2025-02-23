document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const dropdown = document.getElementById("menu-dropdown");
    dropdown.classList.toggle("hidden");
}

// Optional: Close the dropdown when clicking outside
document.addEventListener("click", (event) => {
    const dropdown = document.getElementById("menu-dropdown");
    const personIcon = document.querySelector(".person-icon");
    if (!dropdown.contains(event.target) && !personIcon.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});
