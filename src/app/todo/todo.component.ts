import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push({ title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
