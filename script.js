// set the width of #grid equal to it's height.

window.addEventListener('load', function() {
    let gridDiv = document.getElementById('grid');

    function updateGridSize() {
        let currentHeight = gridDiv.clientHeight;
        gridDiv.style.width = currentHeight + 'px';
    } 

    // call the updateGridSize function on page load
    updateGridSize();

    // Attach a resize event listener to the window to update the height when the width changes
    window.addEventListener('resize', updateGridSize);
});