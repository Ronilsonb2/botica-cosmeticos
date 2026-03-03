const stores = [
  {
    id: 1,
    name: "Magazine Luiza",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 2,
    name: "Amazon",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 3,
    name: "Casas Bahia",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 4,
    name: "Shopee",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 5,
    name: "Americanas",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 6,
    name: "Submarino",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 7,
    name: "Ponto",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 8,
    name: "Kabum",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 9,
    name: "Netshoes",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 10,
    name: "Carrefour",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 11,
    name: "Extra",
    image: "./assets//img/lojas-parceiras.png"
  },
  {
    id: 12,
    name: "Dafiti",
    image: "./assets//img/lojas-parceiras.png"
  }
];

const pesquisarLoja = document.getElementById("pesquisar-loja");
const carregarMais = document.querySelector(".cta-carregar-mais");
const lojasParceiras = document.querySelector(".lojas-parceiras");

let visibleCount = 8;
let filteredStores = [...stores]; // começa com todas

const cont = filteredStores.length - visibleCount;

// Função única de renderização
function renderStores() {
  lojasParceiras.innerHTML = "";

  const storesToShow = filteredStores.slice(0, visibleCount);

  storesToShow.forEach(loja => {
    const lojaHTML = `
      <div class="loja" data-name="${loja.name}">
        <img class="img img-fluid" src="${loja.image}" alt="${loja.name}">
      </div>
    `;

    lojasParceiras.innerHTML += lojaHTML;
  });

  // Esconde botão se não houver mais lojas
  if (visibleCount >= filteredStores.length) {
    carregarMais.style.display = "none";
  } else {
    carregarMais.style.display = "block";
  }
}

// Mostrar mais
carregarMais.addEventListener("click", () => {
  visibleCount += cont;
  renderStores();
});

// Filtro em tempo real
pesquisarLoja.addEventListener("input", () => {
  const value = pesquisarLoja.value.toLowerCase().trim();

  visibleCount = 8;

  filteredStores = stores.filter(loja =>
    loja.name.toLowerCase().includes(value)
  );

  renderStores();
});

// Inicial
renderStores();



window.onload = function() {
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname);
        window.scrollTo(0, 0);
    }
};