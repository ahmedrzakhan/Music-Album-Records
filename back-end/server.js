const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Routes
const albumsRoute = require("./routes/albums");

const Album = require("./models/Album");
const { albums } = require("./data/albums");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/albums", albumsRoute);
mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("Connection to database failed");
    } else {
      console.log("Database is successfully connected");
    }
  }
);

const db = mongoose.connection;
db.once("open", async (req, res) => {
  if ((await Album.countDocuments().exec()) > 0) {
    return;
  }

  Album.insertMany(albums)
    .then((res) => res.json("Albums added successfully"))
    .catch((err) => res.status(400).json("Error in adding albums", err));
});

app.listen("5000", () => {
  console.log("server is listening on port 5000");
});
