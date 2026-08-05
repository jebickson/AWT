// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Middleware (optional) to log each request
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

// Route for home page
app.get("/", (req, res) => {
    res.send("<h2>Welcome to the Simple Client–Server Application using Node.js and Express!</h2>");
});

// Route for about page
app.get("/about", (req, res) => {
    res.send("<h3>This is a basic Express.js server demonstration.</h3>");
});

// Route for sample JSON data
app.get("/api/data", (req, res) => {
    const sampleData = {
        course: "MCA",
        subject: "Web Application Development",
        framework: "Express.js",
        message: "This response is sent from the server!"
    };

    res.json(sampleData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});