import Todo from "./todo";

export default class Todolist{
  constructor(){
    this.todos = [];
  };
  addTodo(title, description, dueDate, priority) {
    const newTodo = new Todo(title, description, dueDate, priority);
    this.todos.push(newTodo);
  };
  // Método para eliminar una tarea por su índice
  removeTodo(index) {
    this.todos.splice(index, 1);
  };

  // Método para obtener todas las tareas
  getTodos() {
    return this.todos;
  };
}