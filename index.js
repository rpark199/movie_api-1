const express = require("express"),
  morgan = require("morgan"),
  fs = require("fs"),
  path = require("path"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  uuid = require("uuid");
const { title } = require("process");

const app = express();
app.use(morgan("common"));
// Create a write stream (in append mode) a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a",
});

// Setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(methodOverride());

// In-Memory Details from imdb generated by chatGPT for my top ten (https://chat.openai.com/share/8cfa20d9-69e9-42e2-93f5-fde520de0563)
let movies = [
  {
    movieID: 1,
    Title: "Forrest Gump",
    Year: "1994",
    Rated: "PG-13",
    Released: "06 Jul 1994",
    Runtime: "142 min",
    Genre: "Drama, Romance",
    Director: "Robert Zemeckis",
    Writer: "Winston Groom (novel), Eric Roth (screenplay)",
    Actors:
      "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
    Plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    Language: "English",
    Country: "USA",
    Awards: "Won 6 Oscars. Another 44 wins & 76 nominations.",
    imdbRating: "8.8",
    imdbVotes: "1,895,641",
    imdbID: "tt0109830",
    Type: "movie",
    DVD: "28 Aug 2001",
    BoxOffice: "N/A",
    Production: "Paramount Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 2,
    Title: "Remember the Titans",
    Year: "2000",
    Rated: "PG",
    Released: "29 Sep 2000",
    Runtime: "113 min",
    Genre: "Biography, Drama, Sport",
    Director: "Boaz Yakin",
    Writer: "Gregory Allen Howard",
    Actors: "Denzel Washington, Will Patton, Wood Harris, Ryan Hurst",
    Plot: "The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit.",
    Language: "English",
    Country: "USA",
    Awards: "9 wins & 13 nominations.",
    imdbRating: "7.8",
    imdbVotes: "232,841",
    imdbID: "tt0210945",
    Type: "movie",
    DVD: "20 Mar 2001",
    BoxOffice: "$115,648,585",
    Production: "Walt Disney Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 3,
    Title: "Captain Ron",
    Year: "1992",
    Rated: "PG-13",
    Released: "18 Sep 1992",
    Runtime: "90 min",
    Genre: "Adventure, Comedy",
    Director: "Thom Eberhardt",
    Writer: "John Dwyer",
    Actors: "Kurt Russell, Martin Short, Mary Kay Place, Benjamin Salisbury",
    Plot: "A family in Chicago inherits the yacht formerly owned by Clark Gable. They decide to sail it from the island of Ste. Pomme de Terre to Miami, and they sail with the assistance of Captain Ron and their lives will never be the same again.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    imdbRating: "5.7",
    imdbVotes: "21,156",
    imdbID: "tt0103924",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Touchstone Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 4,
    Title: "A League of Their Own",
    Year: "1992",
    Rated: "PG",
    Released: "01 Jul 1992",
    Runtime: "128 min",
    Genre: "Comedy, Drama, Sport",
    Director: "Penny Marshall",
    Writer:
      "Kim Wilson (story), Kelly Candaele (story), Kim Wilson (screenplay), Kelly Candaele (screenplay)",
    Actors: "Tom Hanks, Geena Davis, Madonna, Lori Petty",
    Plot: "Two sisters join the first female professional baseball league and struggle to help it succeed amidst their own growing rivalry.",
    Language: "English",
    Country: "USA",
    Awards: "Nominated for 2 Golden Globes. Another 8 wins & 9 nominations.",
    imdbRating: "7.3",
    imdbVotes: "98,003",
    imdbID: "tt0104694",
    Type: "movie",
    DVD: "25 Apr 2000",
    BoxOffice: "N/A",
    Production: "Columbia Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 5,
    Title: "Armageddon",
    Year: "1998",
    Rated: "PG-13",
    Released: "01 Jul 1998",
    Runtime: "151 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Michael Bay",
    Writer:
      "Jonathan Hensleigh (screenplay), J.J. Abrams (screenplay), Tony Gilroy (adaptation), Shane Salerno (adaptation), Robert Roy Pool (story), Jonathan Hensleigh (story)",
    Actors: "Bruce Willis, Billy Bob Thornton, Ben Affleck, Liv Tyler",
    Plot: "After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet.",
    Language: "English, Russian, Indonesian",
    Country: "USA",
    Awards: "Nominated for 4 Oscars. Another 15 wins & 36 nominations.",
    imdbRating: "6.7",
    imdbVotes: "410,052",
    imdbID: "tt0120591",
    Type: "movie",
    DVD: "19 Jan 1999",
    BoxOffice: "$201,573,391",
    Production: "Touchstone Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 6,
    Title: "Last Holiday",
    Year: "2006",
    Rated: "PG-13",
    Released: "13 Jan 2006",
    Runtime: "112 min",
    Genre: "Comedy, Drama",
    Director: "Wayne Wang",
    Writer:
      "Jeffrey Price (screenplay), Peter S. Seaman (screenplay), J.B. Priestley (based upon the motion picture screenplay by)",
    Actors: "Queen Latifah, LL Cool J, Timothy Hutton, Giancarlo Esposito",
    Plot: "Upon learning of a terminal illness, a shy woman decides to sell off all her possessions and live it up at a posh European hotel.",
    Language: "English",
    Country: "USA",
    Awards: "1 win & 5 nominations.",
    imdbRating: "6.4",
    imdbVotes: "44,301",
    imdbID: "tt0408985",
    Type: "movie",
    DVD: "18 Apr 2006",
    BoxOffice: "$38,399,961",
    Production: "Paramount Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 7,
    Title: "Inside Out",
    Year: "2015",
    Rated: "PG",
    Released: "19 Jun 2015",
    Runtime: "95 min",
    Genre: "Animation, Adventure, Comedy, Drama, Family, Fantasy",
    Director: "Pete Docter, Ronnie Del Carmen(co-director)",
    Writer:
      "Pete Docter (original story by), Ronnie Del Carmen (original story by), Pete Docter (screenplay by), Meg LeFauve (screenplay by), Josh Cooley (screenplay by), Michael Arndt (additional story material by), Simon Rich (additional story material by), Bill Hader (additional dialogue by), Amy Poehler (additional dialogue by)",
    Actors: "Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader",
    Plot: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    Language: "English",
    Country: "USA",
    Awards: "Won 1 Oscar. Another 98 wins & 117 nominations.",
    imdbRating: "8.1",
    imdbVotes: "649,109",
    imdbID: "tt2096673",
    Type: "movie",
    DVD: "03 Nov 2015",
    BoxOffice: "$356,461,711",
    Production: "Walt Disney Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 8,
    Title: "Hitch",
    Year: "2005",
    Rated: "PG-13",
    Released: "11 Feb 2005",
    Runtime: "118 min",
    Genre: "Comedy, Romance",
    Director: "Andy Tennant",
    Writer: "Kevin Bisch",
    Actors: "Will Smith, Eva Mendes, Kevin James, Amber Valletta",
    Plot: "While helping his latest client woo the woman of his dreams, a professional date-doctor finds that his game doesn't quite work on the gossip columnist with whom he's smitten.",
    Language: "English, Spanish",
    Country: "USA",
    Awards: "4 wins & 24 nominations.",
    imdbRating: "6.6",
    imdbVotes: "301,857",
    imdbID: "tt0386588",
    Type: "movie",
    DVD: "28 Jun 2005",
    BoxOffice: "$179,495,555",
    Production: "Sony Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 9,
    Title: "13 Hours",
    Year: "2016",
    Rated: "R",
    Released: "15 Jan 2016",
    Runtime: "144 min",
    Genre: "Action, Drama, History, Thriller, War",
    Director: "Michael Bay",
    Writer: "Chuck Hogan (screenplay), Mitchell Zuckoff (book)",
    Actors: "John Krasinski, James Badge Dale, Pablo Schreiber, David Denman",
    Plot: "During an attack on a U.S. compound in Libya, a security team struggles to make sense out of the chaos.",
    Language: "English, Arabic",
    Country: "USA, Malta, Morocco",
    Awards: "2 nominations.",
    imdbRating: "7.3",
    imdbVotes: "86,580",
    imdbID: "tt4172430",
    Type: "movie",
    DVD: "07 Jun 2016",
    BoxOffice: "$52,853,219",
    Production: "Paramount Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    movieID: 10,
    Title: "Sydney White",
    Year: "2007",
    Rated: "PG-13",
    Released: "21 Sep 2007",
    Runtime: "108 min",
    Genre: "Comedy, Drama, Romance",
    Director: "Joe Nussbaum",
    Writer:
      "Chad Gomez Creasey (screenplay), Chad Gomez Creasey (story), Dara Resnik Creasey (screenplay)",
    Actors: "Amanda Bynes, Sara Paxton, Matt Long, Jack Carpenter",
    Plot: "A modern retelling of Snow White set against students in their freshman year of college in the greek system.",
    Language: "English",
    Country: "USA, Canada",
    Awards: "N/A",
    imdbRating: "6.2",
    imdbVotes: "40,455",
    imdbID: "tt0815244",
    Type: "movie",
    DVD: "22 Jan 2008",
    BoxOffice: "$11,892,415",
    Production: "Morgan Creek Entertainment",
    Website: "N/A",
    Response: "True",
  },
];

