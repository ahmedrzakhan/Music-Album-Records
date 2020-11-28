const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    album: { type: String, required: true, trim: true, max: 255 },
    artist: { type: String, required: true, trim: true, max: 255 },
    genre: { type: String, required: true, trim: true, max: 255 },
    songs: { type: mongoose.Mixed, required: true},
    photo: { type: String, required: true, trim: true, max: 255 },
    year: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Album", albumSchema);
