const usersRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");

const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe} = require('../controllers/users');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, hashPassword, } = require('../middlewares/users');

usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.post(
    '/users', 
    createUser, 
    sendUserCreated, 
    checkAuth,
    hashPassword,
     sendMe,
    );
usersRouter.put(
    '/users/:id',
    checkAuth,
     updateUser, 
     sendUserUpdated);

     usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;