import { Controller } from "./controller";

export class View {
        static #todoListContainer = document.querySelector(".todo-list-container");
        static #newTodoButton = document.querySelector("#new-todo-button");
        static #dialog = document .querySelector("#new-todo-modal");
        static #form = document.querySelector("form");
        static #closeModalButton = document.querySelector(".close-modal-button")

    static init(){
        this.#newTodoButton.addEventListener(("click"), () => this.#showModal());
        this.#closeModalButton.addEventListener(("click"), () => this.#closeModal());
        this.#dialog.addEventListener(("submit"), (e) => this.#handleSubmit(e))
    }
    static #showModal(){
        this.#dialog.showModal();
    }
    static #closeModal(){
        this.#dialog.close();
    }
    static #handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(this.#form);

        const title = formData.get("title");
        const description = formData.get("description");
        const state = formData.get("state");
        const dueDate = formData.get("due-date");
        const priority = formData.get("priority");
        const project = formData.get("project");
        Controller.newTodo(title,description, state, dueDate, priority, project);
        this.#closeModal()
    }
    static displayTodoList(todoListArray) {
        this.#todoListContainer.innerHTML = "";

        todoListArray.forEach((item) => {
            const todoItemContainer = document.createElement("div");
            todoItemContainer.className = "todo-item-container";

            // Title
            const title = document.createElement("p");
            title.textContent = `Title: ${item.title}`;
            todoItemContainer.appendChild(title);

            // Description
            const description = document.createElement("p");
            description.textContent = `Description: ${item.description}`;
            todoItemContainer.appendChild(description);

            // State (checkbox)
            const state = document.createElement("input");
            state.type = "checkbox";
            state.checked = item.state === "finished";
            todoItemContainer.appendChild(state);

            // Due Date
            const dueDate = document.createElement("p");
            dueDate.textContent = `Due Date: ${item.dueDate}`;
            todoItemContainer.appendChild(dueDate);

            // Priority
            const priority = document.createElement("p");
            priority.textContent = `Priority: ${item.priority}`;
            todoItemContainer.appendChild(priority);

            // Project
            const project = document.createElement("p");
            project.textContent = `Project: ${item.project}`;
            todoItemContainer.appendChild(project);

            this.#todoListContainer.appendChild(todoItemContainer);
        });
    }
}
