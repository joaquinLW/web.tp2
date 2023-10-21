// Función para obtener usuarios desde la API y renderizar en el DOM
function fetchUsers(numUsers) {
  fetch(`https://randomuser.me/api/?results=${numUsers}`)
    .then((response) => response.json())
    .then((data) => {
      const userList = document.getElementById("user-list");
      userList.innerHTML = "";

      data.results.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

        userCard.innerHTML = `
            <div class="card" id="cardListado">
              <img src="${user.picture.large}" class="card-img-top" alt="User Image">
              <div class="card-body">
                <h5 class="card-title text-center">${user.name.first} ${user.name.last}</h5>
                <p class="card-text text-center">Email: ${user.email}</p>
                <p class="card-text text-center">Teléfono: ${user.phone}</p>
                <p class="card-text text-center">Celular: ${user.cell}</p>
              </div>
            </div>
          `;

        userList.appendChild(userCard);
      });
    })
    .catch((error) => console.error(error));
}

// Manejo del formulario para consultar usuarios
const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numUsers = document.getElementById("num-users").value;
  fetchUsers(numUsers);
});
