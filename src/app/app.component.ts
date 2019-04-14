import { Component } from '@angular/core';

interface Todo {
  task: string;
  complete: boolean;     // -- when true: Complete button vanishes and line gets strikethrough; when false: Complete button nexrt to task 
  delete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class TodoComponent {
  title = 'angular-todo-list-lab';
  hideButton: boolean = false;
  todoInput: string;
  todoList: Todo[] = [
    { task: 'Walk the dog', complete: false, delete: false },
    { task: 'Get gas', complete: true, delete: false },
    { task: 'Wash the car', complete: false, delete: false },
    { task: 'Do all of your homework and study for the exam', complete: false, delete: false }
  ];
  isComplete: boolean = false; //initially set complete status to false (incomplete)
  isDelete: boolean = false;

  addTask = () => { //pressing the Add button calls addTask(), which takes the input value and pushes it to the ul
    const newTask = {
      task: this.todoInput, //todoInput is the value of the input bar
      complete: this.isComplete,
      delete: this.isDelete
    };
    this.todoList.push(newTask);
    this.todoInput = null; //this clears out the inputs once the submit button has been clicked
  };

  strikeThru = (i) => {
    this.todoList[i]['complete'] = !this.todoList[i]['complete']; //changes value of complete to true, making the task complete
    this.hideButton = !this.hideButton; //changes value of hide to true, hiding the button
  };

  reverseStrikeThru = (i) => {
    if (this.todoList[i]['complete'] === true) {
      this.todoList[i]['complete'] = !this.todoList[i]['complete'];
      this.hideButton = !this.hideButton;
    }
  };

  removeTask = (i) => {
    this.todoList.splice(i, 1);
    // this.todoList[i]['delete'] = !this.todoList[i]['delete'];
    // this.isDelete = !this.isDelete;
  };
}