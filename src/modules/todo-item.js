export class TodoItem {
    constructor(todoItem) {
        this.title = todoItem.title;
        this.description = todoItem.description;
        this.state = todoItem.state;
        this.dueDate = todoItem.dueDate;
        this.priority = todoItem.priority;
        this.project = todoItem.project ?? "default";
    }

    static setState = (state) => this.state = state;
}