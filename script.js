const container = document.querySelector("#container");
const parentContainer = document.querySelector(".centerContainer");

const buttonFinish = document.createElement("input");
buttonFinish.setAttribute("type", "button");
buttonFinish.classList.add("finishButton");
buttonFinish.value = "Finish";

function initialGame() {
    for (let i = 1; i < 257; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");

        grid.style.width;

        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "black";
        });

        container.appendChild(grid);
    }
}

initialGame();

function calculator(a) {
    let b;
    b = 480 / a;
    return b;
}

function newGame() {
    let value = prompt("Enter the grid size (up to 100)");
    value = value.trim();

    let number = Number(value);

    if (value === "" || isNaN(number) || number > 100) {
        alert("Digite apenas números válidos!");
    } else {
        const widthHeight = calculator(number);

        container.innerHTML = "";

        for (let i = 1; i < (number * number) + 1; i++) {
            let grid = document.createElement("div");

            grid.classList.add("grid");
            grid.style.width = widthHeight + "px";
            grid.style.height = widthHeight + "px";

            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "black";
            });

            container.appendChild(grid);
        }
    }

    parentContainer.appendChild(buttonFinish);

    buttonFinish.addEventListener("click", newGame);
}

parentContainer.appendChild(buttonFinish);
buttonFinish.addEventListener("click", newGame);