// Function to dynamically generate shapes
function generateShapes() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.classList.add('decoration');
        
        // Randomize position and rotation
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.transform = `rotate(${Math.random() * 360}deg)`;

        // Randomize shape style
        const randomShape = Math.random();
        if (randomShape < 0.25) {
            shape.classList.add('circle');
        } else if (randomShape < 0.5) {
            shape.classList.add('triangle');
        } else if (randomShape < 0.75) {
            shape.classList.add('square');
        } else {
            shape.classList.add('pentagon');
        }

        container.appendChild(shape);
    }
}

// Call the function when the page is loaded
window.addEventListener('DOMContentLoaded', generateShapes);
