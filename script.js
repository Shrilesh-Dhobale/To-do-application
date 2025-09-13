const todoItems=["Go to Gym", "Learn JavaScript", "Read a book", "Write some code"];
const loadCards=()=>{
    const label=document.getElementById("label");
    for (const todoItem of todoItems){
        containerElement.innerHtml+=`
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
    loadCards();
};

