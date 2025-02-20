document.addEventListener("DOMContentLoaded", function () {
    // Expanded Menu Data (More Pages)
    const services = [
        [
            { name: "Regular Pedicure", price: "$35" },
            { name: "Spa Pedicure", price: "$45" },
            { name: "Deluxe Pedicure", price: "$55" },
            { name: "Nails Pro Special Pedi", price: "$65" }
        ],
        [
            { name: "Regular Manicure", price: "$25" },
            { name: "Gel Manicure", price: "$40" },
            { name: "Dipping Powder", price: "$45" },
            { name: "Ombre Dip", price: "$60" }
        ],
        [
            { name: "French Dip (Pink&White)", price: "$50" },
            { name: "Acrylic Full Set", price: "$55" },
            { name: "Acrylic Fill", price: "$40" },
            { name: "Acrylic Pink & White Full Set", price: "$65" }
        ],
        [
            { name: "Gel-X Full Set", price: "$75" },
            { name: "SNS Dipping Powder", price: "$50" },
            { name: "Classic Nail Art", price: "$20" },
            { name: "Luxury Spa Pedicure", price: "$70" }
        ],
        [
            { name: "Paraffin Wax Treatment", price: "$30" },
            { name: "Callus Removal", price: "$15" },
            { name: "Massage & Exfoliation", price: "$50" },
            { name: "Premium Nail Care Package", price: "$90" }
        ]
    ];

    let currentPage = 0;

    // Function to Load Menu Items
    function loadMenu(page) {
        const menuList = document.getElementById("menu-items");
        if (!menuList) {
            console.error("Menu container not found!");
            return;
        }
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
        if (!pageNumbers) {
            console.error("Pagination container not found!");
            return;
        }
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
    }

    // Event Listeners for Looping Pagination
    document.getElementById("prev").addEventListener("click", () => {
        currentPage = (currentPage === 0) ? services.length - 1 : currentPage - 1; // Loop back to last page
        loadMenu(currentPage);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentPage = (currentPage === services.length - 1) ? 0 : currentPage + 1; // Loop back to first page
        loadMenu(currentPage);
    });

    // Load the First Page by Default
    loadMenu(currentPage);
});