// In-Memory Details from imdb generated by chatGPT for genres and their details (https://chat.openai.com/share/9592f50a-62c7-454e-b640-029daf603b2c)
let genres = [
  {
    genreID: 1,
    name: "Action",
    description:
      "Movies characterized by exciting sequences, fast-paced action, and often featuring heroic protagonists.",
    example_movies: ["Die Hard", "Mad Max: Fury Road", "The Dark Knight"],
  },
  {
    genreID: 2,
    name: "Comedy",
    description:
      "Movies intended to make the audience laugh, often featuring humorous situations, witty dialogue, and comedic performances.",
    example_movies: [
      "Superbad",
      "The Hangover",
      "Anchorman: The Legend of Ron Burgundy",
    ],
  },
  {
    genreID: 3,
    name: "Drama",
    description:
      "Movies focused on realistic characters and emotional themes, often exploring complex human relationships and societal issues.",
    example_movies: [
      "The Shawshank Redemption",
      "Forrest Gump",
      "The Godfather",
    ],
  },
  {
    genreID: 4,
    name: "Horror",
    description:
      "Movies designed to evoke fear, suspense, and terror in the audience, often featuring supernatural elements, monsters, or psychological horror.",
    example_movies: ["The Shining", "Get Out", "A Nightmare on Elm Street"],
  },
  {
    genreID: 5,
    name: "Science Fiction",
    description:
      "Movies that explore speculative or futuristic concepts, often involving advanced technology, space exploration, or extraterrestrial life.",
    example_movies: ["Star Wars", "Blade Runner", "The Matrix"],
  },
  {
    genreID: 5,
    name: "Fantasy",
    description:
      "Movies set in imaginary worlds with fantastical elements such as magic, mythical creatures, and epic quests.",
    example_movies: [
      "The Lord of the Rings",
      "Harry Potter",
      "Pan's Labyrinth",
    ],
  },
  {
    genreID: 6,
    name: "Thriller",
    description:
      "Movies characterized by intense excitement, suspense, and anticipation, often featuring plot twists and high stakes.",
    example_movies: ["The Silence of the Lambs", "Inception", "Se7en"],
  },
  {
    genreID: 7,
    name: "Romance",
    description:
      "Movies centered around romantic relationships, love, and affection, often featuring emotional connections and heartwarming moments.",
    example_movies: ["Titanic", "The Notebook", "Pride and Prejudice"],
  },
  {
    genreID: 8,
    name: "Adventure",
    description:
      "Movies focused on exciting journeys, exploration, and discovery, often set in exotic or dangerous locations.",
    example_movies: [
      "Indiana Jones and the Raiders of the Lost Ark",
      "Jurassic Park",
      "The Goonies",
    ],
  },
  {
    genreID: 9,
    name: "Animation",
    description:
      "Movies created using animation techniques, including traditional hand-drawn animation, computer-generated imagery (CGI), and stop-motion animation.",
    example_movies: ["Toy Story", "Spirited Away", "The Lion King"],
  },
];

