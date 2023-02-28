//Board creation:
//Grab the Board with a grid and divide the grid into equal parts of columns and rows

let input = document.getElementById("sizeInput").value;
console.log(input)

boardSize(input)

let submitButton = document.getElementById("submit");
console.log(submitButton);
submitButton.addEventListener("click", () => console.log(input))

function boardSize(input){
    createBoard(input);
}
function createBoard(size){
    const board = document.querySelector(".drawingBoard"); 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;

//Fill the grid with div elements with a blue background
for (let i = 0; i < (size*size); i++) {
    let panel = document.createElement('div');
    panel.classList.add("panel");
    panel.style.border = "1px solid black";
    panel.addEventListener("mouseover", () =>  panel.style.backgroundColor = "red");
    board.insertAdjacentElement("beforeend", panel); //insert a displayable panel next to the following element, populating starting from the end
    }
}


//function panelStyle() {
    //panel.style.backgroundColor = "gray";}


// function panelFunctions(){
//     panel.addEventListener("mouseover", () =>  
//     panel.style.backgroundColor = "red")
//     //console.log("hovering..."))
// } 
// console.log(panel)