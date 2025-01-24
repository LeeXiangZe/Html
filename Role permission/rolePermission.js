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

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    dir = "asc"; // Default sorting direction

    // Reset all sort indicators in headers
    const headers = table.getElementsByTagName("TH");
    for (let header of headers) {
        const span = header.querySelector(".sort");
        if (span) {
            span.innerHTML = ""; // Clear sort symbol
        }
    }

    // Add the sort indicator to the active header
    const activeHeader = headers[n];
    const activeSpan = activeHeader.querySelector(".sort") || document.createElement("span");
    activeSpan.classList.add("sort-symbol");
    if (!activeHeader.contains(activeSpan)) {
        activeHeader.appendChild(activeSpan);
    }

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            // Check if column is 'Permission' (index 1) to extract <select> value
            let xValue = (n === 1) ? x.querySelector("select").value.toLowerCase() : x.innerText.toLowerCase();
            let yValue = (n === 1) ? y.querySelector("select").value.toLowerCase() : y.innerText.toLowerCase();

            if (dir === "asc") {
                if (xValue > yValue) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (xValue < yValue) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }

    // Update sort indicator
    activeSpan.innerHTML = dir === "asc" ? " &#x25B4;" : " &#x25BE;";
}