// In-Memory Details from imdb generated by chatGPT for directors and their details ((https://chat.openai.com/share/8cfa20d9-69e9-42e2-93f5-fde520de0563)
let directors = [
  {
    directorID: 1,
    Name: "Christopher Nolan",
    "Full Name": "Christopher Edward Nolan",
    "Date of Birth": "July 30, 1970",
    Birthplace: "London, England, UK",
    "Known For": ["The Dark Knight Trilogy", "Inception", "Interstellar"],
    Awards: [
      "Academy Award nominations for Best Director and Best Picture for Inception and Dunkirk",
    ],
    "IMDb Profile": "https://www.imdb.com/name/nm0634240/",
  },
  {
    directorID: 2,
    Name: "Steven Spielberg",
    "Full Name": "Steven Allan Spielberg",
    "Date of Birth": "December 18, 1946",
    Birthplace: "Cincinnati, Ohio, USA",
    "Known For": ["Jaws", "E.T. the Extra-Terrestrial", "Schindler's List"],
    Awards: [
      "Multiple Academy Awards including Best Director for Schindler's List and Saving Private Ryan",
    ],
    "IMDb Profile": "https://www.imdb.com/name/nm0000229/",
  },
  {
    directorID: 3,
    Name: "Quentin Tarantino",
    "Full Name": "Quentin Jerome Tarantino",
    "Date of Birth": "March 27, 1963",
    Birthplace: "Knoxville, Tennessee, USA",
    "Known For": ["Pulp Fiction", "Kill Bill", "Django Unchained"],
    Awards: [
      "Academy Awards for Best Original Screenplay for Pulp Fiction and Django Unchained",
    ],
    "IMDb Profile": "https://www.imdb.com/name/nm0000233/",
  },
  {
    directorID: 4,
    Name: "Martin Scorsese",
    "Full Name": "Martin Charles Scorsese",
    "Date of Birth": "November 17, 1942",
    Birthplace: "Queens, New York City, New York, USA",
    "Known For": ["Goodfellas", "Taxi Driver", "The Departed"],
    Awards: ["Academy Awards for Best Director for The Departed"],
    "IMDb Profile": "https://www.imdb.com/name/nm0000217/",
  },
  {
    directorID: 5,
    Name: "Stanley Kubrick",
    "Full Name": "Stanley Kubrick",
    "Date of Birth": "July 26, 1928",
    Birthplace: "New York City, New York, USA",
    "Known For": ["2001: A Space Odyssey", "A Clockwork Orange", "The Shining"],
    Awards: ["Academy Award for Best Visual Effects for 2001: A Space Odyssey"],
    "IMDb Profile": "https://www.imdb.com/name/nm0000040/",
  },
];

