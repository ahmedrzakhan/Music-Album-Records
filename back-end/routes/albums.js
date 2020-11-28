const express = require("express");
const router = express.Router();
const Album = require("./../models/Album");
const { getAlbums } = require("./../controllers/albums-controller")

router.get("/get-albums", getAlbums)

module.exports = router