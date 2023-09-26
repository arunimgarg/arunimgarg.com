// Get references to the textareas, quadrants, and the submit button
const textAreas = document.querySelectorAll('textarea');
const quadrants = document.querySelectorAll('.quadrant');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');

// Function to handle the submit button click
function handleButtonClick() {
    textAreas.forEach((textarea, index) => {
        const text = textarea.value.trim();
        if (text) {
            // Create a new list item with bullet points
            const listItem = document.createElement('li');
            listItem.textContent = text;

            // Create a new unordered list if one doesn't exist in the quadrant
            if (!quadrants[index].querySelector('ul')) {
                const ul = document.createElement('ul');
                quadrants[index].appendChild(ul);
            }

            // Append the list item to the unordered list
            quadrants[index].querySelector('ul').appendChild(listItem);

            // Clear the textarea
            textarea.value = "";
        }
    });
}

function handleClearButtonClick() {
    quadrants.forEach((quadrant) => {
        // Find the ul element (list) inside the quadrant
        const ul = quadrant.querySelector('ul');
        
        // If ul exists, remove its child elements (list items)
        if (ul) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
        }
    });
}


// Add a click event listener to the submit button
submitButton.addEventListener('click', handleButtonClick);

// Add a click event listener to the clear button
clearButton.addEventListener('click', handleClearButtonClick);
