import { TodoItem } from "./todo-item";
import { logger } from "./logger";
export class TodoList{
    #todoItemArray = [];
    
    createToDoItem(title, description, state, dueDate, priority, project){
        let todoItem = new TodoItem(title, description, state, dueDate, priority, project);
        this.#todoItemArray.push(todoItem);
    }
    get todoItemArray(){
        return this.#todoItemArray;
    }
    editToDoItem(index,title, description, state, dueDate, priority, project){
        this.#todoItemArray[index] = new TodoItem(title, description, state, dueDate, priority, project);
    }
    setState(index, state){
        this.#todoItemArray[index].state = state;
    }
    deleteTodoItem(index){
        return result = this.#todoItemArray.splice(index,1);
        /// returns 0 if no item is deleted
    }
}