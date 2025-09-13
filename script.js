const todoItems=["Gym","Cricket","Swimming"];
const loadCards=()=>{
    const storedItems=JSON.parse(localStorage.getItem("Todo Items"));
    const toDoListContainer=document.getElementById("to-do-list-container");
    toDoListContainer.innerHTML="";
    for (const todoItem of todoItems) {
        toDoListContainer.innerHTML += `
            <div class="to-do-list">
                ${todoItem}
                <img id="deleteButton" src="dustbin.png" alt="Delete Task">
            </div>
        `;
    }
}
loadCards();
const addToDo=()=>{
    const newTaskInput=document.getElementById("taskInput");
    todoItems.push(newTaskInput.value);
    localStorage.setItem("Todo Items",JSON.stringify(todoItems));
    newTaskInput.value="";
    
    loadCards();
}