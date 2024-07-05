const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://abhishekshah5486:DJcl8vvHR43BRlQ5@cluster0.j9ind8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then (() => {
    console.log("DB Connected.");
}).catch((err) => {
    console.log("Failed", err);
})

// Middleware function (converts string to json format)
app.use(express.json());
app.use(middleware);
app.use(requestLogger);

let courses = [
    {id : 1, name : 'java'},
    {id : 2, name : 'javascript'},
    {id : 3, name : 'python'}
];6
app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req, res) => {
   const name = req.body.name;
   const newCourse = {id : courses.length+1, name : name};
   courses.push(newCourse);
   res.send(courses);
})

// Update id 1, name : name --> spring
// Delete id 2 course;
app.put('/courses', (req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        for (let j=0; j<courses.length; j++){
            if (courses[j].id === id){
                courses[j].name = name;
            }
        }
        res.send(courses);
    } catch (err) {
        res.status(505).send(err);
    }
})

app.delete('/courses', (req, res) => {
    const id = req.body.id;
    for (let j=0; j<courses.length; j++){
        if (courses[j].id === id){
            courses.splice(j, 1);
        }
    }
    res.send(courses);
})

// Creating Custom Middlewear
function middleware(req, res, next){
    console.log("called");
    next();
}
// logger middleware
// method, ip, hostname, date
function requestLogger(req, res, next){
    console.log(req.ip);
    console.log(req.hostname);
    console.log(req.method);
    console.log(new Date().toISOString());
    next();
}
const host = 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log('Server has started.');
})

// Product Schema
const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_price : {
        type : String,
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    catgegory : {
        type : String,
        required : true
    }
});