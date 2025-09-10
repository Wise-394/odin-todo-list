import { TodoList } from "./todo-list";
import { View } from "./view"
export class Controller {


    static addList() {
        this.newTodo({
            title: "test", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: "default"
        });
        this.newTodo({
            title: "test1", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: "default"
        });
        this.newTodo({
            title: "test2", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: "default"
        });
    }

    static displayList() {
        View.displayTodoList(TodoList.getTodoItemArray());
    }

    static newTodoItem(todoItem) {
        TodoList.createTodoItem(todoItem);
        this.displayList();
    }

    static getTodoItem(index) {
        return TodoList.getTodoItem(index);
  
    }
    static editTodoItem(todoItem, index){
       TodoList.editTodoItem(todoItem, index);
       this.displayList();
    }
    static setStateTodoItem(index, state){
        const newState = state === "finished" ? "unfinished" : "finished";
        TodoList.setState(index, newState);
        this.displayList;
    }
    static deleteTodoItem(index){
       TodoList.deleteTodoItem(index);
       this.displayList(); 
    }
}
