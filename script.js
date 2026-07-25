// ===============================
// TRANSFER SERVICE ADMIN
// PAPARAN SAHAJA
// ===============================


// TARIKH SEMASA
const dateElement = document.getElementById("date");

const today = new Date();

dateElement.textContent = today.toLocaleDateString("ms-MY", {
  day: "numeric",
  month: "short",
  year: "numeric"
});


// ===============================
// TUKAR PAGE
// ===============================

function showPage(pageName) {

  const pages = document.querySelectorAll(".page");
  const menus = document.querySelectorAll(".menu");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  menus.forEach(menu => {
    menu.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageName);

  if (selectedPage) {
    selectedPage.classList.add("active-page");
  }

  const pageTitles = {
    dashboard: "Dashboard",
    services: "Transfer Service",
    transactions: "Transaksi",
    banks: "Bank Malaysia",
    settings: "Tetapan"
  };

  document.getElementById("pageTitle").textContent =
    pageTitles[pageName] || "Dashboard";

  const menu = [...menus].find(item =>
    item.getAttribute("onclick")?.includes(pageName)
  );

  if (menu) {
    menu.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ===============================
// FILTER TRANSAKSI
// ===============================

function filterTransactions() {

  const filter =
    document.getElementById("filter").value;

  const rows =
    document.querySelectorAll("#transactionTable tbody tr");

  rows.forEach(row => {

    const status =
      row.getAttribute("data-status");

    if (filter === "all" || status === filter) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

  });

}


// ===============================
// SIMPAN TETAPAN
// ===============================

function saveSettings() {

  const message =
    document.getElementById("saveMessage");

  message.textContent =
    "✓ Tetapan berjaya disimpan untuk paparan.";

  setTimeout(() => {
    message.textContent = "";
  }, 3000);

}


// ===============================
// MENU CLICK EFFECT
// ===============================

document.querySelectorAll(".menu").forEach(menu => {

  menu.addEventListener("click", () => {

    document.querySelectorAll(".menu").forEach(item => {
      item.classList.remove("active");
    });

    menu.classList.add("active");

  });

});
