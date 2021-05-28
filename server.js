const express = require('express');
const connectDB = require('./config/db');
//const path = require('path');
//const helmet = require('helmet');
const routes = require("./routes");

const app = express();

// Connect Database
connectDB();

// Init Middleware
// app.use(express.json({ extended: false }));
// app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));

app.use(routes);

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
