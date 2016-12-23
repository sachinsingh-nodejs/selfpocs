let express = require("express");
let path = require("path");
let app = express();

// app.use(express.static('public'));
app.set("views", path.join(__dirname, "/public"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("index");
});

app.listen(8080, function () {
    console.log("Listening on PORT 8080...");
});