const seriesArray = [
  {
    image: "series/bb.jpg",
    name: "Breaking Bad",
    description:
      "A série conta a história de Walter White, um professor de química que se torna um poderoso fabricante de metanfetamina.",
  },
  {
    image: "series/lacasa.jpg",
    name: "La Casa de Papel",
    description:
      "Um grupo de ladrões invade a Casa da Moeda da Espanha e realiza o maior assalto da história, enquanto enfrenta desafios internos e externos.",
  },
  {
    image: "series/ben10.jpg",
    name: "Ben 10",
    description:
      "Ben Tennyson encontra um relógio alienígena que lhe dá a capacidade de se transformar em diversos seres extraterrestres.",
  },
  {
    image: "series/NARUTO.jpg",
    name: "Naruto",
    description:
      "Naruto Uzumaki, um jovem ninja, busca reconhecimento e sonha em se tornar o Hokage, o líder da sua vila.",
  },
  {
    image: "series/rd6.jpg",
    name: "Round 6 (Squid Game)",
    description:
      "Um grupo de pessoas endividadas participa de uma série de jogos infantis mortais em busca de um grande prêmio em dinheiro.",
  },
  {
    image: "series/twd.jpg",
    name: "The Walking Dead",
    description:
      "Um grupo de sobreviventes luta para se manter vivo em um mundo pós-apocalíptico infestado por zumbis.",
  },
  {
    image: "series/marcos.jpg",
    name: "Marcos",
    description:
      "A série fictícia sobre a vida de uma família tradicional em meio a conflitos e superações.",
  },
  {
    image: "series/wandinha.jpg",
    name: "Wandinha",
    description:
      "Uma série derivada de 'A Família Addams', centrada na personagem Wandinha e suas aventuras sombrias.",
  },
  {
    image: "series/stranger.jpg",
    name: "Stranger Things",
    description:
      "Um grupo de crianças na cidade de Hawkins enfrenta forças sobrenaturais e conspirações governamentais.",
  },
  {
    image: "series/onepice.jpg",
    name: "One Piece",
    description:
      "Monkey D. Luffy e sua tripulação de piratas buscam o lendário tesouro One Piece para se tornarem os reis dos piratas.",
  },
];

const favArray = [];

function carregarSeries() {
  const container = document.getElementById("container--series");
  for (const serie of seriesArray) {
    const card = document.createElement("article");
    card.classList.add("series--card");
    card.innerHTML = `<img class="card--img" src="${serie.image}" alt="Imagem da série ${serie.name}">
    <div class="card--conteudo">
      <h3 class="card--titulo">${serie.name} <i class="fa-regular fa-heart"></i></h3>
      <p class="card--desc">${serie.description}</p>
      <button class="btn--primario">Veja agora</button>
    </div>`;
    container.prepend(card);
    adicionarEventos();
  }
}

function adicionarEventos() {
  const favs = document.querySelectorAll(".fa-heart");
  for (const fav of favs) {
    fav.addEventListener("click", adicionarFavorito);
  }
}

function adicionarFavorito(e) {
  const origem = e.target;
  origem.classList.toggle("favoritado");
  const card = origem.closest(".series--card");
  const imagem = card.querySelector(".card--img").getAttribute("src");

  const idx = favArray.indexOf(imagem);
  idx <= -1 ? favArray.unshift(imagem) : favArray.splice(idx, 1);
  carregarFavoritos();
}

function abrirFavoritos(e) {
  e.target.parentElement.classList.toggle("aberto");
}

function carregarFavoritos() {
  const container = document.getElementById("favoritos");
  container.innerHTML = "";
  for (const serie of favArray) {
    const el = document.createElement("img");
    el.setAttribute("src", serie);
    container.append(el);
  }
}

carregarSeries();
document
  .getElementById("menu--favoritos")
  .addEventListener("click", abrirFavoritos);
