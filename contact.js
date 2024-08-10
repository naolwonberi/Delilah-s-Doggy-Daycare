// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// Select the submit button and the contact-page element
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new <p> element
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = "Thank you for your message";
    thankYouMessage.style.fontSize = "24px"; // Set the font size to 24px

    // Clear the existing contents of the contact-page and append the new <p> element
    contactPage.innerHTML = ''; // Clear existing content
    contactPage.appendChild(thankYouMessage);
});
