// Sample Menu Data (Each Page Shows Different Items)
const services = [
    [
        { name: "Regular Pedicure", price: "$35", description: "Menu description." },
        { name: "Spa Pedicure", price: "$45", description: "Menu description." },
        { name: "Deluxe Pedicure", price: "$55", description: "Menu description." },
        { name: "Nails Pro Special Pedi", price: "$65", description: "Menu description." }
    ],
    [
        { name: "Manicure", price: "$25", description: "Menu description." },
        { name: "Gel Polish", price: "$40", description: "Menu description." },
        { name: "Acrylic Full Set", price: "$50", description: "Menu description." },
        { name: "French Tips", price: "$30", description: "Menu description." }
    ],
    [
        { name: "Nail Art", price: "$15", description: "Menu description." },
        { name: "Callus Removal", price: "$10", description: "Menu description." },
        { name: "Paraffin Treatment", price: "$20", description: "Menu description." },
        { name: "Dip Powder", price: "$45", description: "Menu description." }
    ]
];

let currentPage = 0;

// Function to Load Menu Items
function loadMenu(page) {
    const menuList = document.getElementById("menu-items");
    menuList.innerHTML = ""; // Clear existing items

    services[page].forEach(service => {
        const li = document.createElement("li");
        li.innerHTML = `<span>⭐ ${service.name}</span> <span>${service.price}</span>`;
        menuList.appendChild(li);
    });

    updatePagination();
}

// Function to Update Pagination
function updatePagination() {
    const pageNumbers = document.getElementById("page-numbers");
    pageNumbers.innerHTML = "";

    services.forEach((_, index) => {
        const span = document.createElement("span");
        span.classList.add("page-number");
        if (index === currentPage) span.classList.add("active");
        span.textContent = index + 1;
        span.onclick = () => {
            currentPage = index;
            loadMenu(index);
        };
        pageNumbers.appendChild(span);
    });

    document.getElementById("prev").style.color = currentPage === 0 ? "#ccc" : "#000";
    document.getElementById("next").style.color = currentPage === services.length - 1 ? "#ccc" : "#000";
}

// Event Listeners for Pagination
document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        loadMenu(currentPage);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < services.length - 1) {
        currentPage++;
        loadMenu(currentPage);
    }
});

// Load the First Page by Default
loadMenu(currentPage);