// In-Memory Details from imdb generated by chatGPT for actors and their details ((https://chat.openai.com/share/8cfa20d9-69e9-42e2-93f5-fde520de0563)
let actors = [
  {
    actorID: 1,
    Name: "Bruce Willis",
    "Full Name": "Walter Bruce Willis",
    "Date of Birth": "March 19, 1955",
    Birthplace: "Idar-Oberstein, West Germany",
    "Known For": ["Die Hard", "The Sixth Sense", "Pulp Fiction"],
    Movies: ["Die Hard", "Pulp Fiction", "The Sixth Sense"],
  },
  {
    actorID: 2,
    Name: "Billy Bob Thornton",
    "Full Name": "Billy Bob Thornton",
    "Date of Birth": "August 4, 1955",
    Birthplace: "Hot Springs, Arkansas, USA",
    "Known For": ["Sling Blade", "Fargo", "Monster's Ball"],
    Movies: ["Sling Blade", "Fargo", "Monster's Ball"],
  },
  {
    actorID: 3,
    Name: "Ben Affleck",
    "Full Name": "Benjamin Géza Affleck-Boldt",
    "Date of Birth": "August 15, 1972",
    Birthplace: "Berkeley, California, USA",
    "Known For": ["Good Will Hunting", "Argo", "Gone Girl"],
    Movies: ["Good Will Hunting", "Argo", "Gone Girl"],
  },
  {
    actorID: 4,
    Name: "Liv Tyler",
    "Full Name": "Liv Rundgren Tyler",
    "Date of Birth": "July 1, 1977",
    Birthplace: "New York City, New York, USA",
    "Known For": [
      "The Lord of the Rings Trilogy",
      "Armageddon",
      "The Strangers",
    ],
    Movies: [
      "The Lord of the Rings: The Fellowship of the Ring",
      "Armageddon",
      "The Strangers",
    ],
  },
];
// In-Memory temp user list
let users = [
  {
    userID: 1,
    username: "eahowell",
    password: "Xyz123!",
    firstName: "Liz",
    lastName: "Howell",
    email: "eahowell@gmailx.com",
    dateOfBirth: {
      DOBmonth: 1,
      DOBday: 1,
      DOByear: 2000,
    },
    lists: {
      favorites: ["Armageddon", "Forrest Gump", "Hitch"],
      toWatch: ["Hitch"],
    },
  },
  {
    userID: 2,
    username: "eahowell2",
    password: "Xyz123!",
    firstName: "Liz",
    lastName: "Howell",
    email: "eahowell@gmailx.com",
    dateOfBirth: {
      DOBmonth: 1,
      DOBday: 1,
      DOByear: 2000,
    },
    lists: {
      favorites: ["Armageddon", "Forrest Gump", "Hitch"],
      toWatch: ["Hitch"],
    },
  },
  {
    userID: 3,
    username: "eahowell3",
    password: "Xyz123!",
    firstName: "Liz",
    lastName: "Howell",
    email: "eahowell@gmailx.com",
    dateOfBirth: {
      DOBmonth: 1,
      DOBday: 1,
      DOByear: 2000,
    },
    lists: {
      favorites: ["Armageddon", "Forrest Gump", "Hitch"],
      toWatch: ["Hitch"],
    },
  },
];

