const path = require("path");
const express = require("express");
const favicon = require('serve-favicon');
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization


const homeRouter = require('./routes/home_routes');
const navigationRouter = require('./routes/navigation_routes');
const managementRouter = require('./routes/management_routes');
const galleryRoutes = require('./routes/gallery_routes');
const app = express();

app.set('view engine', 'ejs');

//Routes
app.use('/management', managementRouter);
app.use('/gallery', galleryRoutes);
app.use('/navigation', navigationRouter);
app.use('/', homeRouter);


// Website Icon
app.use(express.static(path.join(__dirname, '')));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))



const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //change to true if needed
app.use(session({
    secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
//app.use(passport.initialize());
//app.use(passport.session());
//passport.use(login.createStrategy());
// To use with sessions
//passport.serializeUser(login.serializeUser());
//passport.deserializeUser(login.deserializeUser());


app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),  function(req, res) {
    // console.log(req.user);
    res.redirect('/home');
});

app.post('/signup', function(req, res) {
    res.redirect('/home');
});



const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.listen(3000, function () {
    console.log(('Listening on port 3000 ...'))
});

