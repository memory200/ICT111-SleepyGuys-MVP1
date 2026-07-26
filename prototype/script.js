// Initial Mock Data
const initialItems = [
    { id: "ITEM-101", name: "Sony Headphones", category: "Electronics", location: "Main Library", description: "Black noise-canceling headphones", contact: "sec@campus.edu", status: "Pending" },
    { id: "ITEM-102", name: "Campus ID Card", category: "Documents/Cards", location: "Student Cafeteria", description: "Student ID under John Doe", contact: "sec@campus.edu", status: "Claimed" }
];

// Load items from LocalStorage or initialize with default
let items = JSON.parse(localStorage.getItem("campus_items")) || initialItems;

document.addEventListener("DOMContentLoaded", () => {
    saveAndRefresh();
});

function saveAndRefresh() {
    localStorage.setItem("campus_items", JSON.stringify(items));
    renderRecords(items);
    renderAdminTable();
}

// Section Switcher
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden-section"));
    document.getElementById(`${sectionId}-section`).classList.remove("hidden-section");
}

// Form Submit Handler
function handleFormSubmit(e) {
    e.preventDefault();
    const newItem = {
        id: "ITEM-" + Math.floor(100 + Math.random() * 900),
        name: document.getElementById("itemName").value,
        category: document.getElementById("category").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value,
        contact: document.getElementById("contact").value,
        status: "Pending"
    };
    items.push(newItem);
    saveAndRefresh();
    alert("Item reported successfully!");
    document.getElementById("itemForm").reset();
    showSection("records");
}

// Render Browse List
function renderRecords(data) {
    const list = document.getElementById("itemList");
    list.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><span class="badge ${item.status === 'Claimed' ? 'badge-claimed' : 'badge-pending'}">${item.status}</span></p>
            <button class="btn btn-secondary" onclick="viewDetails('${item.id}')">View Details</button>
        `;
        list.appendChild(card);
    });
}

// Filter Items
function filterItems() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const cat = document.getElementById("categoryFilter").value;
    const filtered = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search);
        const matchesCat = cat === "All" || item.category === cat;
        return matchesSearch && matchesCat;
    });
    renderRecords(filtered);
}

// Modal View Details
function viewDetails(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    document.getElementById("modalTitle").innerText = item.name;
    document.getElementById("modalCategory").innerText = item.category;
    document.getElementById("modalLocation").innerText = item.location;
    document.getElementById("modalDescription").innerText = item.description;
    document.getElementById("modalStatus").innerText = item.status;
    document.getElementById("modalContact").innerText = item.contact;
    document.getElementById("detailModal").style.display = "block";
}

function closeModal() {
    document.getElementById("detailModal").style.display = "none";
}

// Admin Table & Status Toggle (FR-3.2)
function renderAdminTable() {
    const tbody = document.getElementById("adminTableBody");
    tbody.innerHTML = "";
    items.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.location}</td>
            <td><span class="badge ${item.status === 'Claimed' ? 'badge-claimed' : 'badge-pending'}">${item.status}</span></td>
            <td>
                <button class="btn btn-primary" onclick="toggleStatus('${item.id}')">
                    Mark as ${item.status === 'Pending' ? 'Claimed' : 'Pending'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleStatus(id) {
    const item = items.find(i => i.id === id);
    if (item) {
        item.status = item.status === "Pending" ? "Claimed" : "Pending";
        saveAndRefresh();
    }
}
