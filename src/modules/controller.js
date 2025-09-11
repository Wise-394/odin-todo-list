import { TodoList } from "./todo-list";
import { View } from "./view"
import { ProjectList } from "./project-list";
export class Controller {

    static #currentProjectTab = "all";

    static addList() {
        this.newTodoItem({
            title: "test", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: ""
        });
        this.newTodoItem({
            title: "test1", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: ""
        });
        this.newTodoItem({
            title: "test2", description: "testing", state: "unfinished",
            dueDate: "2004-03-09", priority: "low", project: ""
        });
    }

    static displayTodoList() {
        const todoList = TodoList.getTodoItemArray(this.#currentProjectTab);
        View.displayTodoList(todoList);
    }

    static newTodoItem(todoItem) {
        TodoList.createTodoItem(todoItem);
        this.#refreshView();
    }

    static getTodoItem(index) {
        return TodoList.getTodoItem(index);

    }
    static editTodoItem(todoItem, index) {
        TodoList.editTodoItem(todoItem, index);
        this.#refreshView();
    }
    static setStateTodoItem(index, state) {
        const newState = state === "finished" ? "unfinished" : "finished";
        TodoList.setState(index, newState);
        this.#refreshView();
    }
    static deleteTodoItem(index) {
        TodoList.deleteTodoItem(index);
        this.#refreshView();

    }
    static #refreshView(){
        this.displayProjectList();
        this.displayTodoList();
    }


    //project
    static displayProjectList() {
        this.updateProjectList();
        View.displayProjectList(ProjectList.getProject());

    }

    static updateProjectList() {
        ProjectList.deleteProject();
        const todoList = TodoList.getTodoItemArray();
        const project = [...new Set(todoList
            .map(entry => entry.item.project)
            .filter(p => p && p.trim() !== "")
        )];

        ProjectList.setProject(project);
    }
    static getCurrentProjectTab() {
        return this.#currentProjectTab;
    }
    static setCurrentProjectTab(project) {
        this.#currentProjectTab = project;
        this.#refreshView();
    }
}
