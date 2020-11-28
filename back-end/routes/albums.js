const express = require("express");
const router = express.Router();
const Album = require("./../models/Album");
const {
  getAlbums,
  getAlbumsBySearch,
} = require("./../controllers/albums-controller");

router.get("/get-albums", getAlbums);

router.get("/get-albums-by-search", getAlbumsBySearch);

module.exports = router;
