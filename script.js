//Define vars.
const containerGrid = document.querySelector(".containerGrid");
const gsize = document.querySelector('#gsize');
const reset = document.querySelector('#reset');
//const pride = document.getElementById("pride");
//const black = document.getElementById("black");

//grid size
newGrid(16);

//please just give me a fucking grid you piece of trash
function newGrid(r) {
    while(containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
    }
    
    containerGrid.style.setProperty('--grid', r);
    
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < r; j++) {
            const dv = document.createElement('div');
            dv.setAttribute('class', 'box');
            containerGrid.appendChild(dv);
        }
    }
    colorBox();
}


//mouseover plz kill me
function colorBox() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            e.target.classList.remove('box');
            e.target.classList.add('newBox');
        });
    });
}

//reset all the fucking things fuckkkkkkkkiiiinnnnnnng finallllyyyyyyy
reset.addEventListener('click', () => {
    const boxes = document.querySelectorAll(".newBox");
    boxes.forEach(box => {
        box.classList.remove('newBox');
        box.classList.add('box');
    });
});

//change size button prompt
gsize.addEventListener('click', () => {
    let size = parseInt(prompt("Enter size: "));
    newGrid(size);
});