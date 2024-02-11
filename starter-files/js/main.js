const rowForCards = document.querySelector(".rowForCards");
const filterParagraphs = document.querySelectorAll(".filter-p");
const numberSpans = document.querySelectorAll(".number");

let productsData;
let filteredData = [];

async function fetchProducts() {
  const apiUrl = "https://challenges.brainster.tech/ajax_data/data.json";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && Array.isArray(data.products)) {
      productsData = data.products;
      filteredData = [...productsData];
      redeCards();
    } else {
      console.error("Invalid API response:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function redeCards(filter = null) {
  rowForCards.innerHTML = "";

  productsData.forEach((product) => {
    if (
      !filter ||
      (filter.toLowerCase() === "male" &&
        product.gender &&
        product.gender.toLowerCase() === "male") ||
      (filter.toLowerCase() === "female" &&
        product.gender &&
        product.gender.toLowerCase() === "female") ||
      (filter === "LE GRAND BIKES" && product.brand === "LE GRAND BIKES") ||
      (filter === "KROSS" && product.brand === "KROSS") ||
      (filter === "EXPLORER" && product.brand === "EXPLORER") ||
      (filter === "VISITOR" && product.brand === "VISITOR") ||
      (filter === "PONY" && product.brand === "PONY") ||
      (filter === "FORCE" && product.brand === "FORCE") ||
      (filter === "E-BIKES" && product.brand === "E-BIKES") ||
      (filter === "IDEAL" && product.brand === "IDEAL")
    ) {
      const col4 = document.createElement("div");
      col4.classList.add("col-4", "mb-4");
      const card = document.createElement("div");
      card.classList.add("card", "h-100");
      const image = document.createElement("img");
      image.classList.add("card-img-top", "img-fluid");
      image.src = `./img/${product.image}.png`;
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      const title = document.createElement("h6");
      title.classList.add("card-title");
      title.textContent = product.name;
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = product.price + " " + "$";

      cardBody.appendChild(title);
      cardBody.appendChild(cardText);
      card.appendChild(image);
      card.appendChild(cardBody);
      col4.appendChild(card);
      rowForCards.appendChild(col4);
    }
  });
  updateFilterBadges();
  updateGenderFilterBadges();
  allCards();
}

fetchProducts();

const showAllButton = document.querySelector("#showAll");
showAllButton.addEventListener("click", () => {
  addAndRemoveClasses(showAllButton);
  redeCards();
});

const maleButton = document.querySelector("#male");
maleButton.addEventListener("click", () => {
  addAndRemoveClasses(maleButton);
  redeCards("male");
});

const femaleButton = document.querySelector("#female");
femaleButton.addEventListener("click", () => {
  addAndRemoveClasses(femaleButton);
  redeCards("female");
});

const leGrandBikesButton = document.querySelector("#leGrandBikes");
leGrandBikesButton.addEventListener("click", () => {
  addAndRemoveClasses(leGrandBikesButton);
  redeCards("LE GRAND BIKES");
});

const krosButton = document.querySelector("#kros");
krosButton.addEventListener("click", () => {
  addAndRemoveClasses(krosButton);
  redeCards("KROSS");
});

const explorerButton = document.querySelector("#explorer");
explorerButton.addEventListener("click", () => {
  addAndRemoveClasses(explorerButton);
  redeCards("EXPLORER");
});

const visitorsButton = document.querySelector("#visitors");
visitorsButton.addEventListener("click", () => {
  addAndRemoveClasses(visitorsButton);
  redeCards("VISITOR");
});

const ponyButton = document.querySelector("#pony");
ponyButton.addEventListener("click", () => {
  addAndRemoveClasses(ponyButton);
  redeCards("PONY");
});

const forceButton = document.querySelector("#force");
forceButton.addEventListener("click", () => {
  addAndRemoveClasses(forceButton);
  redeCards("FORCE");
});

const eBikesButton = document.querySelector("#e-bikes");
eBikesButton.addEventListener("click", () => {
  addAndRemoveClasses(eBikesButton);
  redeCards("E-BIKES");
});

const idealButton = document.querySelector("#ideal");
idealButton.addEventListener("click", () => {
  addAndRemoveClasses(idealButton);
  redeCards("IDEAL");
});

function addAndRemoveClasses(btn) {
  filterParagraphs.forEach((paragraph) => {
    paragraph.querySelector("span").classList.remove("bold");
  });
  numberSpans.forEach((numberSpan) => {
    numberSpan.classList.remove("bg-orange");
    btn.querySelector(".filter-p span").classList.add("bold");
    const currentNumberSpan = btn.querySelector(".number");
    if (currentNumberSpan) {
      currentNumberSpan.classList.add("bg-orange");
    }
  });
}

function updateFilterBadges() {
  numberSpans.forEach((numberSpan) => {
    const filterValue = numberSpan.previousElementSibling.textContent;
    const filteredCount = filteredData.filter(
      (product) => product.brand === filterValue
    ).length;

    numberSpan.textContent = filteredCount;
  });
}

function updateGenderFilterBadges() {
  const maleCount = filteredData.filter(
    (product) => product.gender && product.gender.toLowerCase() === "male"
  ).length;

  const femaleCount = filteredData.filter(
    (product) => product.gender && product.gender.toLowerCase() === "female"
  ).length;

  document.querySelector("#male .number").textContent = maleCount;
  document.querySelector("#female .number").textContent = femaleCount;
}

function allCards() {
  const cardCount = filteredData.length;
  const cardCountElement = document.querySelector("#showAll>.number");
  if (cardCountElement) {
    cardCountElement.textContent = cardCount;
  }
}
