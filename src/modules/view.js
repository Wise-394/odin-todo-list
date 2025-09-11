import { Controller } from "./controller";

export class View {
    static #openNewModal = document.querySelector("#open-new-modal");

    //modal 
    static #form = document.querySelector("form");
    static #modal = document.querySelector("#modal");
    static #closeModalButton = document.querySelector(".close-modal-button");
    static #modalTitle = document.querySelector("#modal h2");

    //form inputs
    static #formTitle = document.querySelector("#title");
    static #formDescription = document.querySelector("#description");
    static #formState = document.querySelector("#state");
    static #formDueDate = document.querySelector("#due-date");
    static #formPriority = document.querySelector("#priority");
    static #formProject = document.querySelector("#project");
    static #formActionButton = document.querySelector("#action-button");


    static init() {
        this.#openNewModal.addEventListener(("click"), () => this.#showNewModal());
        this.#closeModalButton.addEventListener(("click"), () => this.#closeModal());
        this.#modal.addEventListener(("submit"), (e) => this.#handleSubmit(e));
    }

    static #showNewModal() {
        this.#formActionButton.dataset.state = "new-todo";
        this.#modalTitle.textContent = "New Todo";
        this.#formActionButton.textContent = "add";
        this.#modal.showModal();
    }
    static #showEditModal(index) {
        this.#modalTitle.textContent = "Edit Todo";

        const todoItem = Controller.getTodoItem(index);
        this.#formTitle.value = todoItem.title;
        this.#formDescription.value = todoItem.description;
        this.#formState.value = todoItem.state;
        this.#formDueDate.value = todoItem.dueDate;
        this.#formPriority.value = todoItem.priority;
        this.#formProject.value = todoItem.project;

        this.#formActionButton.textContent = "edit";
        this.#formActionButton.dataset.state = "edit-todo";
        this.#formActionButton.dataset.index = index;
        this.#modal.showModal();
    }
    static #closeModal() {
        this.#formActionButton.dataset.state = "";
        this.#formActionButton.dataset.index = "";
        this.#form.reset();
        this.#modal.close();
    }
    static #getFormData() {
        const formData = new FormData(this.#form);

        const title = formData.get("title");
        const description = formData.get("description");
        const state = formData.get("state");
        const dueDate = formData.get("due-date");
        const priority = formData.get("priority");
        const project = formData.get("project") === "" ? "" : formData.get("project");

        return { title, description, state, dueDate, priority, project }
    }

    static #newTodo() {
        const newTodoItem = this.#getFormData();

        Controller.newTodoItem(newTodoItem);
        this.#closeModal();
    }

    static #editTodo() {
        const index = this.#formActionButton.dataset.index
        const formData = this.#getFormData();
        Controller.editTodoItem(formData, index);
        this.#closeModal();
    }
    static #handleSubmit(e) {
        e.preventDefault();

        switch (this.#formActionButton.dataset.state) {
            case "new-todo":
                this.#newTodo();
                break;
            case "edit-todo":
                this.#editTodo();
        }
    }
    static #handleState(index, state) {
        Controller.setStateTodoItem(index, state)
    }
    static #handleDelete(index) {
        Controller.deleteTodoItem(index);
    }
    static displayTodoList(todoListArray) {
        const todoListContainer = document.querySelector(".todo-list-container");
        todoListContainer.innerHTML = "";

        todoListArray.forEach(({ item, index }) => {
            const todoItemContainer = document.createElement("div");
            todoItemContainer.className = "todo-item-container";
            todoItemContainer.dataset.id = index; // real index

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
            state.addEventListener("change", () => this.#handleState(index, item.state));
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

            // Edit
            const editButton = document.createElement("button");
            editButton.className = "show-edit-modal";
            editButton.textContent = "edit";
            editButton.addEventListener("click", () => this.#showEditModal(index));
            todoItemContainer.appendChild(editButton);

            // Delete
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-todo-item";
            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", () => this.#handleDelete(index));
            todoItemContainer.appendChild(deleteButton);

            todoListContainer.appendChild(todoItemContainer);
        });
    }

    static displayProjectList(projectListArray) {
        const projectContainer = document.querySelector(".project-container");
        projectContainer.innerHTML = "";
        projectListArray.forEach((project) => {
            const projectButton = document.createElement("button");
            projectButton.addEventListener("click", () => Controller.setCurrentProjectTab(project))
            projectButton.textContent = project;
            projectContainer.appendChild(projectButton);
        })
    }
    static projectTabSelected(){
        
    }
}
