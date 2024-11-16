const CONTAINER = document.querySelector("#container");
const RESET = document.querySelector("#reset");
const RGB = document.querySelector("#rgb");
const CLEAR  = document.querySelector("#clear")
let color = document.querySelector("#palette");
let isRGB = false;

function makeGrid(size){
    for(let i=0;i<size;i++){
        let row = document.createElement("div");
        for(let j=0;j<size;j++){
            let column = document.createElement("div");
            column.setAttribute("id","column")
            column.style.opacity = 0;
            row.appendChild(column);
            column.addEventListener('mouseenter',()=>{
                if(isRGB){
                    column.style.backgroundColor = randomColor();
                }else{
                    column.style.backgroundColor = color.value;
                }
                let currentOpacity = parseFloat(column.style.opacity);
                let newOpacity = Math.min(currentOpacity + 0.1,1);
                column.style.opacity = newOpacity;
            });
        }
        row.setAttribute("id","row");
        CONTAINER.appendChild(row);
    }
}

makeGrid(16);

function deleteGrid(){
    while(CONTAINER.firstChild){
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}

function randomColor(){
    let color = [];
    for(let i=0;i<3;i++){
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(',') + ')';
}

RGB.addEventListener('click',()=>{
    isRGB = !isRGB;
});

RESET.addEventListener('click',()=>{
    let newSize;
    deleteGrid();
    while(true){
        newSize = +prompt("Enter resolution: ",1);
        if(newSize>0 && newSize<101) break;
    }
    makeGrid(newSize);
});

CLEAR.addEventListener('click',()=>{
    deleteGrid();
    makeGrid(16);
});