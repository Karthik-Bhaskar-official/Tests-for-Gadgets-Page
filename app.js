const result = require("express");
const app = result();

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = app;
