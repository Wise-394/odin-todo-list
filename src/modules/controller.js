import { TodoList } from "./todo-list";
import { View } from "./view"
export class Controller {


    static addList() {
        this.newTodo({
            title: "test", description: "testing", state: "unfinished",
            dueDate: "tomorrow", priority: "low", project: "default"
        });
        this.newTodo({
            title: "test1", description: "testing", state: "unfinished",
            dueDate: "tomorrow", priority: "low", project: "default"
        });
        this.newTodo({
            title: "test2", description: "testing", state: "unfinished",
            dueDate: "tomorrow", priority: "low", project: "default"
        });
    }

    static displayList() {
        View.displayTodoList(TodoList.getTodoItemArray());
    }

    static newTodo(todoItem) {
        TodoList.createTodoItem(todoItem);
        this.displayList();
    }

    static getTodoItem(index) {
        const item = TodoList.getTodoItem(index);
        return item;
    }
}