// Pass through the static files stored in the public folder
app.use(express.static("public"));

// READ - GET - Return a list of ALL movies to the user
app.get("/movies", (req, res) => res.status(200).json(movies));

// READ - GET - Return data about a single movie by title to the user
app.get("/movies/:title", (req, res) => {
  const { title } = req.params;
  const movie = movies.find((movie) => movie.Title === title);
  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send("The movie " + title + " was not found");
  }
});

// READ - GET - Return data about a genre (description) by name (e.g., “Thriller”)
app.get("/genres/:genreName", (req, res) => {
  const { genreName } = req.params;
  const genre = genres.find((genre) => genre.name === genreName);
  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send("The genre " + genre + " was not found");
  }
});

// READ - GET - Return data about a director (bio, birth year, death year) by name
app.get("/directors/:directorName", (req, res) => {
  const { directorName } = req.params;
  const director = directors.find((director) => director.Name === directorName);
  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send("The director " + directorName + " was not found");
  }
});

// READ - GET - Return a list of ALL users to the user
app.get("/users", (req, res) => res.status(200).json(users));

// READ - GET - Return the details of a specific to the user
app.get("/users/:username", (req, res) => {
  const { username } = req.params;
  const updatedUser = req.body;
  let user = users.find((user) => user.username === username);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("Username " + username + " was not found.");
  }
});

