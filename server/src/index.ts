import exp from "constants";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post(
  "/",
  (req, res, next) => {
    req.on("data", (chunk) => {
      req.body = JSON.parse(chunk);
    });
    next();
  },
  (req, res) => {
    console.log(req.body);
    res.json({ message: "Hello, World!" });
  }
);

app.listen(8000, () => {
  console.log("listening");
});
