const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

// added this
// const module = require('path');

// var corsOptions = {
//   //origin: "http://localhost:3000"
//   origin: "https://overunderwebapp.herokuapp.com"
// };

// app.use(cors(corsOptions));

app.use(express.static('public'));

// app.get('*',(req,res)=>{  
//     res.sendFile(path.join(__dirname,'public/index.html'));
// })

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to the database!");
  }).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

require("./app/routes/AnimalLifeSpan.routes")(app);

const PORT = process.env.PORT || 8000;

app.get('*',(req,res)=>{  
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