// CREATE - POST - Allow new users to register;  (username, password, first name, last name, email, date of birth)
app.post("/users", (req, res) => {
  let newUser = req.body;

  if (!newUser.username) {
    const message = "Missing username in request body";
    res.status(400).send(message);
  } else {
    newUser.userID = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// UPDATE - PUT - Allow users to update their user info (email, first name, last name, and password)
// Only those fields can be updated because we don't want username, userID, and DOB to be changed
app.put("/users/:username", (req, res) => {
  const { username } = req.params;
  const updatedUser = req.body;
  let user = users.find((user) => user.username === username);
  let resMsg = "For User " + username + ":";

  if (user) {
    // Check to see if field is in the body, if so make update, then check next field
    if (updatedUser.email) {
      user.email = updatedUser.email;
      resMsg =
        resMsg + "The email was updated to " + updatedUser.email + " --- ";
    }
    if (updatedUser.firstName) {
      resMsg =
        resMsg +
        "The first name was updated to " +
        updatedUser.firstName +
        ". --- ";
    }
    if (updatedUser.lastName) {
      user.lastName = updatedUser.lastName;
      resMsg =
        resMsg +
        "The last name was updated to " +
        updatedUser.lastName +
        ". --- ";
    }
    if (updatedUser.password) {
      user.password = updatedUser.password;
      resMsg = resMsg + "The password was updated.";
    }
    res.json(resMsg);
  } else {
    res.status(404).send("Username " + username + " was not found.");
  }
});

// UPDATE - PUT - Allow users to add a movie to their list of favorites
app.put("/users/:username/favorites/:movieTitle", (req, res) => {
  const { username, movieTitle } = req.params;
  let user = users.find((user) => user.username === username);

  if (user) {
    user.lists.favorites=user.lists.favorites.concat([movieTitle]);

    res
      .status(201)
      .send(
        "The movie " +
          movieTitle +
          " was added to " +
          username +
          "'s Favorites List."
      );
  } else {
    res.status(404).send("Username " + username + " was not found.");
  }
});

// DELETE - Allow users to remove a movie from their list of favorites
app.delete("/users/:username/favorites/:movieTitle", (req, res) => {
  const { username, movieTitle } = req.params;
  let user = users.find((user) => user.username === username);

  if (user) {
    user.lists.favorites = user.lists.favorites.filter(
      (title) => title !== movieTitle
    );
    res
      .status(201)
      .send(
        "The movie " +
          movieTitle +
          " was removed from " +
          username +
          "'s Favorites List."
      );
  } else {
    res.status(404).send("Username " + username + " was not found.");
  }
});

// DELETE - Allow existing users to deregister
app.delete("/users/:username", (req, res) => {
  const { username } = req.params;
  let user = users.find((user) => user.username === username);

  if (user) {
    users = users.filter((user) => user.username !== username);
    res.status(201).send("User " + username + " was deleted.");
  } else {
    res.status(404).send("Username " + username + " was not found.");
  }
});

// READ - GET - Allow users to see which actors star in which movies
app.get("/actors/:actorName/movies", (req, res) => {
  const { actorName } = req.params;
  let actor = actors.find((actor) => actor.Name === actorName);

  if (actor) {
    res.status(200).json(actor.Movies);
  } else {
    res.status(400).send("The actor's " + actorName + " was not found");
  }
});

// READ - GET - Return a list of ALL directors to the user
app.get("/directors", (req, res) => res.status(200).json(directors));

// Update - PUT - Allow users to add movie to the “To Watch” list
app.put("/users/:username/toWatch/:movieTitle", (req, res) => {
  const { username, movieTitle } = req.params;
  let user = users.find((user) => user.username === username);

  if (user) {
    user.lists.toWatch=user.lists.toWatch.concat([movieTitle]);
    res
      .status(201)
      .send(
        "The movie " +
          movieTitle +
          " was added to " +
          username +
          "'s To Watch List."
      );
  } else {
    res.status(404).send("Username " + username + " was not found.");
  }
});

// READ - GET - Return genreID of Actor by name
app.get("/genres/:genreName/id", (req, res) => {
  const { genreName } = req.params;
  let genreID = actors.find((genre) => genre.Name === genreName).genreID;

  if (genreIDID) {
    res.status(200).json(genreID);
  } else {
    res.status(400).send("The genre " + genreName + " was not found");
  }
});

// READ - GET - Return actorID of Actor by name
app.get("/actors/:actorName/id", (req, res) => {
  const { actorName } = req.params;
  let actorID = actors.find((actor) => actor.Name === actorName).actorID;

  if (actorID) {
    res.status(200).json(actorID);
  } else {
    res.status(400).send("The actor's " + actorName + " was not found");
  }
});

// READ - GET - Return directorID of Director by name
app.get("/directors/:directorName/id", (req, res) => {
  const { directorName } = req.params;
  let directorID = directors.find((director) => director.Name === directorName).directorID;
  if (directorID) {
    res.status(200).json(directorID);
  } else {
    res.status(400).send("The director " + directorName + " was not found");
  }
});

// READ - GET - Return userID of User by username
app.get("/users/:username/id", (req, res) => {
  const { username } = req.params;
  let userID = users.find((user) => user.username === username).userID;

  if (userID) {
    res.status(201).json(userID);
  } else {
    res.status(404).send("Username " + username + " was not found.");
  }
});

// READ - GET - Return movieID of Movie by title
app.get("/movies/:title/id", (req, res) => {
  const { title } = req.params;
  const movieID = movies.find((movie) => movie.Title === title).movieID;
  
  if (movieID) {
    res.status(200).json(movieID);
  } else {
    res.status(400).send("The movie " + title + " was not found");
  }
});

//   Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});

//   CREDITS
//   "Top 100 IMDB Movies" (imdb_data_100.json) by Helena Oliveira, Observable License: [License Type]. Available at: [https://observablehq.com/@btwhelena/top-100-imdb-movies]
