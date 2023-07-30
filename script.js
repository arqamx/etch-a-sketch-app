let gridDiv = document.getElementById('grid');
let rangeInput = document.getElementById('range');
let sizeValueDiv = document.getElementById('sizeValue');

let penBtn = document.getElementById('penBtn');
let eraserBtn = document.getElementById('eraserBtn');
let clearBtn = document.getElementById('clearBtn');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentMode = 'none';
function setCurrentMode(newMode) {
    currentMode = newMode
  }

function getGridHeight () {
    return gridDiv.clientHeight;
}

function updateGridWidth() {
    let gridWidth = getGridHeight();
    gridDiv.style.width = gridWidth + 'px';
} 

function getGridPixels() {
    return rangeInput.value;
}

function createPixels() {
    let gridPixels = getGridPixels();
    let gridHeight = getGridHeight();
    let sizeOfPixel = gridHeight / gridPixels;
    let totalGridPixels = gridPixels * gridPixels;

    activateButton('none');

    gridDiv.innerText = '';
    for (let i = 1; i <= totalGridPixels; i++) {
        let pixel = document.createElement('div');
        pixel.style.height = sizeOfPixel + 'px';
        pixel.style.width = sizeOfPixel + 'px';
        pixel.style.backgroundColor = '#fefefe';
        pixel.addEventListener('mouseover', changeBackGroundColor);
        pixel.addEventListener('mousedown', changeBackGroundColor);
        gridDiv.appendChild(pixel);
    }
}

function changeBackGroundColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'pen') {
      e.target.style.backgroundColor = '#333333'
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

function updateDivSizeValue() {
    let value = getGridPixels();
    sizeValueDiv.innerText = value + ' X ' + value;
}

function activateButton(newMode) {
    setCurrentMode(newMode);
    if (currentMode === 'pen') {
        eraserBtn.classList.remove('active');
        penBtn.classList.add('active');
    } else if (currentMode === 'eraser') {
        penBtn.classList.remove('active');
        eraserBtn.classList.add('active');
    } else if (currentMode === 'none') {
        eraserBtn.classList.remove('active');
        penBtn.classList.remove('active');
    }
  }


window.addEventListener('load', function() {
    updateGridWidth();
    createPixels();
});


window.addEventListener('resize', updateGridWidth);
window.addEventListener('resize', createPixels);
rangeInput.addEventListener('input', updateDivSizeValue);
rangeInput.addEventListener('input', createPixels);

penBtn.onclick = () => activateButton('pen');
eraserBtn.onclick = () => activateButton('eraser');
clearBtn.onclick = () => createPixels();



