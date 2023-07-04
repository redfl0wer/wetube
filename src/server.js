import express from "express";

const PORT = 4000;

const app = express();

const Middleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed. you may continue.");
  next();
};
const handleHome = (req, res) => {
  return res.send({ message: "I Love You" });
};
const handleLogin = (req, res) => {
  return res.send("<h1>Login Here</h1>");
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};
app.use(Middleware);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`👍 Server Listening on port https://localhost:${PORT}😊`);

app.listen(PORT, handleListening);
