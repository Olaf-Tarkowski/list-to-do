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
        for (const taks of tasks) {
            htmlString +=`
            <li>
                ${taks.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    }
    init();
}