const express = require("express");

const indexRouter = require("")
const usersRouter = require("")

const app = express();
const port = 3000; // port 번호 설정

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
