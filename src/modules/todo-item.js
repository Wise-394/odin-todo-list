export class TodoItem {
    constructor(title, description, state, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.state = state;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    static setState = (state) => this.state = state;
}