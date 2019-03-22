var express = require('express');
var hbs = require('hbs');
var fs = require('fs');
var app = express();

// app.use(express.static(__dirname+'/public'));
// app.get('/public',function (req, res) {
//     res.send('./public')});
// app.use(express.static(__dirname, '/public'));
// app.use(express.static(__dirname+'/public'));
// app.use(express.static(__dirname+'/views'));

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
// app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now}: \n protocol: ${req.protocol} \n para: ${req.params} 
    \n path:${req.path} \n hostname:${req.hostname} \n ip: ${req.ip}`;
    console.log(log);
    fs.appendFileSync('server.log',log + '\n');
    next();
});
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'home Page',
        welcomeMsg: 'Welcome to myWebsite',
        currentYear: new Date().getFullYear()
    });
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'Welcome to About page',
        currentYear: new Date().getFullYear()
    });
});
app.get('/contact_details',(req,res)=>{
    res.render('contact_details.hbs',{
        email:'pawanbora@ymail.com',
        contact: 9401335285,
        add: 'Golaghat, Assam'
    });
});
app.get('/home2',(req,res)=>{
    res.render('home2.hbs',{
    });
});
app.get('/exm',(req,res)=>{
    res.render('exm.hbs',{
    });
});
app.get('/aca',(req,res)=>{
    res.render('aca.hbs',{
    });
});
app.get('/self_details',(req,res)=>{
    res.render('self_details.hbs',{
        
    });
});
app.get('/intro',(req,res)=>{
    res.send('Hello World. My name is pawan.');
});
app.get('/course',(req,res)=>{
    res.send('I am pursuing BSc IT');
});
app.get('/Grades',(req,res)=>{
    var grade={
        "CAP219": "A",
        "CAP123": "O",
        "MTH123": "O"
    }
    res.send(grade);
});
app.get('/marks',(req,res)=>{
    
        var mark={
            "CAP219": 78,
            "CAP123": 95,
            "MTH123": 99
        }
    res.send("marks are: CAP123: ",mark.CAP123,"CAP219 :",mark.CAP219,"MTH123 :",mark.MTH123);
});
app.get('/att',(req,res)=>{
    var attendence={
        "CAP219": "90%",
        "CAP123": "75%",
        "MTH123": "89%"
    }

    res.send(attendence);
});
app.listen(3000,() => {console.log('server started at port 3000')});