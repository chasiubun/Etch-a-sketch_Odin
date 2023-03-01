//Etch-a-Sketch:
//Implement coloring options to the board when hovering the mouse over individual panels.
//Allow color options by providing functions to buttons to switch colors


//const input = document.getElementById("sizeInput");
const inputValue = document.getElementById("sizeInput").value; //default 16
//input.addEventListener("click", () => console.log(inputValue));
const blackButton = document.getElementById("blackButton")
const redButton = document.getElementById("redButton")
const eraserButton = document.getElementById("eraserButton")
let color = "black"; //default color
//Button Functions
blackButton.addEventListener("click", function(e){color = blackButton.value}); //this works
redButton.addEventListener("click", function(e){color = redButton.value});eraserButton.addEventListener("click", function(e){color = eraserButton.value});


//Board creation:
boardSize(inputValue) //default board creation


function boardSize(inputValue){
    createBoard(inputValue);
}
function createBoard(size){
    const board = document.querySelector(".drawingBoard"); 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    //Grab the Board with a grid and divide the grid into equal parts of columns and rows
    for (let i = 0; i < (size*size); i++) {
        let panel = document.createElement('div');
        panel.classList.add("panel");
        //panel.style.border = "1px solid black";
        panel.addEventListener("mouseover", () =>  panel.style.backgroundColor = `${color}`);
        board.insertAdjacentElement("beforeend", panel); //insert a displayable panel next to the following element, populating starting from the end
        }
}



//1. add a general border via CSS
//2. clear colors when changing size
//3. add color to buttons
