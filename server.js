const express = require('express');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/readerfeeder", {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,  
  useUnifiedTopology: true  
}).then(() => console.log(" DB Connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//module.exports = app;
