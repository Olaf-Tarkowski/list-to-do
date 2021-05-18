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

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li
                ${task.done ? " style=\"text-decoration: line-through\"" : ""}
            >
                ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTasksContent) => {
        tasks.push({
            content: newTasksContent,
        });

        render();
    }

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