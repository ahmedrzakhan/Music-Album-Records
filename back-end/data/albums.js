const albums = [
  {
    album: "The Eminem Show",
    artist: "Eminem",
    genre: "Hip hop",
    songs: [
      { title: "White America", duration: "5:25" },
      { title: "Business", duration: "4:14" },
      { title: "Cleanin out my closet", duration: "4:59" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJa71iKy2DE-jfl0wGYnt5KULaQjYoj3_fA&usqp=CAU",
    year: 2002,
  },
  {
    album: "More Life",
    artist: "Drake",
    genre: "Hip hop",
    songs: [
      { title: "Free Smoke", duration: "5:25" },
      { title: "No Long Talk", duration: "4:14" },
      { title: "PassionFruit", duration: "4:59" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FjrVUY38dhbcYYNKiRcjQ6Twuuh67DRKuw&usqp=CAU",
    year: 2016,
  },
  {
    album: "The Pinkprint",
    artist: "Nicki Minaj",
    genre: "Hip hop",
    songs: [
      { title: "All things go", duration: "5:25" },
      { title: "I Lied", duration: "4:14" },
      { title: "The Crying Game", duration: "4:59" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFz2frqPesiyFHuuyrjJqXGxhM51npJoh7Q&usqp=CAU",
    year: 2014,
  },
  {
    album: "Weathered",
    artist: "Creed",
    genre: "Post-grunge",
    songs: [
      { title: "Bullets", duration: "3:52" },
      { title: "Freedom Fighter", duration: "2:36" },
      { title: "Who's Got My Back", duration: "8:26" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKlZSlFP4t8y-mghQZIjBTZ5xg1_-wDpn3g&usqp=CAU",
    year: 2002,
  },
  {
    album: "Happy Pills",
    artist: "Candlebox",
    genre: "Post-grunge",
    songs: [
      { title: "10,000 Horses", duration: "3:52" },
      { title: "Happy Pills", duration: "2:36" },
      { title: "Blinders", duration: "5:26" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_kw0S1UBQfEWGACATPi7Z9yUOS1mCG7sUg&usqp=CAU",
    year: 1998,
  },
  {
    album: "Havoc and Bright Lights",
    artist: "Alanis Morissette",
    genre: "Post-grunge",
    songs: [
      { title: "Guardian", duration: "3:52" },
      { title: "Woman Down", duration: "2:36" },
      { title: "til You", duration: "5:26" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2lUMaVoRhU0TNVrIxzsETkO1lTRPZGUcwg&usqp=CAU",
    year: 2012,
  },
  {
    album: "Room on Fire",
    artist: "The Strokes",
    genre: "Indie rock",
    songs: [
      { title: "Whatever Happened", duration: "2:50" },
      { title: "Reptilia", duration: "3:40" },
      { title: "Autmatic Stop", duration: "3:27" },
    ],
    photo:
      "https://tonedeaf.thebrag.com/wp-content/uploads/2017/11/strokes.png",
    year: 2002,
  },
  {
    album: "Favourite Worst Nightmare",
    artist: "Arctic Monkeys",
    genre: "Indie rock",
    songs: [
      { title: "Brianstorm", duration: "2:50" },
      { title: "Teddy Picker", duration: "3:40" },
      { title: "D is for Dangerous", duration: "3:27" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAGMIjvP2O3t5IXO5Z0IpcP5Urb91OKA5ww&usqp=CAU",
    year: 2002,
  },
  {
    album: "Evol",
    artist: "Sonic Youth",
    genre: "Indie rock",
    songs: [
      { title: "Tom Violence", duration: "2:50" },
      { title: "Shadow of a doubt", duration: "3:40" },
      { title: "Star power", duration: "3:27" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55wMooiK-wMIjNvy3synIN0ljkYFV1Dz7xw&usqp=CAU",
    year: 1986,
  },
  {
    album: "Fearless",
    artist: "Taylor Swift",
    genre: "pop",
    songs: [
      { title: "Welcome To New York", duration: "3:32" },
      { title: "Blank Space", duration: "3:51" },
      { title: "Style", duration: "3:51" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntBK0XzgsEfE4ljuhKRFUKQj4Y4gxiBP-bg&usqp=CAU",
    year: 2006,
  },
  {
    album: "Let It Be",
    artist: "The Beatles",
    genre: "pop",
    songs: [
      { title: "Two Of Us", duration: "3:32" },
      { title: "Dig A Pony", duration: "3:51" },
      { title: "Across the Universe", duration: "3:51" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWE_pyZDjfjyqD4lNKDM69W12i90dcAr3Fkg&usqp=CAU",
    year: 1970,
  },
  {
    album: "Adele Live at the Royal Albert Hall",
    artist: "Adele",
    genre: "pop",
    songs: [
      { title: "Hometown Glory", duration: "3:32" },
      { title: "I 'll Be Waiting", duration: "3:51" },
      { title: "Don't You Remember ", duration: "3:51" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWnwLHohoquHRfFpIAZS0VneCKyXnpzHiJA&usqp=CAU",
    year: 2008,
  },
  {
    album: "Show No Mercy",
    artist: "Slayer",
    genre: "Heavy Metal",
    songs: [
      { title: "Evila Has No Boundaries", duration: "3:32" },
      { title: "Antichrist", duration: "3:51" },
      { title: "Die by the Sword", duration: "3:51" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLIFwBsqArXQVIfpMyWTW1Yi2ILNbsIgd7g&usqp=CAU",
    year: 2008,
  },
  {
    album: "Adele Live at the Royal Albert Hall",
    artist: "Adele",
    genre: "Heavy Metal",
    songs: [
      { title: "Hometown Glory", duration: "3:32" },
      { title: "I 'll Be Waiting", duration: "3:51" },
      { title: "Don't You Remember", duration: "3:51" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWnwLHohoquHRfFpIAZS0VneCKyXnpzHiJA&usqp=CAU",
    year: 2008,
  },
  {
    album: "Quadra",
    artist: "Sepultura",
    genre: "Heavy Metal",
    songs: [
      { title: "Isolation", duration: "3:32" },
      { title: "Means to an End", duration: "3:51" },
      { title: "Last Time", duration: "3:51" },
    ],
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOULkbzdGkp7vt3PoBgvwuU86nh6u5OSLkrQ&usqp=CAU",
    year: 2020,
  },
];

module.exports = { albums };
