import { TodoList } from "./todo-list";
import { View } from "./view"
import { ProjectList } from "./project-list";
import { Database } from "./database";
export class Controller {

    static #currentProjectTab = "all";
    static displayTodoList() {
        const todoList = TodoList.getTodoItemArray(this.#currentProjectTab);
        View.displayTodoList(todoList);
    }

    static newTodoItem(todoItem) {
        TodoList.createTodoItem(todoItem);
        this.#saveTodoList();
        this.updateProjectList();
        this.refreshView();
    }

    static getTodoItem(index) {
        return TodoList.getTodoItem(index);

    }
    static editTodoItem(todoItem, index) {
        TodoList.editTodoItem(todoItem, index);
        this.#saveTodoList();
        this.updateProjectList();
        this.#checkIfTabStillExist();
        this.refreshView();
    }
    static setStateTodoItem(index, state) {
        const newState = state === "finished" ? "unfinished" : "finished";
        TodoList.setState(index, newState);
        this.#saveTodoList();
        this.updateProjectList();
        this.refreshView();
    }
    static deleteTodoItem(index) {
        TodoList.deleteTodoItem(index);
        this.#saveTodoList();
        this.updateProjectList();
        this.#checkIfTabStillExist();
        this.refreshView();

    }
    static refreshView() {
        this.displayTodoList();
        this.displayProjectList();
    }


    //project
    static displayProjectList() {
        View.displayProjectList(ProjectList.getProject());
    }
    static #checkIfTabStillExist() {
        const project = ProjectList.getProject();
        if (!project.includes(this.#currentProjectTab)) {
            this.setCurrentProjectTab("all");
        }
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
        this.refreshView();
    }

    //database
    static #saveTodoList() {
        const todoList = TodoList.getallTodoItemArray();
        Database.setTodoList(todoList);
    }
    static loadTodoList() {
        const todoList = Database.getTodoList();
        TodoList.setTodoItemArray(todoList);
        this.refreshView();

    }
}
