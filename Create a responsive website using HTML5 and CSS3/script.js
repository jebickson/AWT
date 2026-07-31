// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Form submitted successfully!");

});