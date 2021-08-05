const express = require("express");
const mongoose = require("mongoose");
const homeRoutes = require("./routes/homeRoutes")
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3002

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(homeRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`App running on port  ${PORT}! ...Click on the link:  http://localhost:${PORT}/`);
});
