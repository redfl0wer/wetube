import express from "express";

const PORT = 4000;

const app = express();

const loginMiddleware = (req, res, next) => {
  console.log(`Someone is trying to go to ${req.url}`);
  next();
};
const homeMiddleware = (req, res, next) => {
  console.log(`Someone is trying to go to ${req.url}`);
  next();
};
const handleHome = (req, res) => {
  return res.send({ message: "I Love You" });
};
const handleLogin = (req, res) => {
  return res.send("<h1>Login Here</h1>");
};

app.get("/", homeMiddleware, handleHome);
app.get("/login", loginMiddleware, handleLogin);

const handleListening = () =>
  console.log(`👍 Server Listening on port https://localhost:${PORT}😊`);

app.listen(PORT, handleListening);
