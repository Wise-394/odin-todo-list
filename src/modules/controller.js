import { TodoList } from "./todo-list";
import { View } from "./view"
import { ProjectList } from "./project-list";
export class Controller {

    static #currentProjectTab = "default";

    static addList() {
        this.newTodoItem({
            title: "test", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: "default"
        });
        this.newTodoItem({
            title: "test1", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: "default"
        });
        this.newTodoItem({
            title: "test2", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: "default"
        });
    }

    static displayTodoList() {
        const todoList = TodoList.getTodoItemArray(this.#currentProjectTab);
        console.log(todoList);
        View.displayTodoList(todoList);
    }

    static newTodoItem(todoItem) {
        TodoList.createTodoItem(todoItem);
        this.displayTodoList();
        this.displayProjectList();
    }

    static getTodoItem(index) {
        return TodoList.getTodoItem(index);

    }
    static editTodoItem(todoItem, index) {
        TodoList.editTodoItem(todoItem, index);
        this.displayTodoList();
        this.displayProjectList();
    }
    static setStateTodoItem(index, state) {
        const newState = state === "finished" ? "unfinished" : "finished";
        TodoList.setState(index, newState);
        this.displayList;
    }
    static deleteTodoItem(index) {
        TodoList.deleteTodoItem(index);
        this.displayTodoList();
        this.displayProjectList();
    }


    //project


    static displayProjectList() {
        this.updateProjectList();
        View.displayProjectList(ProjectList.getProject());
    }

    static updateProjectList() {
        ProjectList.deleteProject();
        const todoList = TodoList.getTodoItemArray();
        const project = [...new Set(todoList.map(item => item.project))];
        ProjectList.setProject(project);
    }
    static getCurrentProjectTab() {
        return this.#currentProjectTab;
    }
    static setCurrentProjectTab(project) {
        this.#currentProjectTab = project;
        console.log(this.#currentProjectTab);
        this.displayTodoList();
    }
}
