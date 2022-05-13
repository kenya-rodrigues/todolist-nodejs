const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

const checkExistsUserAccount = (request, response, next) => {

};

app.post("/users", (request, response) => {});

app.get("/todos", (request, response) => {});

app.post("/todos", (request, response) => {});

app.put("/todos/:id", (request, response) => {});

app.patch("/todos/:id/done", (request, response) => {});

app.delete("/todos:id", (request, response) => {});

module.exports = app;

app.listen(3333);
