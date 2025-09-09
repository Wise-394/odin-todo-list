import { TodoList } from "./todo-list";
import { View } from "./view"
export class Controller {


    static addList() {
        TodoList.createTodoItem("Eat", "I need to eat", "unfinished", "tomorrow", "high", "Life");
        TodoList.createTodoItem("Code", "Finish my project", "unfinished", "today", "medium", "Work");
        TodoList.createTodoItem("Sleep", "Go to bed early", "finished", "tonight", "low", "Life");
    }

    static displayList() {
        View.displayTodoList(TodoList.getTodoItemArray());
    }

    static newTodo() {
        TodoList.createTodoItem("Sleep", "Go to bed early", "finished", "tonight", "low", "Life");
        this.displayList();
    }
}
