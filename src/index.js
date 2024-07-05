import _ from 'lodash';
import './style.css';       // Importa los estilos CSS
import TodoList from './todoList';  // Importa la clase TodoList

const todoList = new TodoList();  // Crea una nueva instancia de TodoList

// Añade un evento al formulario para agregar nuevas tareas
const form = document.getElementById('todo-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();  // Evita el envío del formulario

  // Obtiene los valores de los campos del formulario
  const title = event.target.elements['title'].value;
  const description = event.target.elements['description'].value;
  const dueDate = event.target.elements['due-date'].value;
  const priority = event.target.elements['priority'].value;

  // Añade una nueva tarea a la lista
  todoList.addTodo(title, description, dueDate, priority);
  displayTodos();  // Actualiza la visualización de las tareas
});

// Función para mostrar las tareas en el DOM
function displayTodos() {
  const todosContainer = document.getElementById('todos-container');
  todosContainer.innerHTML = '';  // Limpia el contenedor de tareas

  // Recorre todas las tareas y las muestra en el DOM
  todoList.getTodos().forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p>Due Date: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <button onclick="toggleCompleted(${index})">
        ${todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onclick="removeTodo(${index})">Remove</button>
    `;

    todosContainer.appendChild(todoItem);
  });
}

// Funciones globales para marcar tareas como completadas o eliminarlas
window.toggleCompleted = (index) => {
  todoList.todos[index].toggleCompleted();
  displayTodos();
};

window.removeTodo = (index) => {
  todoList.removeTodo(index);
  displayTodos();
};

// Inicializa la visualización de tareas
displayTodos();

