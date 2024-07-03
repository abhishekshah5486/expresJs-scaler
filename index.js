const express = require('express');
const app = express();
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

const host = 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log('Server has started.');
})