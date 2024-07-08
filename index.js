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
// app.use(middleware);
// app.use(requestLogger);

// let courses = [
//     {id : 1, name : 'java'},
//     {id : 2, name : 'javascript'},
//     {id : 3, name : 'python'}
// ];
// app.get('/courses', (req, res) => {
//     res.json(courses);
// });

// app.post('/courses', (req, res) => {
//    const name = req.body.name;
//    const newCourse = {id : courses.length+1, name : name};
//    courses.push(newCourse);
//    res.send(courses);
// })

// Update id 1, name : name --> spring
// Delete id 2 course;
// app.put('/courses', (req, res) => {
//     try {
//         const id = req.body.id;
//         const name = req.body.name;
//         for (let j=0; j<courses.length; j++){
//             if (courses[j].id === id){
//                 courses[j].name = name;
//             }
//         }
//         res.send(courses);
//     } catch (err) {
//         res.status(505).send(err);
//     }
// })

// app.delete('/courses', (req, res) => {
//     const id = req.body.id;
//     for (let j=0; j<courses.length; j++){
//         if (courses[j].id === id){
//             courses.splice(j, 1);
//         }
//     }
//     res.send(courses);
// })

// Creating Custom Middlewear
// function middleware(req, res, next){
//     console.log("called");
//     next();
// }
// logger middleware
// method, ip, hostname, date
// function requestLogger(req, res, next){
//     console.log(req.ip);
//     console.log(req.hostname);
//     console.log(req.method);
//     console.log(new Date().toISOString());
//     next();
// }
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
    category : {
        type : String,
        required : true
    }
});
const productModel = mongoose.model("products", productSchema);
// Create a product
app.post('/api/products', async (req, res) =>{
    const body = req.body;
    const product = await productModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        category : req.body.category
    })
    console.log(product);
    return res.status(201).json({message : 'Product Created Successfully.'});
})

// Get all products
app.get('/api/products', async (req, res) => {
    const allProducts = await productModel.find({});
    return res.status(200).json({message: 'Products fetched successfully', allProducts});
})

// Get a product by product id
app.get('/api/products/:id', async (req, res) => {
    const product = await productModel.findById(req.params.id);
    return res.json(product);
})

// Update Product Details
app.put('/api/products/:id', async (req, res) => {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedProduct);
})

// Delete a product by id
app.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    return res.json(deletedProduct);s
})
const host = 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log('Server has started.');

})
