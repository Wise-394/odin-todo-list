import { TodoItem } from "./todo-item";

export class TodoList {
    static #todoItemArray = [];

    static createTodoItem(title, description, state, dueDate, priority, project = "default") {
        const todoItem = new TodoItem(title, description, state, dueDate, priority, project);
        this.#todoItemArray.push(todoItem);
    }

    static getTodoItemArray(project = "default") {
        if (project === "default") {
            return this.#todoItemArray;
        } else {
            return this.#todoItemArray.filter((item) => item.project === project);
        }
    }

    static getTodoItem(index) {
        return this.#todoItemArray[index];
    }

    static editTodoItem(index, title, description, state, dueDate, priority, project = "default") {
        this.#todoItemArray[index] = new TodoItem(title, description, state, dueDate, priority, project);
    }

    static setState(index, state) {
        this.#todoItemArray[index].setState(state);
    }

    static deleteTodoItem(index) {
        return this.#todoItemArray.splice(index, 1);
        /// returns 0 if no item is deleted
    }
}
