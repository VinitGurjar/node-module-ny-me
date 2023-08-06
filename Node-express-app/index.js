const express = require("express");
const app = express();
const { readFile } = require("fs").promises;

app.get("/", async (request, response) => {
  response.send(await readFile("./home.html", "utf8"));
});
//Endpoint for the user app.get( url, callback )^^^^^^^^^^

// Telling express to listning to incoming requests vvvvvvv
//we are using a port which itself is a node env vvvvvvvvv
app.listen(process.env.PORT || 3000, () =>
  console.log(`App available on http://localhost:3000`)
);
