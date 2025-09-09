export class View {
    todoListContainer = document.querySelector(".todo-list-container");
    displayTodoList(todoListArray) {
        todoListArray.forEach((item) => {
            const todoItemContainer = document.createElement("div");
            todoItemContainer.className = "todo-item-container";
            this.todoListContainer.appendChild(todoItemContainer);

            // Title
            const title = document.createElement("p");
            title.textContent = `Title: ${item.title}`;
            todoItemContainer.appendChild(title);

            // Description
            const description = document.createElement("p");
            description.textContent = `Description: ${item.description}`;
            todoItemContainer.appendChild(description);

            // State
            const state = document.createElement("input");
            state.type = "checkbox";
            state.checked = this.#stateHelper(item.state);
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
        });
    }
    #stateHelper(state){
        return state === "finished" ? true : false;
    }
}
