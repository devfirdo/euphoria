// size selection

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const sizeOptions = document.querySelectorAll('.size-option');
    console.log('Size options found:', sizeOptions);

    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            console.log('Option clicked:', option.dataset.size);
            
            // Change colors
            const svg = option.querySelector('svg');
            const rect = svg.querySelector('rect');
            const path = svg.querySelector('path');

            rect.setAttribute('fill', '#3C4242');
            rect.setAttribute('stroke', 'none');
            path.setAttribute('fill', 'white');

            // Reset other options
            sizeOptions.forEach(opt => {
                if (opt !== option) {
                    const otherSvg = opt.querySelector('svg');
                    const otherRect = otherSvg.querySelector('rect');
                    const otherPath = otherSvg.querySelector('path');

                    otherRect.setAttribute('fill', 'none');
                    otherRect.setAttribute('stroke', '#BEBCBD');
                    otherPath.setAttribute('fill', '#3C4242');
                }
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    // Select all color options
    const colorOptions = document.querySelectorAll('.different-colors div');

    // Function to set the selected color
    const selectColor = (selectedOption) => {
        colorOptions.forEach(option => {
            const svg = option.querySelector('svg');
            const circle = svg.querySelector('circle');

            if (option === selectedOption) {
                // Set the selected option with a larger SVG and a border circle
                svg.setAttribute("width", "30");
                svg.setAttribute("height", "30");
                svg.setAttribute("viewBox", "0 0 30 30");

                // Modify the existing circle attributes
                circle.setAttribute("cx", "15");
                circle.setAttribute("cy", "15");
                circle.setAttribute("r", "11");

                // Add the border circle (if it doesn't already exist)
                if (!svg.querySelector('circle[stroke]')) {
                    const borderCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    borderCircle.setAttribute("cx", "15");
                    borderCircle.setAttribute("cy", "15");
                    borderCircle.setAttribute("r", "14.5");
                    borderCircle.setAttribute("stroke", "#3F4646");
                    borderCircle.setAttribute("fill", "none");
                    svg.appendChild(borderCircle);
                }
            } else {
                // Reset the non-selected option to the smaller size and remove border circle
                svg.setAttribute("width", "22");
                svg.setAttribute("height", "22");
                svg.setAttribute("viewBox", "0 0 22 22");

                // Modify the existing circle attributes back to smaller size
                circle.setAttribute("cx", "11");
                circle.setAttribute("cy", "11");
                circle.setAttribute("r", "11");

                // Remove the border circle if it exists
                const borderCircle = svg.querySelector('circle[stroke]');
                if (borderCircle) {
                    borderCircle.remove();
                }
            }
        });
    };

  
    selectColor(document.querySelector('.color-black'));

    // Add click event listener to each color option
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectColor(option);
        });
    });
});






//arrow down 

const arrowIcon = document.getElementById('arrow-icon');
const categoriesList = document.getElementById('categories-list');

arrowIcon.addEventListener('click', () => {
    // Toggle the 'show' class to display or hide the list
    categoriesList.classList.toggle('show');
    // Toggle the 'rotate' class to rotate the arrow
    arrowIcon.classList.toggle('rotate');
});





// // Get the URL parameters
const params = new URLSearchParams(window.location.search);

// Get the 'image' parameter and update both image sources
const imageName = params.get('image');
if (imageName) {
    document.getElementById('productImage').src = `assets/${imageName}`;
    document.querySelector('.thumbnail-image').src = `assets/${imageName}`;
}

// Get the 'title' parameter and update the product title
const productTitle = params.get('title');
if (productTitle) {
    document.querySelector('.product-title h2').textContent = productTitle;
}

