import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
    res.send("This is the About page");
});

app.get("/contact", (req, res) => {
    res.send("This is the Contact page");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
