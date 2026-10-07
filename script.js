// 1. Select the toggle button using its unique ID
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. Listen for a click event on the button
themeToggleBtn.addEventListener('click', () => {
    
    // 3. Toggle (add if missing, remove if present) the "light-mode" class on the <body> tag
    document.body.classList.toggle('light-mode');
    
    // 4. Change the emoji icon inside the button depending on the active theme
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '☀️'; // Show sun icon in light mode
    } else {
        themeToggleBtn.textContent = '🌙'; // Show moon icon in dark mode
    }
});
// 1. Select the form element
const contactForm = document.querySelector('.contact-form');

// 2. Listen for the submit button click
contactForm.addEventListener('submit', (event) => {
    // Stop the browser from leaving the page to go to Web3Forms
    event.preventDefault();
    
    // Grab the name the user typed for the personalized greeting
    const nameInput = contactForm.querySelector('input[name="name"]').value.trim();
    
    // Convert the form content into a data package
    const formData = new FormData(contactForm);

    // Send the package to Web3Forms in the background
        // Make sure the word "api" and "/submit" are included exactly like this:
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })

    .then(response => {
        if (response.ok) {
            // Replace the form layout with our beautiful success message!
            contactForm.innerHTML = `
                <div class="form-success">
                    <h3>🎉 Success, ${nameInput}!</h3>
                    <p>Your message has been sent directly to my inbox. I'll read it and get back to you soon!</p>
                </div>
            `;
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        alert('Could not connect. Please check your internet connection.');
    });
});
