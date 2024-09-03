function initializePage() {
    const rootElement = document.getElementById('root');
    
    // Create a welcome message
    const message = document.createElement('h1');
    message.textContent = 'Welcome to VJTI Racing!';
    
    // Create a description paragraph
    const description = document.createElement('p');
    description.textContent = 'We are the Official SAE Collegiate Club of Team Aryans Racing, Aurangabad. Established in 2011, our club is dedicated to automobile enthusiasts.';
    
    // Append message and description to the root element
    rootElement.appendChild(message);
    rootElement.appendChild(description);

    // Add a button and an event listener for demonstration purposes
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
    rootElement.appendChild(button);
}

// Initialize the page once the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializePage);