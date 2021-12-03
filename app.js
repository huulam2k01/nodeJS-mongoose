const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appRouter = require("./routes/index");


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(appRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
