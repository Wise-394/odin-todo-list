import { TodoList } from "./todo-list";
import { View } from "./view";

export class Controller {

    #view = new View()
    #todoList = new TodoList()

    addList() {
        this.#todoList.createTodoItem("Eat", "I need to eat", "unfinished", "tomorrow", "high", "Life");
        this.#todoList.createTodoItem("Code", "Finish my project", "unfinished", "today", "medium", "Work");
        this.#todoList.createTodoItem("Sleep", "Go to bed early", "finished", "tonight", "low", "Life");
    }
    displayList() {
        this.#view.displayTodoList(this.#todoList.getTodoItemArray());
    }
}