// Función para buscar y mostrar shows de TV desde la API
function searchTVShows(query) {
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const showList = document.getElementById("show-list");
      showList.innerHTML = "";

      data.forEach((result) => {
        const show = result.show;
        const showCard = document.createElement("div");
        showCard.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2";

        showCard.innerHTML = `
            <div class="card" id="cardShow">
              <img src="${
                show.image ? show.image.medium : "placeholder-image.jpg"
              }" class="card-img-top" alt="Show Image">
              <div class="card-body">
                <h5 class="card-title text-center">${show.name}</h5>
                <p class="card-text">Resumen: ${show.summary}</p>
                <p class="card-text">Tipo: ${show.type}</p>
                <p class="card-text">Idioma: ${show.language}</p>
                <p class="card-text">Géneros: ${show.genres.join(", ")}</p>
                <p class="card-text">Estado: ${show.status}</p>      
              </div>
            </div>
          `;

        showList.appendChild(showCard);
      });
    })
    .catch((error) => console.error(error));
}

// Manejo del formulario de búsqueda
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = document.getElementById("search-query").value;
  searchTVShows(query);
});
