const Album = require("./../models/Album");

const getAlbums = async (req, res) => {
  let { genre, order, page, limit } = req.query;

  const orderBy = order === "asc" ? 1 : order === "desc" ? -1 : null;
  page = Number(page);
  limit = Number(limit);

  if (genre === "null") genre = null;

  let albums;
  if (orderBy !== null && genre !== null) {
    albums = await Album.find({ genre: genre })
      .sort({ year: orderBy })
      .skip((page - 1) * limit)
      .limit(limit);
  } else if (orderBy === null && genre === null) {
    albums = await Album.find()
      .skip((page - 1) * limit)
      .limit(limit);
  } else if (orderBy === null && genre !== null) {
    albums = await Album.find({ genre: genre })
      .skip((page - 1) * limit)
      .limit(limit);
  } else if (orderBy !== null && genre === null) {
    albums = await Album.find()
      .sort({ year: orderBy })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  const count = await Album.countDocuments().exec();
  const numOfAlbums = albums.length;
  const totalPages = Math.ceil(count / limit);
  res.send({ albums, totalPages, numOfAlbums });
};

// Search
const getAlbumsBySearch = async (req, res) => {
  let { query, page, limit } = req.query;

  page = Number(page);
  limit = Number(limit);

  const albums = await Album.find({
    album: { $regex: query, $options: "i" },
  })
    .skip((page - 1) * limit)
    .limit(limit);

  const count = await Album.countDocuments().exec();
  const numOfAlbums = albums.length;
  const totalPages = Math.ceil(count / limit);

  res.send({ albums, numOfAlbums, totalPages });
};

module.exports = { getAlbums, getAlbumsBySearch };
