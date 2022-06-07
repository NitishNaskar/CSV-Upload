const express=require('express');
const app=express();
const port=8000;

const db=require('./config/mongoose');

// make the uploads path available to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));

// set up routes
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error ! In node.js server ....');
        return;
    }

    console.log('Ok ! node.js server is running ....');
})