document.addEventListener("DOMContentLoaded", () => buildGrid(16))

function handleHoverEffect(e) {

    var red = Math.floor(Math.random() * 256); 
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    let item = e.target;
    item.style.backgroundColor = color
}

function handleHoverOut(e) {
    let item = e.target;
    item.style.backgroundColor = "teal"
}

let button = document.getElementById("btn");

button.addEventListener("click", (e) => {
    let inputValue = prompt("Enter grid size:");
    if(inputValue !== null && parseInt(inputValue) <= 100) {
        clearGridItem()
        buildGrid(inputValue)
    } else {
        alert("Invalid input. Please input using numeric no more than 100")
    }
})


function buildGrid(gridSize) {
    let container = document.getElementById('grid-container');
    for(let i=0; i < gridSize; i++ ) {
        for(let i=0; i < gridSize; i++ ) {
            let newDiv = document.createElement('div');
            newDiv.classList.add("grid-item");

            newDiv.addEventListener("mouseenter", handleHoverEffect);
            newDiv.addEventListener("mouseout", handleHoverOut);
            container.appendChild(newDiv);

            let width = gridSize * 50;
            container.style.width = `${width}px`;
        }
    }
}

function clearGridItem() {
    let gridItems = document.getElementsByClassName("grid-item");
    let gridArrays = Array.from(gridItems);
    gridArrays.forEach((e) => e.parentNode.removeChild(e))
}
