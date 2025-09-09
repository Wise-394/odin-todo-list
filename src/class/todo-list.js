import { TodoItem } from "./todo-item";

export class TodoList {
    #todoItemArray = [];

    createTodoItem(title, description, state, dueDate, priority, project = "default") {
        const todoItem = new TodoItem(title, description, state, dueDate, priority, project);
        this.#todoItemArray.push(todoItem);
    }

    getTodoItemArray(project = "default") {
        if (project === "default") {
            return this.#todoItemArray;
        } else {
            return this.#todoItemArray.filter((item) => item.project === project);
        }
    }

    getTodoItem(index) {
        return this.#todoItemArray[index];
    }

    editTodoItem(index, title, description, state, dueDate, priority, project = "default") {
        this.#todoItemArray[index] = new TodoItem(title, description, state, dueDate, priority, project);
    }

    setState(index, state) {
        this.#todoItemArray[index].setState(state);
    }

    deleteTodoItem(index) {
        return this.#todoItemArray.splice(index, 1);
        /// returns 0 if no item is deleted
    }
}
