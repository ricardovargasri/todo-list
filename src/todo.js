export default class Todo {
  constructor(){
    this.title = title;          // Título de la tarea
    this.description = description;  // Descripción de la tarea
    this.dueDate = dueDate;      // Fecha de vencimiento de la tarea
    this.priority = priority;    // Prioridad de la tarea
    this.completed = false;      // Estado de la tarea (completada o no)
  }

  // Método para cambiar el estado de completado de la tarea
  toggleCompleted() {
    this.completed = !this.completed;
  }

}
