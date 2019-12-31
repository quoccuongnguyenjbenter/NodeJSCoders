var express=require('express');
var bodyParser = require('body-parser');
var app=express();

var port=3000;

app.set("view engine","pug");
app.set("views","./views");
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users=[
    {id: 1, name: 'Cường'},
    {id: 2, name: 'Bườm'},
    {id: 3, name: 'Bảo'}
];

app.get('/',function(req,res){
    // res.send("<h1>Hello Coders.Tokyo</h1><a href='/users'>User List</a>");
    res.render("index",{
        name: "AAAA"
    });    
});
app.get('/users',function(req,res){
    // res.send("User list");
    res.render("users/index",{
    //    users: [
    //         {id: 1, name: "Cuong"},
    //         {id: 2, name: "Buom"}
    //     ]
        users: users
    });
});
app.get('/users/search',function(req,res){
    var q=req.query.q;
    var matchedUsers=users.filter(function(user){  
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    // console.log(req.query);
    res.render("users/index",{
        users: matchedUsers
    });
});
app.get('/users/create',function(req,res){
    res.render('users/create');
});
app.post('/users/create',function(req,res){
    // res.render('users/create');
    // console.log(req.body);
    users.push(req.body);
    res.redirect("/users");
});
app.listen(port, function(){
    console.log("Đã truy cập vào Server cổng "+port);
});