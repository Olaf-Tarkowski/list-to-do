{
    let tasks = [

    ];

    const addNewTask = (newTasksContent) => {
        tasks = [
            ...tasks,
            { content: newTasksContent }
        ]
        render();
    };

    const removeTask = (index) => {
        deleteTasks = [
            ...tasks.splice(index, 1)
        ]
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

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
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item">

            <button class="button button--green js-done">${task.done ? "✔" : ""}</button>

            <span class="list__position ${task.done ? " list__item--done" : ""}">${task.content}</span>

            <button class="button button--red js-remove">🗑</button>
                
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();

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