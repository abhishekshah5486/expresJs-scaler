const express = require('express');
const router = express.Router();
const userControllers = require('../Controllers/user.controller');

// Create user
router.post('/', userControllers.createUser);

// Get all users
router.get('/', userControllers.getAllUsers);

// Get user by id
router.get('/:id', userControllers.getUserById);

// Update user by id
router.put('/:id', userControllers.updateUserById);

// Delete user by id
router.delete('/:id', userControllers.deleteUserById);

module.exports = router;
