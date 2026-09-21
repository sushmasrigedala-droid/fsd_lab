import express from "express";

const app = express();

const PORT = 3000;

app.get("/user/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get("/student/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Student ID: ${id}`);
});

app.get("/search", (req, res) => {
    const name = req.query.name;
    res.send(`Searching for: ${name}`);
});

app.get("/product", (req, res) => {
    const name = req.query.name;
    const category = req.query.category;

    res.send(`Product: ${name}, Category: ${category}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});