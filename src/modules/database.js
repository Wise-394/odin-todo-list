export class Database{
    static setTodoList(todoListArray){
        localStorage.setItem("todoList", JSON.stringify(todoListArray));
    }
    static getTodoList(){
        const test = JSON.parse(localStorage.getItem("todoList"));  
        console.log(test)
        return test
    }
}