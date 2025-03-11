// FUNÇÃO DE ADICIONAR TAREFE

function addTask() {
    // title
    const taskTitle = document.querySelector("#title");

    console.log(taskTitle);
}

// EVENTO DE ADICIONAR TAREFA

const addBtn = document.querySelector("#btnCriar");

addBtn.addEventListener("click", function (e) {

    e.preventDefault();

    addTask();

})