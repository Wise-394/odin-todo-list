export class Database {
    static setTodoList(todoListArray) {
        localStorage.setItem("todoList", JSON.stringify(todoListArray));
    }
    static getTodoList() {
        const raw = localStorage.getItem("todoList");
        if (!raw) return []; 
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    }


}