/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todo = []) {
    this.todo = todo;
  }

  add(todo) {
    this.todo.push(todo);
  }

  remove(indexOfTodo) {
    if (this.isValidIndex(indexOfTodo)) {
      this.todo.splice(indexOfTodo, 1);
    } else {
      null;
    }
  }

  update(index, updatedTodo) {
    if (this.isValidIndex(index)) {
      this.todo[index] = updatedTodo;
    } else {
      null;
    }
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if (this.isValidIndex(indexOfTodo)) {
      return this.todo[indexOfTodo];
    } else {
      return null;
    }
  }
  clear() {
    this.todo = []
  }

  isValidIndex(index) {
    if (index < this.todo.length && index >= 0) {
      return true;
    } return false;
  }


}

module.exports = Todo;
