const express = require('express');
const app = express();
// Middleware function (converts string to json format)
app.use(express.json());

let courses = [
    {id : 1, name : 'java'},
    {id : 2, name : 'javascript'},
    {id : 3, name : 'python'},
];
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
    const id = req.body.id;
    const name = req.body.name;
    for (let j=0; j<courses.length; j++){
        if (courses[j].id === id){
            courses[j].name = name;
        }
    }
    res.send(courses);
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
const host = 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log('Server has started.');
})