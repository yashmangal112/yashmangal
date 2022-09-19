const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();

const port = process.env.PORT || 3000;


// console.log(path.join(__dirname, 'Public/index.html'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/Yash-Portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;

// console.log(path.join(__dirname, 'Public/index.html'));
// app.get("/", (req, res)=>{
//     res.statusCode = 200;
//     (res.sendFile(path.join(__dirname, 'Public/index.html')));
// })
// console.log(path.json(__dirname, 'index.html'))
// console.log(path.join(__dirname, 'Public/index.html'));
// db.once('connection', ()=>{
//     console.log('Ah, we have our first user!');
// })
// db.on('error', ()=>{
//     console.log('Sorry, Error in connecting to Database!')
// })

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))


//  Store Date For Main Site DB
app.post('/submit', (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var drop_line = req.body.drop_line;

    var data = {
        "name": name,
        "email": email,
        "drop_line": drop_line
    }

    db.collection('users').insertOne(data, (err, collection)=>{
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    setTimeout(() => {
        console.log('Site reload')
        return res.redirect('index.html')    // changes
    }, 3000);
})


//  Store Date For UI/UX Design Project DB
app.post('/submit_Ux', (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var drop_line = req.body.drop_line;

    var data = {
        "name": name,
        "email": email,
        "drop_line": drop_line
    }

    db.collection('users_Ux').insertOne(data, (err, collection)=>{
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully In UI/UX Design DB");
    });

    setTimeout(() => {
        console.log('Site reload of UX Design Projects')
        return res.redirect('UxDesignProjects.html')    // changes
    }, 3000);
})


//  Store Date For Web Developer Project DB
app.post('/submit_WebD', (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var drop_line = req.body.drop_line;

    var data = {
        "name": name,
        "email": email,
        "drop_line": drop_line
    }

    db.collection('users_WebD').insertOne(data, (err, collection)=>{
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully In WebD Project DB");
    });

    setTimeout(() => {
        console.log('Site reload of WebD Projects')
        return res.redirect('WebDProjects.html')    // changes
    }, 3000);
})




// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text-html', 'style-css')
//     // res.yash();
//     console.log(req.url)
//     if (req.url == '/') {
//         res.statusCode = 200;
//         const index = fs.readFileSync('index.html');
//         res.end(index.toString());
//     }
//     else if(req.url == '/UxDesignProjects.html'){
//         res.statusCode = 200;
//         const uxproject = fs.readFileSync('UxDesignProjects.html')
//         res.end(uxproject.toString())
//     }
//     else if(req.url == '/WebDProjects.html'){
//         res.statusCode = 200;
//         const webdproject = fs.readFileSync('WebDProjects.html')
//         res.end(webdproject.toString());
//     }
//     else{
//         res.statusCode = 404;
//         res.end('<h2>Not Found</h2>')
//     }
// })

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});
// console.log('Server is listening on PORT 3000');