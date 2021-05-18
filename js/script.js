{
    const tasks = [
        {
            content: "zjeść pierogi",
            done: false,
        },
        {
            content: "umyć naczynia",
            done: true,
        },

    ];

    const addNewTask = (newTasksContent) => {
        tasks.push({
            content: newTasksContent,
        });

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
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
            <li
                ${task.done ? " style=\"text-decoration: line-through\"" : ""}
            >
            <button class="js-done">zrobione?</button>
            <button class="js-remove">usuń</button>
                ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };
   

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTasksContent = document.querySelector(".js-newTasks").value.trim();

        if (newTasksContent == "") {
            return;
        }


        addNewTask(newTasksContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}