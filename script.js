let todoItems=[];
const loadCards=()=>{
    const storedItems=JSON.parse(localStorage.getItem("Todo Items")|| "[]");
    todoItems=storedItems;
    const toDoListContainer=document.getElementById("to-do-list-container");
    toDoListContainer.innerHTML="";
    for (const todoItem of todoItems) {
        toDoListContainer.innerHTML += `
            <div class="to-do-list" onclick="deleteToDo('${todoItem}')">
                ${todoItem}
                <img id="deleteButton" src="bin.png" alt="Delete Task">
            </div>
        `;
    }
};
loadCards();
const addToDo=()=>{
    const newTaskInput=document.getElementById("taskInput");
    todoItems.push(newTaskInput.value);
    localStorage.setItem("Todo Items",JSON.stringify(todoItems));
    newTaskInput.value="";
    
    loadCards();
};

const deleteToDo=(item)=>{
    const indexOfItems=todoItems.indexOf(item);
    if (indexOfItems > -1) {
        todoItems.splice(indexOfItems, 1);
        
        localStorage.setItem("Todo Items",JSON.stringify(todoItems));
        loadCards();
    }
};