const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.collapse-button');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed'); // Toggle collapsed state
    sidebar.style.visibility = sidebar.classList.contains('collapsed') ? 'hidden' : 'visible';
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const btn = dropdown.querySelector(".dropdown-btn");
        btn.addEventListener("click", function (event) {
            // Prevent closing all dropdowns when opening one
            event.stopPropagation();

            // Close other dropdowns before opening the clicked one
            dropdowns.forEach((d) => {
                if (d !== dropdown) {
                    d.classList.remove("active");
                }
            });

            // Toggle active class on clicked dropdown
            dropdown.classList.toggle("active");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    });
});