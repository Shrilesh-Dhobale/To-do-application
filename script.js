const todoItems=["Go to Gym", "Learn JavaScript", "Read a book", "Write some code"];
const loadCards=()=>{
    const containerElement=document.getElementsByClassName("to-do-list");
    for (const todoItem of todoItems){
        containerElement.innerHTML+=`
        <div class="to-do-list">
            <input type="radio" id="${todoItem}">
            <label for="${todoItem}" id="label">${todoItem}</label>
            <img id="deleteButton" src="dustbin.png" alt="Delete Task">
        </div>
        `;
    }
};
loadCards();
const addTask=()=>{
    const task=document.getElementById("taskInput");
    const addtask=task.value;

    todoItems.push(addtask);
    task.value="";
    localStorage.setItem
    loadCards();
};

