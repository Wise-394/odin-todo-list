import { TodoList } from "./todo-list";
import { View } from "./view"
import { ProjectList } from "./project-list";
import { Database } from "./database";
import { TodoItem } from "./todo-item";
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
        let todoList = Database.getTodoList();

        if (!todoList || todoList.length === 0) {
            todoList = this.#generatePlaceholderItem();
            TodoList.setTodoItemArray(todoList);
            this.#saveTodoList();
        } else {
            TodoList.setTodoItemArray(todoList);
        }

        this.refreshView();
    }

    static #generatePlaceholderItem() {
        return [
            new TodoItem({
                title: "Welcome to ToDo",
                description: "This is a placeholder task.",
                project: "",
                dueDate: "2024-09-09",
                priority: "low",
                state: "unfinished"
            }),
            new TodoItem({
                title: "Do my homework",
                description: "Do my english homework activity 2.",
                project: "school",
                dueDate: "2024-09-09",
                priority: "high",
                state: "unfinished"
            }),
            new TodoItem({
                title: "Clean my room",
                description: "My room is dirty, I need to clean it",
                project: "home",
                dueDate: "2024-09-09",
                priority: "medium",
                state: "unfinished"
            }),
        ];
    }

}
