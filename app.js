const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js');

app = express()

var items = []
let workItems = []
let homeTitle = "All"
let currentDay = date();

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))






days = ['Sunday','Monday','Tuesday','Wednesday'
,'Thursday','Friday','Saturday'];



app.get('/',(req,res) => {


res.render("list",{listTitle : homeTitle,ac : "/",day: currentDay,newItems:items});

});



app.post('/', (req,res) => {
item = req.body.inp;
items.push(item);
console.log(item+"pusheds");
res.redirect("/");

})


app.get("/work",(req,res) => {
res.render("list",{listTitle : "Work",ac: "/work",day: currentDay,newItems:workItems});

})

app.get("/aboutus",(req,res) => {
  res.render("about");
})

app.post('/work', (req,res) => {
item = req.body.inp;
workItems.push(item);
res.redirect("/work");

})


app.listen(3000,(req,res) =>

console.log("RUNNING")
)
