// FUNÇÃO DE ADICIONAR TAREFA

function addTask() {
    // title
    const taskTitle = document.querySelector("#taskCreate").value;

    if (taskTitle) {
        // CLONAR TEMPLATE
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // add titile
        newTask.querySelector(".taskTitle").textContent = taskTitle;

        // remover classes
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionar tarefa na lista

        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

    }
}

// EVENTO DE ADICIONAR TAREFA

const addBtn = document.querySelector("#btnCriar");

addBtn.addEventListener("click", function (e) {

    e.preventDefault(); // evita que envie o formulário para o servidor, MANTENDO NO FRONT

    addTask();

})
