class Database{
    setTodoList(todoListArray){
        localStorage.setItem("todoList", todoListArray);
    }
    getTodoList(){
        return localStorage.getItem("todoList");
    }
}