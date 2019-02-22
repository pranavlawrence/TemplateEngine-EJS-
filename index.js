var express= require('express');
var app=express();

var body_parser=require('body-parser');
app.use(body_parser.urlencoded({ extended:false }));
app.use(body_parser.json());



app.set('view engine', 'ejs')

app.get('/', function(request,response){

    response.render('pages/one');

})

app.post('/login', function(request,response){
    var username= request.body.username;
    var password=request.body.password;
    var email=request.body.email;
    var mobile=request.body.mobile;
    if(username==="pranav")
    {
        response.render('pages/display', {username: request.body.username, password: request.body.password, email:request.body.email, mobile:request.body.mobile})
    }
    else
    {
        response.render('page/one')
    }

})

app.listen(3000, () => {
    console.log('Started')
  })

