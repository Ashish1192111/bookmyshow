const express = require("express");
let passport = require("passport");
let jwt = require("jsonwebtoken");
let JWTStrategy = require("passport-jwt").Strategy;
let ExtractJWT = require("passport-jwt").ExtractJwt;


const { movies, users ,seats, bookings } = require("./moviesData")

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,PATCH");
    next();
});

app.use(passport.initialize());

let port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Server Started on port ${port}!`));

const params = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "jwsecret2738692"
}


const jwtExpirySeconds = 1000;

let strategy = new JWTStrategy(params, function (token, done) {
    console.log("In JWT Strategy", token);

    let user = users.find(u => u.email === token.user);
    console.log("User ", user);
    if (!user) {
        return done(null, false, { message: "Incorrect Email & Password" })
    }
    else {
        return done(null, user)
    }
})

passport.use("All", strategy)


app.post("/login", function (req, res) {
    let { email, password } = req.body;
    let user = users.find(u => u.email === email && u.password === password);
    console.log(user)
    if (user) {
        let payload = { user: user.email };
        let token = jwt.sign(payload, params.secretOrKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds
        })
        res.send({ token: "bearer " + token , user : user });
    }
    else {
        res.status(404).send("Invalid credentials")
    }

});




app.get("/movies/:city", function (req, res) {
    const { city } = req.params;
    const { language, format, genre, q } = req.query;
    
    let filteredMovies = movies;
  
    if (city) {
      filteredMovies = movies.filter(movie =>
        movie.theaters.some(theater => theater.city.toLowerCase() === city.toLowerCase())
      );
    }
    
    if (q) {
      filteredMovies = filteredMovies.filter(movie =>
        movie.title.toLowerCase().includes(q.toLowerCase())
      );
    }
  
    filteredMovies = filterParam(filteredMovies, "language", language);
    filteredMovies = filterParam(filteredMovies, "genre", genre);
    filteredMovies = filterParam(filteredMovies, "format", format);
  
    res.json(filteredMovies);
  });



  app.get("/getMovie/:city/:id", function(req, res) {
    const { city, id } = req.params;
  
    const movieFound = movies.find(movie => {
      return movie.id === +id && 
             movie.theaters.find(theater => theater.city === city);
    });
  
    if (movieFound) {
      res.json(movieFound);
    } else {
      res.status(404).send("Movie not found in the specified city.");
    }
  });

 app.get("/seats", function(req,res){
  res.send(seats)
 })



app.get("/movies", passport.authenticate("All", { session: false }), async function (req, res) {
    res.send(movies);

})

app.get("/getuser/:id", function(req,res) {
  let id = +req.params.id
  let userDetails = users.find((u) => u.id === id)
  if(userDetails)
  {
    res.send(userDetails)
  }
  else
  {
    res.status(404).send("User not found")
  }
})


app.put("/putuser/:id", function (req, res) {
  let id = +req.params.id;
  let userData = req.body

  let index = users.findIndex((u) => u.id === id)
  console.log(index);
  if (index >= 0) {
    users[index] = { ...userData };
    res.send(userData);
  }
  else {
    res.status(401).send("User not Updated")
  }

});


app.post("/booking", function(req,res){
  let body = req.body
  let bookingData = {
    orderId : bookings.length + 1,
    ...body
  }
  let booking = bookings.push(bookingData)
  if(booking)
  {
    res.send("Data is Added")
  }
  
});


app.get("/getBooking/:userid", function(req,res){
  let userid = +req.params.userid

  let filterBooking = bookings.filter((b) => b.userId === userid)
  if(filterBooking)
  {
    res.send(filterBooking)
  }
  else
  {
    res.status(401).send("User not Updated")
  }
})


let filterParam = (arr, name, values) => {
    if (!values) return arr;
    let valuesArr = values.split(",");
    let arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1[name]));
    return arr1;
  };



//   passport.authenticate("roleAll",{session : false})