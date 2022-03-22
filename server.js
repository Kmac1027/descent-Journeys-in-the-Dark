const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(__dirname, "build"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});