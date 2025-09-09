import { Controller } from "./controller";

export class View {
        static #todoListContainer = document.querySelector(".todo-list-container");
        static #newTodoButton = document.querySelector("#new-todo-button");

    static init(){
        this.#newTodoButton.addEventListener(("click"), () => Controller.newTodo());
    }

    static displayTodoList(todoListArray) {
        this.#todoListContainer.innerHTML = "";

        todoListArray.forEach((item, index) => {
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
