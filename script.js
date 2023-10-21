// Array para almacenar los estudiantes
let students = [];

// Función para mostrar los estudiantes en la tabla
function displayStudents() {
  const studentList = document.getElementById("student-list");
  studentList.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.legajo}</td>
      <td>${student.apellidos}</td>
      <td>${student.nombres}</td>
      <td>${student.nota}</td>
      <td><button onclick="deleteStudent(${index})" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
    `;
    studentList.appendChild(row);
  });
}

// Función para agregar un estudiante
function addStudent(legajo, apellidos, nombres, nota) {
  const student = { legajo, apellidos, nombres, nota };
  students.push(student);
  displayStudents();
}

// Función para eliminar un estudiante
function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

// Manejo del formulario de alta de estudiantes
const addStudentForm = document.getElementById("add-student-form");
addStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const legajo = document.getElementById("legajo").value;
  const apellidos = document.getElementById("apellidos").value;
  const nombres = document.getElementById("nombres").value;
  const nota = document.getElementById("nota").value;
  addStudent(legajo, apellidos, nombres, nota);
  addStudentForm.reset();
});

// Cargar estudiantes iniciales
addStudent("001", "Pérez", "Juan", 90);
addStudent("002", "Gómez", "Maria", 85);
addStudent("003", "López", "Carlos", 78);
displayStudents();
