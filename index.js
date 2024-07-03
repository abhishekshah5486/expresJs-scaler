const express = require('express');
const app = express();

let courses = [
    {id : 1, name : 'java'},
    {id : 2, name : 'javascript'},
    {id : 3, name : 'python'}
];
app.get('/courses', (req, res) => {
    res.json(courses);
});
const host = 'localhost';
const port = 3000;
app.listen(port, () => {
    console.log('Server has started.');
})