const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

app.use(express.static(path.resolve("../build")));
app.get("*", (req, res) => res.sendFile(path.resolve("../build/index.html")));

const server = http.createServer(app);
server.listen(3000, () => console.log("server is running on port 3000"));
