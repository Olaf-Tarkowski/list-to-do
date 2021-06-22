{
    let tasks = [];
    let hideDoneTask = false;

    const addNewTask = (newTasksContent) => {
        tasks = [
            ...tasks,
            { content: newTasksContent }
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            { ...tasks[taskIndex], done: !tasks[taskIndex].done },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const markAllTasksDone = () => {
        tasks = tasks.map(task => ({ ...task, done: true, }));
        render();
    };

    const toggleHideDoneTasks = () => {
        hideDoneTask = !hideDoneTask;
        render();
    };

    const bindButtonEvents = () => {
        const buttonHideDoneTasks = document.querySelector(".js-toggleHideDoneTasks");
        if (buttonHideDoneTasks) {
            buttonHideDoneTasks.addEventListener("click", toggleHideDoneTasks);
        };
        const buttonAllTasksDone = document.querySelector(".js-markAllTasksDone");
        if (buttonAllTasksDone) {
            buttonAllTasksDone.addEventListener("click", markAllTasksDone);
        };

    };

    const renderTasks = () => {
        let htmlString = tasks.map(task => `
        <li class="list__item ${task.done && hideDoneTask ? "button--hidden" : ""}">

        <button class="button button--green js-done">${task.done ? "✔" : ""}</button>

        <span class="list__position ${task.done ? " list__item--done" : ""}">${task.content}</span>

        <button class="button button--red js-remove">🗑</button>
            
        </li>`
        ).join("");
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const renderButtons = () => {
        let button = "";

        if (tasks.length > 0) {
            button = 
            `<button class="js-toggleHideDoneTasks">
                ${hideDoneTask ? "Pokaż ukończone" : "Ukryj Ukończone"}
            </button>
            <button class="js-markAllTasksDone"${tasks.every(({done}) => done) ? "disabled" : ""}>
            Ukończ wszystkie
            </button>`
        };
        document.querySelector(".js-button").innerHTML = button;
    };

const render = () => {
    renderTasks();
    renderButtons();

    bindEvents();
    bindButtonEvents();
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTasks")
    const newTasksContent = newTaskElement.value.trim();

    if (newTasksContent !== "") {
        addNewTask(newTasksContent);
        newTaskElement.value = "";
    }

    newTaskElement.focus();
};

const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
};

init();
}