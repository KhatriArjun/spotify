const express = require("express");
const mongoose = require("mongoose");
const User = require("../spotify-backend/models/Users");
const bodyparser = require("body-parser");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

// const Usermodel = require("./MODELS/Users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

require("dotenv").config();
const cors = require("cors");
app.use(cors()); //cors: suru ma hamle api banauxam tw rw teslai hamle bahirw bata call grna mildaina yaa kunai pani external request le call grna mildaina for security reasons tesaile hamle cors use grxam rw tyo security system lai bypass grxam

app.use(express.json()); // anything that will come in req.body will be converted into json and it is necessary because everything we do with the data is in the format of json.

//api : GET type: / : return text "hello world"
const port = 8000;

// connect mongodb to our node app.
// mongoose.connect() takes an two arguments 1. which db to connect to (db url) 2.connection options

mongoose
  .connect(
    "mongodb+srv://arjunkhatri123ak:" +
      process.env.MONGO_PASSWORD +
      "@cluster0.2agsimb.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error while connecting " + err);
  });
// nodemon install garahai  nodemon garesi error aayasni feri feri node index garnu pardaina uuto kaam garxa live server jsto . la gara abo res aayo abo milau
// la vayo. abo tehi folder name small bhayarw khi bhayna model ko file ko starting capital ani export garni pani capital.

//setup passport-jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretKey; // it is a key through which we encrypt and decrypt data

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    // User.findOne({ id: jwt_payload.sub }, function (err, user) {   // here User is the model of the users model as designed in previous
    //     if (err) {
    //         // we are returning (error, status whether the user exist or not)
    //         return done(err, false); //error and user doesnot exist
    //     }
    //     if (user) {
    //         return done(null, user);  // no error and user exists so returning the user
    //     } else {
    //         return done(null, false); // no error and user doesnot exist
    //         // or you could create a new account
    //     }
    // });
    try {
      const user = await User.findOne({ _id: jwt_payload.identifier });

      if (user) {
        return done(null, user);
      } else {
        // Create a new user based on the JWT payload
        const newUser = new User({
          id: jwt_payload.identifier,
          // Include other user properties from the JWT payload
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Return the newly created user
        return done(null, savedUser);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

app.get("/", (req, res) => {
  //req contains all the data for request
  //res contains all the data for response
  res.send("hello world");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);
//now we will tell the express that our server will run on the localhost:8000
app.listen(port, () => {
  console.log("App is running on port" + port);
});
