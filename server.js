const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const cors = require("cors");


const app = express();

var corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//simple route to test server
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
//

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booklist");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  