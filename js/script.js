document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior (no page reload)
        event.preventDefault();

        // Remove 'active' class from any link that has it
        document.querySelector('.nav-link a.active')?.classList.remove('active');
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector('.banner');

    // Array of background images
    const images = [
        "../assets/bg-1.jpg",
        "../assets/bg-3.jpg", // Two images for the slider
    ];

    let currentIndex = 0; // Start with the first image

    // Function to update the background image
    function updateBackgroundImage() {
        banner.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    // Function to update the indicators
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        const rect1 = document.getElementById('rect1');
        const rect2 = document.getElementById('rect2');
    
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                console.log(`Indicator ${index} is active (opacity: 1)`); // Log active indicator
                if (index === 0) {
                    rect1.style.opacity = '1'; // Active indicator for first
                    rect2.style.opacity = '0.5'; // Inactive indicator for second
                } else {
                    rect1.style.opacity = '0.5'; // Inactive indicator for first
                    rect2.style.opacity = '1'; // Active indicator for second
                }
            }
        });
    }

    // Add click event listeners for the arrows
    document.getElementById('right-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Increment index and loop
        updateBackgroundImage();
        updateIndicators();
    });

    document.querySelector('.left-arrow img:first-of-type').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index and loop
        updateBackgroundImage();
        updateIndicators();
    });

    // Initial call to set the background image and indicators
    updateBackgroundImage();
    updateIndicators();
});






// Array of image sets (each set contains 4 images)
const imageSets = [
    [
        { img: 'assets/img-1.jpg', title: 'Knitted Joggers' },
        { img: 'assets/img-3.jpg', title: 'Full Sleeve' },
        { img: 'assets/img-4.jpg', title: 'Active T-Shirts' },
        { img: 'assets/img-2.jpg', title: 'Urban Shirts' }
    ],
    [
        { img: 'assets/img-5-new.jpg', title: 'Casual Shirts' },
        { img: 'assets/img-6-new.jpg', title: 'Black T-shirts' },
        { img: 'assets/img-7-new.jpg', title: 'Light T-shirts' },
        { img: 'assets/img-8-new.jpg', title: 'Polo T-Shirts' }
    ]
    
];

let currentSetIndex = 0; // Start with the first set

// Function to update the displayed cards
function updateCards() {
    const cards = document.querySelectorAll('.new-cards');
    imageSets[currentSetIndex].forEach((item, index) => {
        const imgTag = cards[index].querySelector('img');
        const h4Tag = cards[index].querySelector('h4');
        imgTag.src = item.img;
        h4Tag.textContent = item.title;
    });
}

// Event listeners for arrows
document.querySelector('.main-arrow-right').addEventListener('click', () => {
    currentSetIndex = (currentSetIndex + 1) % imageSets.length; // Increment index and loop back to the start if needed
    updateCards();
});

document.querySelector('.main-arrow-left').addEventListener('click', () => {
    currentSetIndex = (currentSetIndex - 1 + imageSets.length) % imageSets.length; // Decrement index and loop to the end if needed
    updateCards();
});

// Initial call to display the first set
updateCards();



//heart icon

const heartIcons = document.querySelectorAll('.wishlist-icon');

    heartIcons.forEach(heartIcon => {
        let isRed = false;

        heartIcon.addEventListener('click', () => {
            if (isRed) {
                heartIcon.src = 'assets/wishlist.svg'; // Default icon (gray heart)
            } else {
                heartIcon.src = 'assets/wishlist-red.svg'; // Red icon (red heart)
            }
            isRed = !isRed; // Toggle state
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



//menu button







