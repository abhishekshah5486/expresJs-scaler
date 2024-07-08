const userModel = require('../Models/user.model');

// Create a user
exports.createUser = async (req, res) => {
    const createdUser = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.email,
    });

    return res.status(201).json(createdUser);
}

// Fetch all users by id
exports.getAllUsers = async (req, res) => {
    const allUsers = await userModel.find({});
    res.json(allUsers);
}

// Fetch user by id
exports.getUserById = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.json(user);
}

// Update user by id
exports.updateUserById = async (req, res) => {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedUser);
}

// delete user by id
exports.deleteUserById = async (req, res) => {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
}