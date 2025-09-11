import { TodoItem } from "./todo-item";

export class TodoList {
    static #todoItemArray = [];

    static createTodoItem(todoItem) {
        const newtodoItem = new TodoItem(todoItem);
        this.#todoItemArray.push(newtodoItem);
    }

    static getTodoItemArray(project = "all") {
        return this.#todoItemArray
            .map((item, i) => ({ item, index: i }))
            .filter(({ item }) => project === "all" || item.project === project);
    }


    static getTodoItem(index) {
        return this.#todoItemArray[index];
    }

    static editTodoItem(todoItem, index) {
        this.#todoItemArray[index] = new TodoItem(todoItem);
    }

    static setState(index, state) {
        this.#todoItemArray[index].state = state;
    }

    static deleteTodoItem(index) {
        return this.#todoItemArray.splice(index, 1);
        /// returns 0 if no item is deleted
    }
}
