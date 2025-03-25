const searchInput = document.querySelector(".navbar-search input");
const cardTitles = document.querySelectorAll(".card-title");

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  const searchTerm = this.value.toLowerCase();
  cardTitles.forEach((title) => {
    const card = title.parentElement.parentElement;
    if (title.textContent.toLowerCase().includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
