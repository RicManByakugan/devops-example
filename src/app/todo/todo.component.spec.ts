import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo', () => {
    component.newTodo = 'Test ToDo';
    component.addTodo();
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe('Test ToDo');
  });

  it('should not add an empty todo', () => {
    component.newTodo = '';
    component.addTodo();
    expect(component.todos.length).toBe(0);
  });

  it('should toggle todo completed state', () => {
    component.newTodo = 'Test ToDo';
    component.addTodo();
    component.toggleComplete(0);
    expect(component.todos[0].completed).toBe(true);
  });

  it('should remove a todo', () => {
    component.newTodo = 'Test ToDo';
    component.addTodo();
    component.removeTodo(0);
    expect(component.todos.length).toBe(0);
  });

});
