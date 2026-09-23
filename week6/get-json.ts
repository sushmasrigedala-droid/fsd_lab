import express from "express";

const app = express();

const PORT = 3000;

// GET request - Sending JSON
app.get("/students", (req, res) => {
    const students = [
        {
            id: 1,
            name: "Sushma",
            branch: "AIML"
        },
        {
            id: 2,
            name: "Divya",
            branch: "CSE"
        },
        {
            id: 3,
            name: "Kavyanjali",
            branch: "AIML"
        }
    ];

    res.json(students);
});

// GET request - Sending a single JSON object
app.get("/student", (req, res) => {
    const student = {
        id: 1,
        name: "Sushma",
        branch: "AIML",
        year: "2nd Year"
    };

    res.json(student);
});

// Basic route
app.get("/", (req, res) => {
    res.send("Week 6 - HTTP GET Request and Sending JSON");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});